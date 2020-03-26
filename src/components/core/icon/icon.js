import React from "react";
import PropTypes from "prop-types";

import styles from "./icon.module.scss";

import { ReactComponent as Checkmark } from "./icons/checkmark.svg";
import { ReactComponent as AngleDown } from "./icons/angle-down.svg";
import { ReactComponent as ArrowLeft } from "./icons/arrow-left.svg";
import { ReactComponent as Beef } from "./icons/beef.svg";
import { ReactComponent as Edit } from "./icons/edit.svg";
import { ReactComponent as Egg } from "./icons/egg.svg";
import { ReactComponent as Heart } from "./icons/heart.svg";
import { ReactComponent as Image } from "./icons/image.svg";
import { ReactComponent as Lactose } from "./icons/lactose.svg";
import { ReactComponent as Minus } from "./icons/minus.svg";
import { ReactComponent as Plus } from "./icons/plus.svg";
import { ReactComponent as Pork } from "./icons/pork.svg";
import { ReactComponent as Poultry } from "./icons/poultry.svg";
import { ReactComponent as Seafood } from "./icons/seafood.svg";
import { ReactComponent as Search } from "./icons/search.svg";
import { ReactComponent as Servings } from "./icons/servings.svg";
import { ReactComponent as Sugar } from "./icons/sugar.svg";
import { ReactComponent as Time } from "./icons/time.svg";
import { ReactComponent as Wheat } from "./icons/wheat.svg";

const Icon = ({ size, name, className }) => {
  const getSVG = () => {
    switch (name) {
      case "arrow-left":
        return <ArrowLeft />;
      case "angle-down":
        return <AngleDown />;

      case "edit":
        return <Edit />;
      case "beef":
        return <Beef />;
      case "egg":
        return <Egg />;
      case "heart":
        return <Heart />;
      case "image":
        return <Image />;
      case "lactose":
        return <Lactose />;
      case "minus":
        return <Minus />;
      case "plus":
        return <Plus />;
      case "pork":
        return <Pork />;
      case "poultry":
        return <Poultry />;
      case "seafood":
        return <Seafood />;
      case "search":
        return <Search />;
      case "servings":
        return <Servings />;
      case "sugar":
        return <Sugar />;
      case "time":
        return <Time />;
      case "wheat":
        return <Wheat />;

      case "checkmark":
        return <Checkmark />;
      default:
        throw new Error(`Undefined icon type ${name}.`);
    }
  };

  return (
    <span
      className={[styles.Icon, className].join(" ")}
      style={{ fontSize: size }}
    >
      {getSVG()}
    </span>
  );
};

Icon.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Icon;
