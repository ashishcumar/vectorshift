import { QuestionOutlineIcon } from "@chakra-ui/icons";
import { Box, Grid, Text, Tooltip } from "@chakra-ui/react";
import { useState, useEffect, useRef } from "react";

const ResizableTextarea = ({ 
  setVariable, 
  heading, 
  toolTip, 
  placeholder,
  value,
  onChange,
  onResize,
  minHeight = 40,
  maxHeight = 300
}) => {
  const textareaRef = useRef(null);
  const [isEmpty, setIsEmpty] = useState(true);
  const [content, setContent] = useState(value || "");

  useEffect(() => {
    if (value !== undefined && value !== content) {
      setContent(value);
      if (textareaRef.current) {
        textareaRef.current.innerText = value;
      }
    }
  }, [value, content]);

  useEffect(() => {
    const element = textareaRef.current;
    if (element) {
      element.style.height = "auto";
      const scrollHeight = element.scrollHeight;
      const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight);
      element.style.height = `${newHeight}px`;
      
      if (onResize) {
        onResize(newHeight);
      }
    }
  }, [content, minHeight, maxHeight, onResize]);

  useEffect(() => {
    const element = textareaRef.current;
    if (!element) return;

    const handleClick = (e) => {
      const closeIcon = e.target.closest('.tag-close-icon');
      if (closeIcon) {
        e.stopPropagation();
        e.preventDefault();
        const tag = closeIcon.closest('.tag');
        if (tag) {
          const variableName = tag.getAttribute('data-variable');
          const currentText = element.innerText;
          const newText = currentText.replace(new RegExp(`{{\\s*${variableName}\\s*}}`, 'g'), '');
          element.innerText = newText;
          setIsEmpty(newText?.trim() === "");
          setContent(newText);
          
          const tagMatches = [...newText.matchAll(/{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g)];
          const uniqueTags = [...new Set(tagMatches.map((match) => match[1].trim()))];
          
          if (setVariable) {
            setVariable(uniqueTags);
          }
          
          if (onChange) {
            onChange(newText);
          }
        }
      }
    };

    element.addEventListener('click', handleClick);
    return () => {
      element.removeEventListener('click', handleClick);
    };
  }, [setVariable, onChange]);

  const handleBlur = () => {
    const element = textareaRef.current;
    if (element) {
      const text = element.innerText;
      const html = text.replace(/{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g, (_, tag) => {
        const closeIconSvg = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" class="tag-close-icon" style="display: inline-block; vertical-align: middle; margin-left: 6px; cursor: pointer; pointer-events: auto;"><path d="M7.5 2.5L2.5 7.5M2.5 2.5L7.5 7.5" stroke="#6B7280" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
        return `<span class="tag" data-variable="${tag}"><span class="tag-text">{{ ${tag} }}</span>${closeIconSvg}</span>`;
      });
      element.innerHTML = html;
    }
  };

  const handleInput = () => {
    const element = textareaRef.current;
    if (!element) return;
    const text = element.innerText;
    setIsEmpty(text?.trim() === "");
    setContent(text);
    
    const tagMatches = [...text.matchAll(/{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g)];
    const uniqueTags = [...new Set(tagMatches.map((match) => match[1].trim()))];
    
    if (setVariable) {
      setVariable(uniqueTags);
    }
    
    if (onChange) {
      onChange(text);
    }
  };

  return (
    <Grid margin={"8px 0"} position={"relative"}>
      <Text
        sx={{
          fontSize: "13px",
          fontWeight: "500",
          color: "#374151",
          marginBottom: "6px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        {heading}
        <span style={{ color: "#ef4444" }}>*</span>
        {toolTip ? (
          <Tooltip label={toolTip} aria-label="A tooltip">
            <QuestionOutlineIcon fontSize="12px" color="#9ca3af" />
          </Tooltip>
        ) : null}
      </Text>
      <Grid position={"relative"}>
        <Box
          ref={textareaRef}
          contentEditable
          suppressContentEditableWarning
          onBlur={handleBlur}
          onInput={handleInput}
          onFocus={(e) => {
            if (e.target.id === "input") {
              e.stopPropagation();
            } else {
              const range = document.createRange();
              const selection = window.getSelection();
              range.selectNodeContents(textareaRef.current);
              range.collapse(false);
              selection.removeAllRanges();
              selection.addRange(range);
              if (textareaRef?.current?.innerHTML?.endsWith("</span>")) {
                textareaRef.current.innerHTML =
                  textareaRef?.current?.innerHTML + " ";
              }
              textareaRef.current.focus();
            }
          }}
          sx={{
            border: "1px solid #d1d5db",
            borderRadius: "4px",
            padding: "8px 10px",
            minHeight: `${minHeight}px`,
            maxHeight: `${maxHeight}px`,
            overflowY: "auto",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            fontSize: "13px",
            width: "100%",
            color: "#111827",
            resize: "none",
            transition: "all 0.15s ease",
            backgroundColor: "#ffffff",
            lineHeight: "1.5",
            "&:hover": {
              borderColor: "#9ca3af",
            },
            "&:focus": {
              borderColor: "#3b82f6",
              boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)",
              outline: "none",
            },
            "&::before": {
              content: placeholder && isEmpty ? `"${placeholder}"` : '""',
              position: "absolute",
              left: "10px",
              top: "8px",
              color: "#9ca3af",
              pointerEvents: "none",
              fontSize: "13px",
            },
            "& .tag": {
              backgroundColor: "#fce7f3",
              color: "#4B0082",
              padding: "6px 12px",
              borderRadius: "16px",
              fontWeight: "500",
              fontSize: "11px",
              border: "1px solid #e5d5e5",
              fontFamily: "'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace",
              display: "inline-flex",
              alignItems: "center",
              verticalAlign: "middle",
              marginRight: "4px",
              "& .tag-text": {
                color: "#4B0082",
              },
              "& svg": {
                flexShrink: 0,
                pointerEvents: "auto",
              },
              "&:hover": {
                backgroundColor: "#fbcfe8",
              },
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ResizableTextarea;
