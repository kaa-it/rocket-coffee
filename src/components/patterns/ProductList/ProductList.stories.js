import React from "react";
import { action } from "@storybook/addon-actions";
import { text, withKnobs } from "@storybook/addon-knobs";
import ProductList, {statusTypes} from "./ProductList";

export default {
    title: "patterns/ProductList",
    decorators: [withKnobs],
};

const data = [
    {
        id: 1,
        name: "Mocha",
        price: 3.5,
        imageUrl: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=100"
    },
];

export const loading = () => (
    <ProductList status={statusTypes.loading} />
);

export const error = () => (
    <ProductList status={statusTypes.errored} />
);