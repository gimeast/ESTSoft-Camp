import { useEffect, useState } from "react";
import { useScrollObserver } from "./Hooks/useScrollObserver.js";

function Image({ image }) {
    return (
        <article>
            <h2>{image.author}</h2>
            <img style={{ width: 500 }} src={image.download_url} alt="" />
        </article>
    );
}
function ImageList() {
    const [images, setImages] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const isBottom = useScrollObserver();

    const fetchImages = async (pageNum) => {
        try {
            console.log(pageNum);
            setIsLoading(true);
            const response = await fetch(
                `https://picsum.photos/v2/list?page=${pageNum}&limit=5`
            );

            if (!response.ok) throw new Error("API 통신 중 오류 발생");

            const data = await response.json();
            setImages((prevState) => [...prevState, ...data]);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (isBottom && !isLoading) {
            console.log("isBottom", isBottom);
            fetchImages(page);
            setPage((prev) => prev + 1);
        }
    }, [isBottom]);

    return (
        <div>
            {images?.map((image) => (
                <Image key={image.id} image={image} />
            ))}
        </div>
    );
}
function App() {
    return (
        <div>
            <ImageList />
        </div>
    );
}

export default App;
