// 3. tailwindcss 적용
// 제가 자주 사용합니다. 개인적 호불호가 크기 때문에 회사에서 사용할 때는 팀원들과 상의하세요.
// 지금은 index.html에 tailwindcss를 CDN으로 추가했습니다.
// <script src="https://cdn.tailwindcss.com"></script>

function App() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <article className="flex flex-col border-0 w-[360px] rounded-lg p-3 bg-gray-200">
                <img
                    className="rounded-lg"
                    src="https://picsum.photos/300/150"
                    alt=""
                />
                <h3 className="text-2xl mt-2">Heading</h3>
                <p className="text-[gray]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    cumque est fugit nulla quaerat repellat repudiandae saepe
                    sunt voluptas, voluptatum?
                </p>
                <button className="bg-blue-500 rounded-lg w-[100px] h-[40px] mt-2">
                    Learn More
                </button>
            </article>
        </div>
    );
}

export default App;
