import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Box,
  Modal,
} from "@mui/material";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [productSelected, setProductSelected] = useState(null);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const onHandleClickProduct = (item) => {
    setProductSelected(item);
    setModalOpen(true);
  };

  const onHandleClose = () => {
    setProductSelected(null);
    setModalOpen(false);
  };

  const getData = async () => {
    const response = await axios.get("https://dummyjson.com/products");

    setProducts(response.data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(productSelected);

  const displayModal = (
    <Modal open={modalOpen} onClose={onHandleClose}>
      <Box sx={style}>
        <h1>{productSelected?.title}</h1>
      </Box>
    </Modal>
  );

  return (
    <Box padding={1}>
      <Grid container spacing={2} margin="auto">
        {products.map((item) => {
          return (
            <Grid item>
              <Card
                sx={{ maxWidth: 200 }}
                onClick={() => onHandleClickProduct(item)}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={item.thumbnail}
                  alt={item.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    className="title"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="description"
                  >
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="outlined">
                    Add To Cart
                  </Button>
                  <Button size="small" variant="contained">
                    BUY
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      {displayModal}
    </Box>
  );
};

export default Shop;
