import { Box } from "@mui/material";
import { useContext } from "react";
import { globalContext } from "../context/GlobalContext";
import ProductBox from "./ProductBox";
export default function ProductList() {
  const { mockData, setMockData } = useContext(globalContext);

  return (
    <>
      <Box sx={{ height: "80vh", mt: 2 }}>
        {mockData.map((data) => {
          return (
            <>
              <ProductBox
                imageUrl={data.imageUrl}
                recipe={data.recipe}
                descp={data.descp}
                discountprc={data.discountprc}
                actualprc={data.actualprc}
                totalQuantity={data.totalQuantity}
              />
            </>
          );
        })}
      </Box>
    </>
  );
}
