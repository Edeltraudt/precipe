import React, { useState } from "react";

import { Tag } from "./../../core";
import { Input, InputWithIcon } from "./../../core/forms";
import { Headline } from "./../../core/typography";

import styles from "./ingredient-blacklist.module.scss";

export const IngredientBlacklist = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      label: "Peanuts"
    }
  ]);

  return (
    <section className="card">
      <Headline level="2" type="subheadline">
        Ingredient black list
      </Headline>
      <p>
        Any more elaborate allergies and intolerances than listed above? Be sure
        to still tell your friends and enter all ingredients you cannot eat or
        just don’t like. Whatever.
      </p>

      <InputWithIcon icon="search">
        <Input
          id="blacklist-search"
          type="search"
          placeholder="Search for an ingredient"
        />
      </InputWithIcon>

      <ul className={styles.Blacklist}>
        {items.map(item => (
          <li key={item.id} className={styles.Item}>
            <Tag
              id={`blacklist-${item.id}`}
              checked
              theme="negative"
              onChange={value => setItems(items.filter(e => e.id !== item.id))}
            >
              {item.label}
            </Tag>
          </li>
        ))}
      </ul>
    </section>
  );
};
