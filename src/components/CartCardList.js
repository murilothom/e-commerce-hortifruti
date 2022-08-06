import React from "react";

import styles from "./CardList.module.css";

import { FaSearch } from "react-icons/fa";

import { ItemsContext } from "../context/ItemsContext";

const CartCardList = () => {
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [removeItems, setRemoveItems] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState("");
  const { ids, setIds, data, count, setCount } = React.useContext(ItemsContext);

  function handleClick(e) {
    const id = e.target.parentElement.parentElement.getAttribute("id");
    let counter = count[id];
    if (e.target.innerText === "+") {
      counter = counter + 1;
      setIds([...ids, id]);
    } else if (e.target.innerText === "-") {
      counter = counter - 1;
      ids.splice(ids.indexOf(id), 1);
      setRemoveItems(true);
    }
    setCount({ ...count, [id]: counter });
  }

  React.useEffect(() => {
    setSelectedItems([]);
    setRemoveItems(false);
    ids.forEach((id) => {
      data.forEach((item) => {
        if (String(item.id) === id) {
          setSelectedItems((selectedItems) => {
            if (!selectedItems.includes(item)) {
              return [...selectedItems, item];
            }
            return [...selectedItems];
          });
        }
      });
    });
  }, [data, ids, removeItems]);

  if (!selectedItems) return null;
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
        {selectedItems
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
              <div className={styles.addrem}>
                <button onClick={handleClick} className={styles.buttonItems}>
                  +
                </button>
                <p className={styles.count}>{count[item.id]}</p>
                <button onClick={handleClick} className={styles.buttonItems}>
                  -
                </button>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default CartCardList;
