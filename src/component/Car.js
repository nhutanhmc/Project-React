// Car.js
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useCart } from "./CartContext";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import axios from "axios";

const StyledBadge = styled(Badge)({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: "2px solid #fff", // Change the background color
    padding: "0 4px",
  },
});

function Car() {
  const [state, setState] = useState(null);
  const { addToCart, getTotalItems } = useCart();

  useEffect(() => {
    const getCarInfo = async () => {
      try {
        const response = await axios.get(
          "https://65424fa4f0b8287df1ffe5b9.mockapi.io/test2"
        );
        setState(response.data);
      } catch (error) {
        console.error("Error fetching car data: ", error);
      }
    };
    getCarInfo();
  }, []);

  const handleAddToCart = (itemId, itemName, itemCost) => {
    addToCart(itemId, itemName, itemCost);
  };

  const renderCars = (type) => {
    if (!state) {
      return null;
    }

    const filteredCars = state.filter((car) => car.type === type);

    return (
      <Grid container spacing={2}>
        {filteredCars.map((car) => (
          <Grid item key={car.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt={car.name}
                height="350"
                image={car.img}
              />
              <CardContent>
                <Typography variant="h3" component="div">
                  {car.name} : {car.cost}$
                </Typography>
                <Link
                  to={`/cardetail/${car.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Button variant="outlined">Detail</Button>
                </Link>
              </CardContent>
              <Fab
                style={{ float: "right" }}
                color="primary"
                aria-label="add"
                onClick={() => handleAddToCart(car.id, car.name, car.cost)}
              >
                <AddIcon />
              </Fab>
            </Card>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <h2>Lux</h2>
      {renderCars("Luxury")}
      <h2>Standard</h2>
      {renderCars("Standard")}
      <h2>Economy</h2>
      {renderCars("Economy")}
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={getTotalItems()} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </div>
  );
}

export default Car;
