export interface Product {
    id: number;
    productName: string;
    price: number;
    stockCount: number;
    thumbnailImg: string;
    option: any[];
    discountRate: number;
    shippingFee: number;
    detailInfoImage: string[];
    viewCount: number;
    pubDate: string;
    modDate: string;
}
