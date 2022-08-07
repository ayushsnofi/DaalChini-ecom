import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box } from "@mui/system";
import { useContext, useLayoutEffect } from "react";
import { globalContext } from "../context/GlobalContext";
import { useState, useEffect } from "react";

export default function QuantityButton(props) {
  const {
    product,
    totalProductFunc,
    totalPrice,
    setTotalPrice,
    itemList,
    setItemList,
    mockData,
    setMockData,
  } = useContext(globalContext);

  const [addText, setAddText] = useState(true);
  const [quantityVal, setQuantityVal] = useState(0);
  useEffect(() => {
    setQuantityVal(0);
  }, []);

  const setAdd = () => {
    setAddText(false);
    totalProductFunc(product + 1);
    setQuantityVal(quantityVal + 1);
    setTotalPrice(totalPrice + props.discountprc);
    setItemList([...itemList, props]);
  };
  const incrementVal = () => {
    setQuantityVal(quantityVal + 1);

    setTotalPrice(totalPrice + props.discountprc);
    let newList = [];

    itemList.map((item) => {
      if (item.recipe === props.recipe) {
        item = { ...item, totalQuantity: item.totalQuantity + 1 };
        newList.push(item);
      } else {
        newList.push(item);
      }
    });

    setItemList(newList);
  };
  const decrementVal = () => {
    quantityVal > 0 && setQuantityVal(quantityVal - 1);
    if (quantityVal === 0) {
      setAddText(!addText);
      totalProductFunc(product - 1);
      const itemL = itemList.filter((item, index) => {
        if (item.recipe !== props.recipe) {
          return item;
        }
      });
      setItemList(itemL);
    }
    let newList = [];

    quantityVal > 0 &&
      itemList.map((item) => {
        if (item.recipe === props.recipe) {
          item = { ...item, totalQuantity: item.totalQuantity - 1 };
          newList.push(item);
        } else {
          newList.push(item);
        }
      });

    setItemList(newList);
    quantityVal !== 0 && setTotalPrice(totalPrice - props.discountprc);
  };

  return (
    <Box
      sx={{
        pr: 2,
        pb: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "6rem",
      }}
    >
      {/* <Button size="small" onClick={decrementVal}> */}
      {!addText ? (
        <>
          <RemoveIcon
            fontSize=""
            onClick={decrementVal}
            sx={{ color: "green" }}
          />
          <input
            style={{
              margin: "0 .5rem 0",
              width: "3rem",
              height: "1.5rem",
              border: "0.5px solid grey",
              borderRadius: "5px",
              textAlign: "center",
            }}
            type="text"
            value={quantityVal}
          />
          <AddIcon fontSize="" onClick={incrementVal} sx={{ color: "green" }} />
        </>
      ) : (
        <Button
          variant="contained"
          sx={{ backgroundColor: "darkgreen" }}
          onClick={setAdd}
        >
          Add
        </Button>
      )}
    </Box>
  );
}
