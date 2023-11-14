import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { useCart } from "../component/CartContext";

function CarCart() {
    const location = useLocation();
    const { cartItems, cartTotalCost } = location.state || {};
    const { clearCart } = useCart();

    useEffect(() => {
        // Thực hiện các hành động khi giỏ hàng thay đổi
        // Ví dụ: fetch dữ liệu mới từ API, cập nhật UI, vv.
      }, [cartItems]);
    
      const handleClearCart = () => {
        clearCart();
      };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Car Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Cost</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems &&
              cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>{item.cost*item.quantity}</TableCell>
                </TableRow>
              ))}
            <TableRow>
              <TableCell colSpan={2}>Total Cost</TableCell>
              <TableCell>{cartTotalCost}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={3}>
                <Button variant="outlined" onClick={handleClearCart}>
                  Clear Cart
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CarCart;
