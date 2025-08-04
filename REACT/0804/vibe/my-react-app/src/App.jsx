import './App.css'

function App() {
  const products = [
    {
      id: 1,
      name: '버그를 Java라 버그잡는 개리씨 키링 개발...',
      price: 12500,
      image: 'https://picsum.photos/200/200?random=1',
    },
    {
      id: 2,
      name: '우당탕탕 라이캣의 실험실 스티커 팩',
      price: 3500,
      image: 'https://picsum.photos/200/200?random=2',
    },
    {
      id: 3,
      name: '딥러닝 개발자 무릎 담요',
      price: 17500,
      image: 'https://picsum.photos/200/200?random=3',
    },
    {
      id: 4,
      name: '네 개발잡니다 개발자키링 금속키링',
      price: 13500,
      image: 'https://picsum.photos/200/200?random=4',
    },
    {
      id: 5,
      name: 'Hack Your Life 개발자 노트북 파우치',
      price: 36000,
      image: 'https://picsum.photos/200/200?random=5',
    },
    {
      id: 6,
      name: '[NEW] 위니브 개발자, 캐릭터 스티커팩 2종',
      price: 5500,
      image: 'https://picsum.photos/200/200?random=6',
    },
  ];

  return (
    <div className="App">
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price.toLocaleString()}원</p>
          </div>
        ))}
      </div>
      <div className="cart-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
      </div>
    </div>
  )
}

export default App