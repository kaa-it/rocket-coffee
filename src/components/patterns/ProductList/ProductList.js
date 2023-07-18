import Loading from "../../atoms/Loading";
import Error from "../../atoms/Error";
import ProductListItem from "../ProductListItem";
import "./ProductList.css";

export const statusTypes = {
    loading: "loading",
    errored: "errored",
    loaded: "loaded"
}

export default function ProductList({ status, ...otherProps }) {
    if (status === statusTypes.loading) {
        return <Loading />;
    }

    if (status === statusTypes.errored) {
        return <Error message="Failed to load data"/>;
    }

    return (
        <ul className="productList">
            {otherProps.data.map((product, index) => (
                <li key={index}>
                    <ProductListItem {...product} onAddToCart={() => console.log("clicked")} />
                </li>
            ))}
        </ul>
    )

    // standard output when data present
}
