import React from 'react';
import Products from './Products';
import { Server } from 'miragejs';

let server = new Server();

server.get('/api/products', { data:
    [
        {
          id: 1,
          name: "Mocha",
          price: 3.5,
          imageUrl: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=100"
        },
    ]
});

export default { title: 'screens/products' }
export const Standard = () => {
    return <Products />
}