import React from "react";

export const ItemsContext = React.createContext();

export const ItemsStorage = ({ children }) => {
  const [data, setData] = React.useState([]);
  const [ids, setIds] = React.useState([]);
  const [count, setCount] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    try {
      const getData = async () => {
        const res = await fetch(
          `https://api.allorigins.win/raw?url=https://www.fruityvice.com/api/fruit/all`
        );
        const json = await res.json();
        setData(json);
        setLoading(false);
      };
      getData();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
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
        loading,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
