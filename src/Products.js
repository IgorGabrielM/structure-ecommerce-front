import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import myaxios from './myaxios';
import { addProduct } from './action'


const Products = () => {
    const [products, setProducts] = useState(null);
    
    
    const downloadProducts = async() => {
        const response = await myaxios.get(`/products`)
        setProducts(response.data.products);
    }

    const dispatch = useDispatch();

    const addProductToCart = (product) => {
        dispatch(addProduct(product))
    }


    useEffect(() => {
        downloadProducts();
    }, [])

    return (
        <div>
            <h1>Products</h1>
        {products != null ? products.map((product, i) => (
                            <Card key={i} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product.productImage} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Button onClick={() => addProductToCart(product)} variant="primary">{product.price}</Button>
                            </Card.Body>
                        </Card>
        )) : "Nenhum produto encontrado"}


        </div>
    )
}

export default Products
