import React from "react";

import styles from "./CardList.module.css";

import { ItemsContext } from "../context/ItemsContext";

import { FaSearch } from "react-icons/fa";

const CardList = () => {
  const { ids, setIds, data, count, setCount } = React.useContext(ItemsContext);
  const [searchInput, setSearchInput] = React.useState("");

  function handleClick(e) {
    const id = e.target.parentElement.getAttribute("id");
    setIds([...ids, id]);

    let counter = 1;
    ids.forEach((currId) => {
      if (currId === id) {
        counter += 1;
      }
    });
    setCount({ ...count, [id]: counter });
  }

  if (!data) return null;
  return (
    <section>
      <div className={styles.input}>
        <FaSearch className={styles.icon} />
        <input
          className={styles.search}
          placeholder="Pesquise por itens..."
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <ul className={styles.cards}>
        {data
          .filter((item) => {
            if (searchInput === "") {
              return item;
            } else if (
              item.name.toLowerCase().includes(searchInput.toLocaleLowerCase())
            ) {
              return item;
            }
          })
          .map((item) => (
            <li className={styles.card} id={item.id} key={item.id}>
              <h2>{item.name}</h2>
              <h3>
                Espécie: <span>{item.genus}</span>
              </h3>
              <h3>
                Família: <span>{item.family}</span>
              </h3>
              <h3>
                Ordem: <span>{item.order}</span>
              </h3>
              <div>
                <h4>Nutrições:</h4>
                <div className={styles.nutritionsInfo}>
                  <p>
                    Carboidratos: <span>{item.nutritions.carbohydrates}</span>
                  </p>
                  <p>
                    Proteína: <span>{item.nutritions.protein}</span>
                  </p>
                  <p>
                    Gordura: <span>{item.nutritions.fat}</span>
                  </p>
                  <p>
                    Calorias: <span>{item.nutritions.calories}</span>
                  </p>
                  <p>
                    Açucar: <span>{item.nutritions.sugar}</span>
                  </p>
                </div>
              </div>
              <button className={styles.button} onClick={handleClick}>
                Adicionar
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default CardList;
