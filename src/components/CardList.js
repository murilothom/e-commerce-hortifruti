import React from "react";

import styles from "./CardList.module.css";

import { ItemsContext } from "../context/ItemsContext";

const CardList = () => {
  const { dataItems, setDataItems, ids, setIds, data, setData } =
    React.useContext(ItemsContext);

  function handleClick(e) {
    const id = e.target.parentElement.getAttribute("id");
    setIds([...ids, id]);
    console.log(ids);
  }

  if (!data) return null;
  return (
    <ul className={styles.cards}>
      {data.map((item) => (
        <li className={styles.card} id={item.id} key={item.id}>
          <h2>
            Name: <span>{item.name}</span>
          </h2>
          <h3>
            Family: <span>Rosaceae</span>
          </h3>
          <div>
            <h4>Nutritions:</h4>
            <div className={styles.nutritionsInfo}>
              <p>
                Carbohydrates: <span>11.4</span>
              </p>
              <p>
                Protein: <span>0.3</span>
              </p>
              <p>
                Fat: <span>0.4</span>
              </p>
              <p>
                Calories: <span>52</span>
              </p>
              <p>
                Sugar: <span>10.3</span>
              </p>
            </div>
          </div>
          <button className={styles.button} onClick={handleClick}>
            Adicionar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default CardList;
