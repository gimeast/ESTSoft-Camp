enum OrderStatus {
    PENDING,
    CONFIRMED,
    SHIPPED,
    DELIVERED,
    CANCELLED,
}

interface Order {
    id: number;
    customerName: string;
    amount: number;
    status: OrderStatus;
    createdAt: Date;
}

function getStatusText(status: OrderStatus): string {
    switch (status) {
        case OrderStatus.PENDING:
            return "PENDING";
        case OrderStatus.CONFIRMED:
            return "CONFIRMED";
        case OrderStatus.SHIPPED:
            return "SHIPPED";
        case OrderStatus.DELIVERED:
            return "DELIVERED";
        case OrderStatus.CANCELLED:
            return "CANCELLED";
        default:
            return "";
    }
}

const order: Order = {
    id: 1,
    customerName: "고객님",
    amount: 50000,
    status: OrderStatus.PENDING,
    createdAt: new Date(),
};

console.log(getStatusText(order.status));
