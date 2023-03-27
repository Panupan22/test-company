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
  Chip,
  Rating,
} from "@mui/material";
// import ImageSlider from "../components/ImageSlider";
// import { useToasts } from "react-toast-notifications";

const Shop = () => {
  // const { addToast } = useToasts();
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [productSelected, setProductSelected] = useState(null);
  const cart = JSON.parse(localStorage.getItem("cart")) ?? [];

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70vw",
    maxWidth: "900px",
    bgcolor: "background.paper",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const onAddCart = (item) => {
    const newCart = [...cart];

    const isExisting = newCart.find((el) => el.id === item.id);

    if (!isExisting) {
      const itemAdd = {
        ...item,
        qty: 1,
      };

      newCart.push(itemAdd);
    } else {
      newCart.map((el) => {
        return el.id === item.id ? { ...el, qty: el.qty++ } : el;
      });
    }

    localStorage.setItem("cart", JSON.stringify(newCart));

    // addToast(<p>Already added to cart</p>, {
    //   appearance: "success",
    //   autoDismiss: true,
    // });
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
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {/* <ImageSlider images={productSelected?.images} /> */}
          </Grid>
          <Grid item xs={6}>
            <h1>{productSelected?.title}</h1>
            <Chip
              label={productSelected?.category}
              variant="outlined"
              color="primary"
            />
            <Typography variant="body1" gutterBottom>
              {productSelected?.description}
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              marginY={2}
            >
              <Rating
                name="rating"
                defaultValue={productSelected?.rating}
                precision={0.5}
                readOnly
              />

              <Typography variant="h6" color="primary">
                $ {productSelected?.price}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );

  return (
    <Box padding={1}>
      <Grid container spacing={2} margin="auto">
        {products.map((item) => {
          return (
            <Grid item>
              <Card sx={{ maxWidth: 200 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.thumbnail}
                  alt={item.title}
                  onClick={() => onHandleClickProduct(item)}
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

                  <Typography
                    variant="body1"
                    color="primary"
                    className="description"
                  >
                    $ {item.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick={() => onAddCart(item)}
                  >
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
