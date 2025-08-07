import React, { createContext, useContext, useEffect, useState } from "react";

const products = [
    { id: 1, name: "노트북", price: 1000 },
    { id: 2, name: "스마트폰", price: 500 },
    { id: 3, name: "태블릿", price: 300 },
];

const Context = createContext();

function Cart() {
    const { cart, removeCart } = useContext(Context);
    return (
        <section>
            <h2>장바구니</h2>
            <ul>
                {cart.map((product) => {
                    return (
                        <li key={product.id}>
                            {product.name} - 수량: {product.count}
                            <button onClick={() => removeCart(product.id)}>
                                제거
                            </button>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

function ProductList() {
    const { addCart } = useContext(Context);

    return (
        <section>
            <h2>상품 목록</h2>
            <ul>
                {products.map((product) => {
                    return (
                        <li key={product.id}>
                            {product.name} - ₩{product.price}
                            <button onClick={() => addCart(product)}>
                                카트에 추가
                            </button>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

const App = () => {
    const [cart, setCart] = useState([]);

    function addCart(product) {
        const findProduct = cart.find((v) => v.id === product.id);

        if (findProduct) {
            setCart((prevCart) => {
                return prevCart.map((prevProduct) =>
                    prevProduct.id === findProduct.id
                        ? { ...prevProduct, count: prevProduct.count + 1 }
                        : prevProduct
                );
            });
        } else {
            setCart((prevCart) => [...prevCart, { ...product, count: 1 }]);
        }
    }

    useEffect(() => {
        console.log("addCart cart", cart);
    }, [cart]);

    function removeCart(id) {
        const filteredProduct = cart.filter((product) => product.id !== id);
        setCart(filteredProduct);
    }

    return (
        <div>
            <h1>쇼핑몰</h1>
            <p>카트에 있는 상품 개수: {}</p>

            <Context.Provider value={{ cart, addCart, removeCart }}>
                <ProductList />
                <Cart />
            </Context.Provider>
        </div>
    );
};

export default App;
