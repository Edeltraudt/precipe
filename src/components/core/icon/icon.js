import React from "react";
import PropTypes from "prop-types";

import styles from "./icon.module.scss";

import { ReactComponent as AngleDown } from "./icons/angle-down.svg";
import { ReactComponent as ArrowLeft } from "./icons/arrow-left.svg";
import { ReactComponent as Checkmark } from "./icons/checkmark.svg";
import { ReactComponent as Close } from "./icons/close.svg";
import { ReactComponent as Edit } from "./icons/edit.svg";
import { ReactComponent as Heart } from "./icons/heart.svg";
import { ReactComponent as Image } from "./icons/image.svg";
import { ReactComponent as Minus } from "./icons/minus.svg";
import { ReactComponent as Plus } from "./icons/plus.svg";
import { ReactComponent as Search } from "./icons/search.svg";
import { ReactComponent as Servings } from "./icons/servings.svg";
import { ReactComponent as Time } from "./icons/time.svg";
import { ReactComponent as Sort } from "./icons/sort.svg";

import { ReactComponent as DietBeef } from "./icons/beef.svg";
import { ReactComponent as DietEgg } from "./icons/egg.svg";
import { ReactComponent as DietLactose } from "./icons/lactose.svg";
import { ReactComponent as DietPork } from "./icons/pork.svg";
import { ReactComponent as DietPoultry } from "./icons/poultry.svg";
import { ReactComponent as DietSeafood } from "./icons/seafood.svg";
import { ReactComponent as DietSugar } from "./icons/sugar.svg";
import { ReactComponent as DietWheat } from "./icons/wheat.svg";

const Icon = ({ size, name, className }) => {
  const getSVG = () => {
    switch (name) {
      case "arrow-left":
        return <ArrowLeft />;
      case "angle-down":
        return <AngleDown />;

      case "edit":
        return <Edit />;
      case "sort":
        return <Sort />;
      case "checkmark":
        return <Checkmark />;
      case "close":
        return <Close />;
      case "heart":
        return <Heart />;
      case "image":
        return <Image />;
      case "minus":
        return <Minus />;
      case "plus":
        return <Plus />;
      case "search":
        return <Search />;
      case "servings":
        return <Servings />;
      case "time":
        return <Time />;
      case "diet-lactose":
        return <DietLactose />;
      case "diet-beef":
        return <DietBeef />;
      case "diet-eggs":
        return <DietEgg />;
      case "diet-pork":
        return <DietPork />;
      case "diet-poultry":
        return <DietPoultry />;
      case "diet-fish":
        return <DietSeafood />;
      case "diet-sugar":
        return <DietSugar />;
      case "diet-wheat":
        return <DietWheat />;
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
