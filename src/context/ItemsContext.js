import React from "react";

export const ItemsContext = React.createContext();

export const ItemsStorage = ({ children }) => {
  const [data, setData] = React.useState([]);
  const [ids, setIds] = React.useState([]);
  const [count, setCount] = React.useState({});

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `https://api.allorigins.win/raw?url=https://www.fruityvice.com/api/fruit/all`
      );
      const json = await res.json();
      setData(json);
    };
    getData();
  }, []);

  return (
    <ItemsContext.Provider
      value={{
        ids,
        setIds,
        data,
        setData,
        count,
        setCount,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
