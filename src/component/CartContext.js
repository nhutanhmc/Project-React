import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], totalCost: 0 });

  const addToCart = (itemId, itemName, itemCost) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.items.findIndex((item) => item.id === itemId);

      if (existingItemIndex !== -1) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng và cập nhật tổng chi phí
        prevCart.items[existingItemIndex].quantity += 1;
        prevCart.totalCost += itemCost;
        return { ...prevCart };
      } else {
        // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm vào mảng và cập nhật tổng chi phí
        const newItem = { id: itemId, name: itemName, quantity: 1, cost: itemCost };
        return { items: [...prevCart.items, newItem], totalCost: prevCart.totalCost + itemCost };
      }
    });
  };

  const clearCart = () => {
    setCart({ items: [], totalCost: 0 });
  };

  const getTotalItems = () => {
    return cart.items.reduce((acc, item) => acc + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};
