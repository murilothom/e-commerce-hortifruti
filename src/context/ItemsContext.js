import React from "react";

export const ItemsContext = React.createContext();

export const ItemsStorage = ({ children }) => {
  const [dataItems, setDataItems] = React.useState(null);
  const [countDataItems, setCountDataItems] = React.useState(null);
  const [data, setData] = React.useState([]);
  const [ids, setIds] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://postmanmaster.herokuapp.com/fruit/");
      const json = await res.json();
      setData(json);
    };
    getData();
  }, []);

  return (
    <ItemsContext.Provider
      value={{
        dataItems,
        setDataItems,
        countDataItems,
        setCountDataItems,
        ids,
        setIds,
        data,
        setData,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
