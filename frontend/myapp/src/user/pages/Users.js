import React from 'react'
import UsersList from "../components/UsersList.js";
const Users = () => {

    const USERS = [
        {id: "1", name: "Max", image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",places: 2},

    ];

  return (
    <>
    <UsersList items={USERS}/>
    </>
  );
};

export default Users;
