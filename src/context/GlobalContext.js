import React, { useState } from "react";

export const globalContext = React.createContext();

export function GlobalContextProvider(props) {
  const [product, setTotalProduct] = useState(0);
  const [openCart, setOpenCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemList, setItemList] = useState([]);
  const [drawerMenu, setDrawerMenu] = useState("login");

  const totalPriceFunc = (prc) => {
    setTotalPrice(totalPrice + prc);
  };

  const openCartFunc = () => {
    setOpenCart(!openCart);
  };
  const totalProductFunc = (pro) => {
    setTotalProduct(pro);
  };

  const [mockData, setMockData] = useState([
    {
      imageUrl: `/baigan.jpg`,
      recipe: "Baingan Ka Bharta",
      descp:
        " an easy flavoured and smoky indian curry made with fire-roasted eggplant and spices",
      discountprc: 50,
      actualprc: 100,
      totalQuantity: 1,
    },
    {
      imageUrl: `/egg.jpg`,
      recipe: "Egg Curry",
      descp:
        "Egg curry is a comforting Indian dish of curried eggs. Made with hard boiled eggs, onions, tomatoes, whole & ground spices and herbs.",
      discountprc: 60,
      actualprc: 130,
      totalQuantity: 1,
    },
    {
      imageUrl: `/bhindi.jpg`,
      recipe: "Bhindi ki Sabji",
      descp:
        "a perfect Indian meal accompanied by some mango pickle or raita or salad",
      discountprc: 30,
      actualprc: 80,
      totalQuantity: 1,
    },
    {
      imageUrl: `/tinda.jpg`,
      recipe: "Tinda Masala",
      descp:
        "a perfect Indian meal accompanied by some mango pickle or raita or salad",
      discountprc: 46,
      actualprc: 109,
      totalQuantity: 1,
    },
    {
      imageUrl: `/pannerTikka.jpg`,
      recipe: "Panner Tikka",
      descp:
        " It is a vegetarian alternative to chicken tikka and other meat dishes",
      discountprc: 70,
      actualprc: 170,
      totalQuantity: 1,
    },
  ]);

  return (
    <globalContext.Provider
      value={{
        product,
        setTotalProduct,
        totalProductFunc,
        openCart,
        openCartFunc,
        setOpenCart,
        totalPrice,
        setTotalPrice,
        totalPriceFunc,
        mockData,
        setMockData,
        itemList,
        setItemList,
        drawerMenu,
        setDrawerMenu,
      }}
    >
      {props.children}
    </globalContext.Provider>
  );
}
