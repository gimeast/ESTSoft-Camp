import { useEffect, useState } from "react";
import type { Product } from "../types";
import { fetchAllProducts } from "../services/api.ts";

export default function ProductCard2() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchAllProducts().then(setProducts);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
                    Tailwind CSS 컴포넌트 예제
                </h1>

                {/* 카드 컴포넌트 */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        카드 컴포넌트
                    </h2>
                    <p className="text-gray-600 mb-4">
                        이것은 Tailwind CSS로 만든 카드 컴포넌트입니다.
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded transition-colors">
                        클릭하세요
                    </button>
                </div>

                {/* 그리드 레이아웃 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-indigo-100 p-4 rounded-lg"
                        >
                            <div className="flex text-indigo-600">
                                <img
                                    src={product.thumbnailImg}
                                    alt={product.productName}
                                />
                            </div>
                            <h3 className="font-semibold text-indigo-800">
                                {product.productName}
                            </h3>
                            <p className="text-indigo-600">
                                {product.price.toLocaleString()}원
                            </p>
                        </div>
                    ))}
                </div>

                {/* 폼 예제 */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-semibold mb-4">폼 예제</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                이름
                            </label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="이름을 입력하세요"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                이메일
                            </label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="email@example.com"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-2 px-4 rounded-md hover:from-blue-600 hover:to-purple-700 transition-colors"
                        >
                            제출
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
