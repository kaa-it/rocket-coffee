import {render, screen, fireEvent} from "@testing-library/react";
import { OnSale, SoldOut, Standard } from "./ProductListItem.stories";

it('shows on sale label when isOnSale', () => {
    render(<OnSale
        name="Mocha"
        price={3.50}
        imageUrl="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=100"
        isOnSale
    />);

    expect(screen.getByText(/(On Sale)/))
        .toBeInTheDocument();
});

it('disables the button when disabled', () => {
    render(<SoldOut
        name="Mocha"
        price={3.50}
        imageUrl="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=100"
        isSoldOut
    />);

    expect(screen.getByText(/Sold out/))
        .toHaveAttribute('disabled');
});

it('calls callback when button Add to Cart pressed', () => {
    const onAddToCart = jest.fn();
    render(<Standard
        name="Mocha"
        price={3.50}
        onAddToCart={onAddToCart}
    />);

    fireEvent.click(screen.getByText(/Add to Cart/));

    expect(onAddToCart).toHaveBeenCalled();
});