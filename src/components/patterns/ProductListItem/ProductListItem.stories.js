import React from "react";
import {action} from "@storybook/addon-actions";
import {text, withKnobs} from "@storybook/addon-knobs";
import ProductListItem from "./ProductListItem";

export default {
    title: "patterns/ProductListItem",
    decorators: [withKnobs],
    component: ProductListItem,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    "The **ProductListItem** is the component that show one product in the list.",
            },
        },
    },
};

export const Standard = ({
  name = text("Name", "Standard Cofee"),
  price = text("price", "2.50"),
  onAddToCart = action("Add to cart clicked"),
  imageUrl = text(
     "imageUrl",
     "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=100"
  )
}) => (
    <ProductListItem
        name={name}
        price={price}
        onAddToCart={onAddToCart}
        imageUrl={imageUrl}
    />
);

export const SoldOut = ({
    name = text("Name", "Standard Cofee"),
    price = text("price", "2.50"),
    onAddToCart = action("Add to cart clicked"),
    imageUrl = text(
        "imageUrl",
        "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=100"
    ),
    isSoldOut=true
}) => (
    <ProductListItem
        name={name}
        price={price}
        onAddToCart={onAddToCart}
        imageUrl={imageUrl}
        isSoldOut={isSoldOut}
    />
);

export const onSale = ({
    name = text("Name", "Standard Cofee"),
    price = text("price", "2.50"),
    onAddToCart = action("Add to cart clicked"),
    imageUrl = text(
        "imageUrl",
        "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=100"
    ),
    isOnSale=true
}) => (
    <ProductListItem
        name={name}
        price={price}
        onAddToCart={onAddToCart}
        imageUrl={imageUrl}
        isOnSale={isOnSale}
    />
);
