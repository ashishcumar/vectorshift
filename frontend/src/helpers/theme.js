export const theme = {
  colors: {
    primary: "#6366F1",
    secondary: "#111927",
    bgLight: "#f9fafb",
    border: "#e4e4e7",
    primaryLight100: "#f3f6fe",
    primaryLight200: "#Dedff5",
    nodeTitleBg:"#EEF2FF"
  },
  shadows: {
    hoverShadow: "0px 0px 0px 4px #cecffc",
    primaryShadow: "1px 1px 3px 0px #6c737f50",
    secondaryShadow:"0 1px 2px rgba(0, 0, 0, 0.05)",
    
  },
  components: {
    Input: {
      variants: {
        outline: {
          field: {
            _focus: {
              borderColor: "rgb(99, 102, 241)",
              boxShadow: "0 0 0 1px rgb(99, 102, 241)",
            },
          },
        },
      },
    },
    Select: {
      variants: {
        outline: {
          field: {
            _focus: {
              borderColor: "rgb(99, 102, 241)",
              boxShadow: "0 0 0 1px rgb(99, 102, 241)",
            },
          },
        },
      },
    },
    Text: {
      baseStyle: {
        color: "#111927",
        fontSize: "12px",
      },
    },
  },
};
