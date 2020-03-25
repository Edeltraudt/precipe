import React from "react";

const UserContext = React.createContext({
  id: 1,
  name: "Laureena",
  mail: "laureena@outlook.com",
  groups: [1, 2],
  groupColors: ["#385EFF", "#9C48B5"]
});

export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;
export default UserContext;
