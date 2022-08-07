import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useContext } from "react";
import { globalContext } from "../context/GlobalContext";

export default function ButtonBox(row) {
  const {
    setItemList,
    itemList,
    totalPrice,
    setTotalPrice,
    mockData,
    setMockData,
  } = useContext(globalContext);

  const incrementVal = () => {
    let newList = [];

    itemList.map((item) => {
      if (item.recipe === row.recipe) {
        item = { ...item, totalQuantity: item.totalQuantity + 1 };
        newList.push(item);

        setTotalPrice(totalPrice + item.discountprc);
      } else {
        newList.push(item);
      }
    });

    setItemList(newList);
  };

  const decrementVal = () => {
    let newList = [];

    if (row.totalQuantity > 0) {
      itemList.map((item) => {
        if (item.recipe === row.recipe) {
          item = { ...item, totalQuantity: item.totalQuantity - 1 };
          newList.push(item);

          setTotalPrice(totalPrice - item.discountprc);
        } else {
          newList.push(item);
        }
      });

      setItemList(newList);
    } else {
      itemList.splice(itemList.indexOf(row), 1);
    }
  };

  return (
    <Box>
      <RemoveIcon fontSize="" onClick={decrementVal} sx={{ color: "green" }} />
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
        value={row.totalQuantity}
      />
      <AddIcon fontSize="" onClick={incrementVal} sx={{ color: "green" }} />
    </Box>
  );
}
