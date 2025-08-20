import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
    const cartItems = useSelector((state) => state.cartItems);

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart">
                            Cart <span>({cartItems.length})</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
