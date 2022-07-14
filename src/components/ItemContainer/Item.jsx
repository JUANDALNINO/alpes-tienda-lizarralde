import React from 'react'
import '../ItemContainer/item.css';
import ItemCount from '../NavBar/ItemCount';

const item = ({item}) => {

      // Función para agregar al carrito
        const onAdd = () => {
            alert("Agregando al carrito");
        };

    return (
            <div className="card col-4 mx-3 my-3">
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">${item.price}</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                    
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                </div>
            </div>
    )
}

export default item;