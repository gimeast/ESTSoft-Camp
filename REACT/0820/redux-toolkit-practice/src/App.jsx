import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { expenditure, revenue } from "./store/store.js";

function App() {
    const [inputRevenue, setInputRevenue] = useState(0);
    const [itemName, setItemName] = useState("");
    const [price, setPrice] = useState(0);

    const accountBook = useSelector((state) => state.account);
    const dispatch = useDispatch();

    function handleAdd() {
        dispatch(expenditure({ itemName, price }));
        dispatch(revenue(inputRevenue));
    }

    const totalExpenditure = () => {
        console.log("accountBook:", accountBook);
        return accountBook.items.reduce(
            (acc, cur) => acc + Number(cur.price),
            0
        );
    };
    return (
        <>
            <div>
                나의 수익:
                <input
                    type="number"
                    value={inputRevenue}
                    onChange={(e) => setInputRevenue(e.target.value)}
                />
            </div>
            <div>
                물건 이름:
                <input
                    type="text"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="number"
                    placeholder="가격"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button onClick={handleAdd}>지출 추가하기</button>
            </div>
            <ul>
                {accountBook.items.map((data, index) => (
                    <li key={index}>
                        이름: {data.itemName} / 가격: {data.price}
                    </li>
                ))}
            </ul>
            <div>
                <div>
                    총 지출: <span>{totalExpenditure()}</span>
                </div>
                <div>
                    통장 잔고:
                    <span>{accountBook.revenue - totalExpenditure()}</span>
                </div>
            </div>
        </>
    );
}

export default App;
