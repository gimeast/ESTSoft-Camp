import "./App.css";

function Card({ human }) {
    return (
        <div className="card">
            <img src={human.image} alt="" />
            <p>{human.name}</p>
        </div>
    );
}

function App() {
    const humanData = [
        {
            id: 1,
            name: "Alice",
            image: "https://picsum.photos/200/200?random=1",
        },
        {
            id: 2,
            name: "Bob",
            image: "https://picsum.photos/200/200?random=2",
        },
        {
            id: 3,
            name: "Charlie",
            image: "https://picsum.photos/200/200?random=3",
        },
    ];

    return (
        <div className="cards">
            {humanData.map((v) => (
                <Card key={v.id} human={v} />
            ))}
        </div>
    );
}

export default App;
