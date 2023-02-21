import { Box, Container, Grid, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) ?? [];
  const [cartList, setCartList] = useState(cart);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);

  const onQtyChange = (item, type) => {
    const newCart = [...cart];

    newCart.map((el) => {
      return el.id === item.id
        ? { ...el, qty: type === "1" ? el.qty++ : el.qty-- }
        : el;
    });

    setCartList(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <Container sx={{ paddingY: "10px" }}>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <Box display="flex">
                    <div style={{ width: "80px" }}>
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        height="30px"
                      />
                    </div>
                    {item.title}
                  </Box>
                </td>
                <td>{formatter.format(item.price)}</td>
                <td>
                  <IconButton onClick={() => onQtyChange(item, "2")}>
                    <RemoveIcon />
                  </IconButton>
                  {item.qty}
                  <IconButton onClick={() => onQtyChange(item, "1")}>
                    <AddIcon />
                  </IconButton>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Box display="flex" justifyContent="end">
        <Box width={300}>
          <Grid container>
            <Grid item xs={8}>
              Total :
            </Grid>
            <Grid item xs={4}>
              {formatter.format(totalPrice)}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Cart;
