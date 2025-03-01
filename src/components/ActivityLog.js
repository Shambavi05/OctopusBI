import React from "react";
import { Box, Text, VStack, HStack, Icon, Divider } from "@chakra-ui/react";
import { FaSignInAlt, FaUserPlus, FaEdit, FaSignOutAlt } from "react-icons/fa"; // Importing icons

const activityData = [
  { id: 1, action: "User John logged in", time: "10:30 AM - 2hrs ago", icon: FaSignInAlt, color: "green.500" },
  { id: 2, action: "Admin added a new staff", time: "09:45 AM - 1hr ago", icon: FaUserPlus, color: "blue.500" },
  { id: 3, action: "Student Alice updated profile", time: "08:15 AM - 3hrs ago", icon: FaEdit, color: "yellow.500" },
  { id: 4, action: "User Mark logged out", time: "07:30 AM - 2hrs ago", icon: FaSignOutAlt, color: "red.500" },
];

const ActivityLog = () => {
  return (
    <Box bg="blue.200" p={4} boxShadow="md" borderRadius="lg" mt={6}>
      <Text fontSize="lg" fontWeight="normal" mb={4} color="black" fontFamily="'Comic Sans MS', cursive, sans-serif">
        Recent Activity Log
      </Text>
      <VStack align="start" spacing={3} color="black">
        {activityData.map((log) => (
          <Box key={log.id} w="100%">
            <HStack spacing={3}>
              <Icon as={log.icon} color={log.color} boxSize={5} /> {/* Icon with color */}
              <Box>
                <Text fontSize="md" color="black">
                  <strong>{log.action}</strong>
                </Text>
                <Text fontSize="sm" color="gray.700">
                  {log.time}
                </Text>
              </Box>
            </HStack>
            <Divider />
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default ActivityLog;
