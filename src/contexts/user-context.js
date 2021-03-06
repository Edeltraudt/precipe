import React from "react";

const UserContext = React.createContext();

export const UserDefault = null;
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

export default UserContext;
