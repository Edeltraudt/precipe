import { useContext } from "react";

import groupColors from "./../assets/data/colors.json";
import UserContext from "./../contexts/user-context";

export const useGroupColor = (groupId) => {
  const { user } = useContext(UserContext);
  const index = user.groups.findIndex((group) => group.id === groupId);
  const color = groupColors[index];

  return color
    ? {
        "--color": color.background,
        "--color-inv": color.foreground,
      }
    : null;
};
