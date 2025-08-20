import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveCart } from "../store/cartReducer.js";

const Shop = () => {
    const [itemList, setItemList] = useState([
        { id: 1, title: "Keyboard", price: 49000 },
        { id: 2, title: "Mouse", price: 29000 },
        { id: 3, title: "Monitor", price: 199000 },
    ]);

    const cartItems = useSelector((state) => state.cartItems);
    const dispatch = useDispatch();

    function handleSave(item) {
        dispatch(saveCart(item));
    }

    return (
        <section>
            <h2>SHOP</h2>
            {itemList.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <span>{item.price.toLocaleString()}원</span>
                    <button
                        onClick={() => handleSave(item)}
                        disabled={cartItems.some(
                            (cartItem) => cartItem.id === item.id
                        )}
                    >
                        담김
                    </button>
                </div>
            ))}
        </section>
    );
};

export default Shop;
