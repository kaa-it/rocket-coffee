import React from "react";
import { action } from "@storybook/addon-actions";
import { text, withKnobs } from "@storybook/addon-knobs";
import ProductList, {statusTypes} from "./ProductList";

export default {
    title: "patterns/ProductList",
    decorators: [withKnobs],
};

export const loading = () => (
    <ProductList status={statusTypes.loading} />
);

export const error = () => (
    <ProductList status={statusTypes.errored} />
);