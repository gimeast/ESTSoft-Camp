export function Main() {
    const date = new Date();
    const list = [
        { no: 1, area: "대전", visited: false },
        { no: 2, area: "부산", visited: true },
        { no: 3, area: "목포", visited: false },
        { no: 4, area: "제주도", visited: false },
    ];
    return (
        <>
            <p className="year">년:{date.getFullYear()}</p>
            <p className="date">
                월/일:{String(date.getMonth() + 1).padStart(2, "0")}/
                {String(date.getDate()).padStart(2, "0")}
            </p>
            <p className="time">
                시간:{date.getHours()}시 {date.getMinutes()}분{" "}
                {date.getSeconds()}초
            </p>

            <ul>
                {list.map((v) => (
                    <li className={v.visited && "visited"} key={v.no}>
                        {v.area}
                    </li>
                ))}
            </ul>
        </>
    );
}
