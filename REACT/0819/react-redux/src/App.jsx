import { createContext, useContext, useState } from "react";

const UserContext = createContext();

const initUserData = {
    name: "전유진",
    email: "zeezee@email.com",
    cart: {
        items: [],
        totalPrice: 0,
    },
};

const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(initUserData);

    const updateCartTotal = (newTotal) => {
        setUserData((prevState) => {
            return {
                ...prevState,
                cart: {
                    ...prevState.cart,
                    totalPrice: newTotal,
                },
            };
        });
    };

    return (
        <UserContext value={{ userData, updateCartTotal }}>
            {children}
        </UserContext>
    );
};

const CartTotal = () => {
    const { userData } = useContext(UserContext);
    console.log("CartTotal rendering");

    return <div>총액: {userData.cart.totalPrice}</div>;
};

const UserName = () => {
    console.log("UserName rendering");
    const { userData } = useContext(UserContext);
    return <div>사용자: {userData.name}</div>;
};

const UpdateCart = () => {
    console.log("UpdateCart rendering");
    const { updateCartTotal } = useContext(UserContext);

    return (
        <div>
            <button
                onClick={() =>
                    updateCartTotal(Math.round(Math.random() * 1000) + 1)
                }
            >
                장바구니 업데이트
            </button>
        </div>
    );
};

function App() {
    return (
        <UserProvider>
            <CartTotal />
            <UserName />
            <UpdateCart />
        </UserProvider>
    );
}

export default App;
