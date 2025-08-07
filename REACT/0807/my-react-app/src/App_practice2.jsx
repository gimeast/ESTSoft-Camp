// 지금은 useContext를 사용하는 것이 더 복잡성을 올립니다.
// 다만 복잡도가 증가했을 때에는 useContext를 사용하는 것이 좋습니다.

import { useContext, useState, useEffect, createContext } from "react";

const MyContext = createContext([]);

function App() {
    return (
        <div>
            <h1>My React App</h1>
            <ProductList />
            <Cart />
        </div>
    );
}

function ProductList() {
    const { products, addToCart } = useContext(MyContext);

    return (
        <div>
            <h2>Product List</h2>
        </div>
    );
}

function Cart() {
    const { cart, removeFromCart } = useContext(MyContext);

    return (
        <div>
            <h2>Shopping Cart</h2>
        </div>
    );
}

export default App;
