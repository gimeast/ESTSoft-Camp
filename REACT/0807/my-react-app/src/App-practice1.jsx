import { useState, useEffect, createContext, useContext } from "react";

// useState가 변할 때 React의 업데이트는 하나로 묶여 처리 됩니다.

const ItemContext = createContext([
    { id: 1, name: "노트북", price: 1000 },
    { id: 2, name: "스마트폰", price: 500 },
    { id: 3, name: "태블릿", price: 300 },
]);
const CartItemsContext = createContext([]);

function Cart() {
    const cartItems = useContext(CartItemsContext);

    return (
        <>
            <h2>장바구니</h2>
            {cartItems.length !== 0 ? (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} - 수량: {item.count}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>장바구니가 비어있습니다.</p>
            )}
        </>
    );
}

function App() {
    const [cartItems, setCartItems] = useState([]);
    const items = useContext(ItemContext);

    function addCart(item) {
        const prevItem = cartItems.find((v) => v.id === item.id);

        if (!prevItem) {
            item.count = 1;
            setCartItems((prevState) => [...prevState, item]);
        } else {
            item.count = prevItem.count + 1;
            setCartItems((prevState) => [...prevState]);
        }
    }

    useEffect(() => {
        console.log(cartItems);
    }, [addCart]);

    return (
        <>
            <h1>쇼핑몰</h1>
            <p>카트에 있는 상품 개수:</p>
            <h2>상품 목록</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name} - ₩{item.price}
                        <button onClick={() => addCart(item)}>
                            카트에 추가
                        </button>
                    </li>
                ))}
            </ul>

            <CartItemsContext.Provider value={cartItems}>
                <Cart />
            </CartItemsContext.Provider>
        </>
    );
}

export default App;
