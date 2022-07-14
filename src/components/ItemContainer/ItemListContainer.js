
import React, { useEffect } from "react";
import {products} from "../mock/products";
import { ItemList } from "./ItemList";

const ItemListContainer = (prop) => {

    const [items, setItems] = React.useState([]);

    useEffect(() => {
        const traerProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        traerProductos
        .then((data) => {
            setItems(data);
        })
        .catch((err) => {
            console.log(err);
        });

    }, []);



    return (
        <div className="px-4 pt-5 my-5 text-center border-bottom">
            <h1 className="display-4 fw-bold titleGreeting">{prop.greeting}</h1>
            <div className="container">
                <div className="row">
                    <ItemList items={items} />
                </div>
            </div>
        </div>
    );
};

export default ItemListContainer;