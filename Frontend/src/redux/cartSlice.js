import { createSlice } from "@reduxjs/toolkit";

const getUserCartKey = () => {
    const userInfo = localStorage.getItem("userInfo");

    if (!userInfo) return null;

    try {
        const user = JSON.parse(userInfo);

        // Change _id to id if your user object uses id
        return `cartItems_${user._id || user.id}`;
    } catch {
        return null;
    }
};

const safeCartItems = () => {
    const key = getUserCartKey();

    if (!key) return [];

    const storedCart = localStorage.getItem(key);

    try {
        return storedCart ? JSON.parse(storedCart) : [];
    } catch {
        return [];
    }
};

const normalizeCartItem = (item) => {
    const productId = item.productId ?? item.id ?? item._id;

    return {
        ...item,
        id: item.id ?? productId,
        productId,
        qty: item.qty ?? item.quantity ?? 1,
        imageUrl: item.imageUrl ?? item.image ?? "",
    };
};

const initialState = {
    cartItems: safeCartItems().map(normalizeCartItem),
};

const cartSlice = createSlice({
    name: "cart",

    initialState,

    reducers: {
        addToCart: (state, action) => {
            const item = normalizeCartItem(action.payload);
            const productId = item.productId;

            const existItem = state.cartItems.find(
                (x) => (x.productId ?? x.id) === productId
            );

            if (existItem) {
                state.cartItems = state.cartItems.map((x) =>
                    (x.productId ?? x.id) === productId
                        ? { ...x, ...item, qty: item.qty }
                        : x
                );
            } else {
                state.cartItems.push(item);
            }

            const key = getUserCartKey();

            if (key) {
                localStorage.setItem(
                    key,
                    JSON.stringify(state.cartItems)
                );
            }
        },

        removeFromCart: (state, action) => {
            const itemId = action.payload;

            state.cartItems = state.cartItems.filter(
                (x) => (x.productId ?? x.id) !== itemId
            );

            const key = getUserCartKey();

            if (key) {
                localStorage.setItem(
                    key,
                    JSON.stringify(state.cartItems)
                );
            }
        },

        clearCart: (state) => {
            // Only clear Redux memory.
            // DO NOT delete user's saved cart.
            state.cartItems = [];
        },

        loadUserCart: (state) => {
            state.cartItems = safeCartItems().map(normalizeCartItem);
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    clearCart,
    loadUserCart,
} = cartSlice.actions;

export default cartSlice.reducer;