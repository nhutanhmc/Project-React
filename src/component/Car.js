import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

function Car() {
  const [state, setState] = useState(null);

  useEffect(() => {
    const getCarInfo = async () => {
      try {
        const response = await axios.get("https://65424fa4f0b8287df1ffe5b9.mockapi.io/test2");
        setState(response.data);
      } catch (error) {
        console.error("Error fetching car data: ", error);
      }
    };
    getCarInfo();
    // eslint-disable-next-line
  }, []);

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
                height="140"
                image={car.img}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {car.name}
                </Typography>
              </CardContent>
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
    </div>
  );
}

export default Car;
