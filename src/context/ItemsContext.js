import React from "react";

export const ItemsContext = React.createContext();

export const ItemsStorage = ({ children }) => {
  const [countItems, setCountItems] = React.useState(null);
  const [dataItems, setDataItems] = React.useState(null);
  const [countDataItems, setCountDataItems] = React.useState(null);
  const [ids, setIds] = React.useState([]);

  return (
    <ItemsContext.Provider
      value={{
        countItems,
        setCountItems,
        dataItems,
        setDataItems,
        countDataItems,
        setCountDataItems,
        ids,
        setIds,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};
