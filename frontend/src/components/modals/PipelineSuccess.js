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
  HStack,
  VStack,
  Divider,
  Badge,
  useTheme,
} from "@chakra-ui/react";
import React from "react";

function PipelineSuccess({ response, showModal, setShowModal, resetNode }) {
  const theme = useTheme();

  const StatItem = ({ label, value, badgeColor }) => (
    <Box
      w="100%"
      py={4}
      px={0}
    >
      <HStack justifyContent="space-between" alignItems="center" spacing={4}>
        <Text
          fontSize="sm"
          fontWeight="500"
          color="gray.600"
          letterSpacing="0.01em"
        >
          {label}
        </Text>
        <Badge
          fontSize="md"
          fontWeight="600"
          px={3}
          py={1}
          borderRadius="full"
          colorScheme={badgeColor}
          variant="subtle"
        >
          {value}
        </Badge>
      </HStack>
    </Box>
  );

  return (
    <Modal
      isOpen={showModal}
      isCentered
      onClose={() => setShowModal(false)}
      size="md"
      motionPreset="scale"
    >
      <ModalOverlay 
        backdropFilter="blur(8px)" 
        bg="blackAlpha.600" 
      />
      <ModalContent
        borderRadius="xl"
        boxShadow="0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        overflow="hidden"
        maxW="480px"
      >
        <ModalHeader
          fontWeight="600"
          fontSize="xl"
          color="gray.800"
          pb={3}
          pt={6}
          px={6}
          bg="white"
          borderBottom="1px solid"
          borderColor="gray.100"
        >
          Pipeline Analysis Results
        </ModalHeader>

        <ModalBody px={6} py={6} bg="gray.50">
          <VStack spacing={0} align="stretch">
            <Box
              bg="white"
              borderRadius="lg"
              border="1px solid"
              borderColor="gray.200"
              overflow="hidden"
            >
              <Box px={6} py={4}>
                <StatItem
                  label="Total Nodes"
                  value={response?.nodes ?? 0}
                  badgeColor="blue"
                />
                <Divider my={2} borderColor="gray.100" />
                <StatItem
                  label="Total Edges"
                  value={response?.edges ?? 0}
                  badgeColor="purple"
                />
                <Divider my={2} borderColor="gray.100" />
                <HStack justifyContent="space-between" alignItems="center" py={2}>
                  <Text
                    fontSize="sm"
                    fontWeight="500"
                    color="gray.600"
                    letterSpacing="0.01em"
                  >
                    DAG Status
                  </Text>
                  <Badge
                    fontSize="sm"
                    fontWeight="600"
                    px={3}
                    py={1.5}
                    borderRadius="full"
                    colorScheme={response?.isDag ? "green" : "red"}
                    variant="solid"
                  >
                    {response?.isDag ? "Valid DAG" : "Not a DAG"}
                  </Badge>
                </HStack>
              </Box>
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter
          gap={3}
          px={6}
          py={4}
          bg="white"
          borderTop="1px solid"
          borderColor="gray.100"
        >
          <Button
            variant="ghost"
            colorScheme="gray"
            onClick={() => setShowModal(false)}
            fontWeight="500"
          >
            Close
          </Button>
          <Button
            bg="gray.900"
            color="white"
            _hover={{ bg: "gray.800" }}
            onClick={() => {
              setShowModal(false);
              resetNode();
            }}
            fontWeight="500"
          >
            Reset Pipeline
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default PipelineSuccess;
