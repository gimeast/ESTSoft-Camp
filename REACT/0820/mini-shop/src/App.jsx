import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop.jsx";
import Cart from "./pages/Cart.jsx";
import Layout from "./pages/Layout.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index path="/" element={<Shop />} />
                    <Route path="cart" element={<Cart />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
