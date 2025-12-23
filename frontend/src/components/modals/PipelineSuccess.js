import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
  Text,
  VStack,
  useTheme,
} from "@chakra-ui/react";
import React from "react";

function PipelineSuccess({ response, showModal, setShowModal, resetNode }) {
  const theme = useTheme();

  return (
    <Modal
      isOpen={showModal}
      isCentered
      onClose={() => setShowModal(false)}
      size="md"
    >
      <ModalOverlay backdropFilter="blur(4px)" bg="blackAlpha.300" />
      <ModalContent
        borderRadius="md"
        boxShadow={theme.shadows.primaryShadow}
        p={2}
      >
        <ModalHeader
          fontWeight="bold"
          fontSize="lg"
          color={theme.colors.primary}
          borderBottom={`1px solid ${theme.colors.border}`}
          mb={4}
        >
          Pipeline Succeeded
        </ModalHeader>

        <ModalBody>
          <VStack
            spacing={4}
            bg="linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)"
            p={6}
            borderRadius="lg"
            boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
            color="#2e7d32"
          >
            <Box 
              w="100%" 
              display="flex" 
              justifyContent="space-between"
              alignItems="center"
              p={3}
              bg="white"
              borderRadius="md"
              boxShadow="sm"
            >
              <Text fontWeight="bold" fontSize="md">Number of Nodes:</Text>
              <Text fontWeight="bold" fontSize="lg" color="rgb(99, 102, 241)">
                {response?.nodes ?? 0}
              </Text>
            </Box>

            <Box 
              w="100%" 
              display="flex" 
              justifyContent="space-between"
              alignItems="center"
              p={3}
              bg="white"
              borderRadius="md"
              boxShadow="sm"
            >
              <Text fontWeight="bold" fontSize="md">Number of Edges:</Text>
              <Text fontWeight="bold" fontSize="lg" color="rgb(99, 102, 241)">
                {response?.edges ?? 0}
              </Text>
            </Box>

            <Box 
              w="100%" 
              display="flex" 
              justifyContent="space-between"
              alignItems="center"
              p={3}
              bg="white"
              borderRadius="md"
              boxShadow="sm"
            >
              <Text fontWeight="bold" fontSize="md">Directed Acyclic Graph (DAG):</Text>
              <Text 
                fontWeight="bold" 
                fontSize="lg"
                color={response?.isDag ? "#2e7d32" : "#d32f2f"}
              >
                {response?.isDag ? "✓ Yes" : "✗ No"}
              </Text>
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter gap={3}>
          <Button
            bg={theme.colors.primary}
            color="white"
            _hover={{ bg: theme.colors.primary }}
            onClick={() => setShowModal(false)}
          >
            Close
          </Button>

          <Button
            variant="outline"
            borderColor={theme.colors.primary}
            color={theme.colors.primary}
            _hover={{
              bg: theme.colors.primaryLight100,
              borderColor: theme.colors.primary,
            }}
            onClick={() => {
              setShowModal(false);
              resetNode();
            }}
          >
            Close & Reset Nodes
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default PipelineSuccess;
