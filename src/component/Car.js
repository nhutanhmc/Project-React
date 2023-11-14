import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  Fab,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useCart } from "./CartContext";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { Link } from "react-router-dom";

const StyledCard = styled(Card)({
  "&:hover": {
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.3)",
    transform: "scale(1.03)",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
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
            <StyledCard>
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
                <Link to={`/cardetail/${car.id}`} style={{ textDecoration: "none" }}>
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
            </StyledCard>
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
    </div>
  );
}

export default Car;
