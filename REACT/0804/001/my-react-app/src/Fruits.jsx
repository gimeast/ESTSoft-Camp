import "./App.css";

const Fruit = ({ item }) => {
    return (
        <>
            <dt>{item.name}</dt>
            <dd>{item.desc}</dd>
        </>
    );
};

function App() {
    const items = [
        { id: 1, name: "Apple", desc: "빨간건 사과" },
        { id: 2, name: "Banana", desc: "바나나는 길어" },
        { id: 3, name: "Cherry", desc: "체리는 비싸" },
    ];

    return (
        <dl className="fruits">
            {items.map((item) => {
                return <Fruit key={item.id} item={item} />;
            })}
        </dl>
    );
}

export default App;
