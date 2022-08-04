import React from "react";

import styles from "./CardList.module.css";

import { ItemsContext } from "../context/ItemsContext";

const CardList = () => {
  const [data, setData] = React.useState([]);

  const { countItems, setCountItems, dataItems, setDataItems, ids, setIds } =
    React.useContext(ItemsContext);

  const getData = async () => {
    const res = await fetch("https://postmanmaster.herokuapp.com/fruit/");
    const json = await res.json();
    setData(json);
  };

  function handleClick(e) {
    setCountItems(countItems + 1);
    const id = e.target.parentElement.getAttribute("id");
    if (!ids.includes(id)) {
      return setIds([...ids, id]);
    } else {
      return setIds([...ids]);
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

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
