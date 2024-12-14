import { useState, useEffect } from "react";

// Custom hook for managing assignment state
export default function useAssignmentState(initialData) {
  const [assignedUserId, setAssignedUserId] = useState(null);


  useEffect(() => {
    if (initialData) {
      setAssignedUserId(initialData);
    }
  }, [initialData]);

  // Function to set the assigned user ID
  const setAssignedUser = (userId) => {
    setAssignedUserId(userId);
  };

  return {
    assignedUserId,
    setAssignedUser,
    setAssignedUserId
  };
}
