import { Server } from "miragejs";
const productData = [
    {
        id: 1,
        name: "Mocha",
        price: 3.5,
        imageUrl: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=100",
    },
    {
        id: 2,
        name: "Latte",
        price: 3.5,
        imageUrl: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=100",
    },
    {
        id: 3,
        name: "Vanilla Latte",
        price: 3.5,
        imageUrl: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=100",
    },
];
const server = new Server({
    routes() {
        this.namespace = "/api";
        this.get("/cart", () => ({ data: [productData[1]] }));
        this.get("/products", () => ({ data: productData }));
        this.get("/profile", () => ({
            name: "Saige McDermott",
            memberSince: "June 12th, 2018",
            recentOrders: [
                { orderId: 12, name: "Latte" },
                { orderId: 27, name: "Cafe Miel" },
            ],
        }));
        this.get("/users", () => [
            { id: "1", name: "Luke" },
            { id: "2", name: "Leia" },
            { id: "3", name: "Anakin" },
        ]);
    },
});
export default server;