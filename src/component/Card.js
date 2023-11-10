import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Cards({ car }) {

  const {user} = UserAuth();

  return (
    <>
      <Box>
          <Link to={`/booking/${car.id}`} className="card">
            <div className="item">
              <div className="avatarImg">
                <img src={car.carImages} alt={car.carImages} />
              </div>
              <div className="advisor" style={{ justifyContent: "flex-end" }}>
                <div className="profile">
                  <Link to="#" className="name">
                    {car.carname}
                  </Link>
                  <div>
                    <span className="info">price: {car.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          
      </Box>
    </>
  );
}

export default Cards;
