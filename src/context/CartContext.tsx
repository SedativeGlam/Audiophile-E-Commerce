"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  slug?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const [userId, setUserId] = useState<string | undefined>(undefined);

  // Generate or retrieve session ID
  useEffect(() => {
    let sid = localStorage.getItem("audiophile-session-id");
    if (!sid) {
      sid = `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("audiophile-session-id", sid);
    }
    setSessionId(sid);

    // TODO: Get userId from your auth system
    // const user = getAuthenticatedUser();
    // setUserId(user?.id);
  }, []);

  // Get cart from Convex
  const cart = useQuery(
    api.cart.getCart,
    sessionId ? { sessionId, userId } : "skip"
  );

  // Mutations
  const addToCartMutation = useMutation(api.cart.addToCart);
  const updateQuantityMutation = useMutation(api.cart.updateCartItemQuantity);
  const removeFromCartMutation = useMutation(api.cart.removeFromCart);
  const clearCartMutation = useMutation(api.cart.clearCart);

  const items = cart?.items || [];
  const isLoading = cart === undefined;

  const addItem = async (item: CartItem) => {
    if (!sessionId) return;

    try {
      await addToCartMutation({
        sessionId,
        userId,
        item: {
          productId: item.productId,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
          slug: item.slug,
        },
      });
      setIsCartOpen(true);
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    }
  };

  const removeItem = async (productId: string) => {
    if (!sessionId) return;

    try {
      await removeFromCartMutation({
        sessionId,
        userId,
        productId,
      });
    } catch (error) {
      console.error("Failed to remove item from cart:", error);
    }
  };

  const updateQuantity = async (productId: string, quantity: number) => {
    if (!sessionId) return;

    try {
      await updateQuantityMutation({
        sessionId,
        userId,
        productId,
        quantity,
      });
    } catch (error) {
      console.error("Failed to update quantity:", error);
    }
  };

  const clearCart = async () => {
    if (!sessionId) return;

    try {
      await clearCartMutation({
        sessionId,
        userId,
      });
    } catch (error) {
      console.error("Failed to clear cart:", error);
    }
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
