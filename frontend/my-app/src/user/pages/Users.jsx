import React from "react";
import UserList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Max Schwarz",
      image: "https://i.pravatar.cc/150?img=1",
      places: 3,
    },
  ];
  return <UserList items={USERS} />;
};

export default Users;
