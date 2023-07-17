import React, { useEffect, useState } from 'react';
import ProductList, { statusTypes } from '../../components/patterns/ProductList';

export default function Products() {
    const [ productState, setProductState ] = useState({
        data: [],
        status: statusTypes.loading
    });
    return <ProductList
        data={productState.data}
        status={productState.status}
    />
}
