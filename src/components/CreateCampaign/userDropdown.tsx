// src/components/UserDropdown.tsx

import { useEffect, useState } from "react";
import { getAllUsers,type  User } from "../../api/user"; // Adjust path

interface UserDropdownProps {
  assignTo: string;
  setAssignTo: (id: string) => void;
}

const UserDropdown = ({ assignTo, setAssignTo }: UserDropdownProps) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getAllUsers().then(setUsers).catch(console.error);
  }, []);

  return (
    <select
      value={assignTo}
      onChange={(e) => setAssignTo(e.target.value)}
      className="w-full px-4 py-3 text-sm text-gray-300 rounded-md appearance-none bg-borderbg"
    >
      <option value="">Select User</option>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.username}
        </option>
      ))}
    </select>
  );
};

export default UserDropdown;
