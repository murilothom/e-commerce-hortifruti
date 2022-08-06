import React from "react";

import styles from "./CardList.module.css";

import { FaSearch, FaTrashAlt } from "react-icons/fa";

import { ItemsContext } from "../context/ItemsContext";

const CartCardList = () => {
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [removeItems, setRemoveItems] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState("");
  const { ids, setIds, data, count, setCount } = React.useContext(ItemsContext);

  function handleOperation(e) {
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

  function handleRemove(e) {
    let id;
    if (e.target.parentElement.localName === "svg") {
      id = e.target.parentElement.parentElement.getAttribute("id");
    } else if (e.target.localName === "svg") {
      id = e.target.parentElement.getAttribute("id");
    }
    let counter = count[id];
    for (let i = 0; i < counter; i++) {
      ids.splice(ids.indexOf(id), 1);
    }
    count[id] = 0;
    counter = 0;
    setRemoveItems(true);
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
              <FaTrashAlt
                className={styles.trash}
                size={28}
                color="#fff"
                onClick={handleRemove}
              />
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
                <button
                  onClick={handleOperation}
                  className={styles.buttonItems}
                >
                  +
                </button>
                <p className={styles.count}>{count[item.id]}</p>
                <button
                  onClick={handleOperation}
                  className={styles.buttonItems}
                >
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
