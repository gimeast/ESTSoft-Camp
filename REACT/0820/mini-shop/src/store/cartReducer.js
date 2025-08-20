export const SAVE = "cart/SAVE";
export const REMOVE = "cart/REMOVE";
export const REMOVE_ALL = "cart/REMOVE_ALL";

export const saveCart = (item) => {
    return { type: SAVE, item };
};
export const removeCart = (id) => {
    return { type: REMOVE, id };
};
export const removeCartAll = () => {
    return { type: REMOVE_ALL };
};

const initialState = {
    cartItems: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE:
            const newCartItems = [...state.cartItems, action.item];
            return { cartItems: newCartItems };
        case REMOVE:
            const filteredCartItems = state.cartItems.filter(
                (item) => item.id !== action.id
            );
            return { cartItems: filteredCartItems };
        case REMOVE_ALL:
            return { cartItems: [] };
        default:
            return state;
    }
};

export default cartReducer;
