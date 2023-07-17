import Loading from "../../atoms/Loading";
import Error from "../../atoms/Error";

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

    return null;

    // standard output when data present
}
