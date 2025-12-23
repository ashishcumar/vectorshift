import { useState } from "react";
import useShowToast from "./useShowToast";
import { selector, useStore } from "../store";
import { shallow } from "zustand/shallow";

const useApiCall = (setShowModal) => {
  const { showToast } = useShowToast();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();
  const baseurl = "http://127.0.0.1:8000";
  const endpoint = "/pipelines/parse";

  const { nodes, edges } = useStore((state) => state);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${baseurl}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nodes: nodes,
          edges: edges,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data) {
        setResponse({
          nodes: data.num_nodes || 0,
          edges: data.num_edges || 0,
          isDag: data.is_dag !== undefined ? data.is_dag : true,
        });
        setShowModal(true);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      showToast({
        description:
          "Backend is not deployed, please run backend server locally.",
        title: "Backend Not Deployed.",
        duration: 5000,
        isClosable: true,
        position: "top-right",
        status: "error",
      });
    }
  };

  return { handleSubmit, response, loading };
};

export default useApiCall;
