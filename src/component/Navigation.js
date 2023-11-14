import React, { useState } from "react";
import { AppBar, Button, ButtonGroup, Toolbar, Typography, Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useCart } from "../component/CartContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Navigation() {
  const { user, logOut } = UserAuth();
  const { getTotalItems, cart } = useCart();
  const { items: cartItems, totalCost: cartTotalCost } = cart;
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCartClick = () => {
    navigate("/carcart", {
      state: { cartItems, cartTotalCost },
    });
  };

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#D8D8D8" }}>
        <Toolbar>
          <Button sx={{ color: "black", marginLeft: "43rem", fontSize: "20px", fontWeight: "bold", marginRight: "30px" }}>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Main
            </Link>
          </Button>
          <Button sx={{ color: "black", fontSize: "20px", fontWeight: "bold" }}>
            <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
              About
            </Link>
          </Button>
          <Button sx={{ color: "black", fontSize: "20px", fontWeight: "bold", marginLeft: "30px" }}>
            <Link to="/car" style={{ textDecoration: "none", color: "black" }}>
              Cars
            </Link>
          </Button>
          <Button sx={{ color: "black", fontSize: "20px", fontWeight: "bold", marginLeft: "30px" }}>
            <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
              Contact
            </Link>
          </Button>
          <Button sx={{ color: "black", fontSize: "20px", fontWeight: "bold", marginLeft: "30px" }}>
            <Link to="/addnewcar" style={{ textDecoration: "none", color: "black" }}>
              Add new Car
            </Link>
          </Button>
          <div className="avatar">
            {user?.displayName && (
              <Avatar
                aria-label="avatar"
                onClick={handleClick}
                sx={{ cursor: "pointer" }}
                alt={user.displayName}
                src={user.photoURL}
              />
            )}
          </div>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <Link to="/viewhistory" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem onClick={handleClose}>Contact History</MenuItem>
            </Link>
          </Menu>
          <div className="user-name">
            {user?.displayName && (
              <Typography sx={{ color: "black" }}>
                {user.displayName}
              </Typography>
            )}
          </div>
          <div className="button-log">
            <ButtonGroup>
              {user?.displayName ? (
                <Button onClick={handleSignOut}>Log Out</Button>
              ) : (
                <Button sx={{ marginLeft: "10rem" }}>
                  <Link to="/loginpage" style={{ textDecoration: "none" }}>
                    Log In
                  </Link>
                </Button>
              )}
            </ButtonGroup>
            <IconButton aria-label="cart" onClick={handleCartClick}>
              <StyledBadge badgeContent={getTotalItems()} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
