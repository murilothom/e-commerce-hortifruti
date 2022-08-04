import React from "react";

import styles from "./CardList.module.css";

import { ItemsContext } from "../context/ItemsContext";

const CartCardList = () => {
  const [data, setData] = React.useState([]);

  const { countItems, setCountItems, dataItems, setDataItems, ids, setIds } =
    React.useContext(ItemsContext);

  React.useEffect(() => {
    ids.forEach((id) => {
      fetch("https://postmanmaster.herokuapp.com/fruit/" + id)
        .then((res) => res.json())
        .then((json) => {
          if (!data.includes(json.id)) {
            return setData([...data, json]);
          } else {
            return setData([...data]);
          }
        });
    });
  }, [ids]);

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
          <button className={styles.button}>Adicionar</button>
        </li>
      ))}
    </ul>
  );
};

export default CartCardList;