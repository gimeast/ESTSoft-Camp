import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart, removeCartAll } from "../store/cartReducer.js";

const Cart = () => {
    const cartItems = useSelector((state) => state.cartItems);
    const dispatch = useDispatch();

    function handleRemove(id) {
        dispatch(removeCart(id));
    }

    function handleRemoveAll() {
        dispatch(removeCartAll());
    }

    return (
        <section>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <span>장바구니가 비었습니다</span>
            ) : (
                cartItems.map((item) => (
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <span>{item.price.toLocaleString()}</span>
                        <button onClick={() => handleRemove(item.id)}>
                            제거
                        </button>
                    </div>
                ))
            )}
            <br />
            합계:
            <strong>
                {cartItems
                    .reduce((acc, cur) => acc + Number(cur.price), 0)
                    .toLocaleString()}
            </strong>
            <button onClick={handleRemoveAll}>전체 비우기</button>
        </section>
    );
};

export default Cart;
