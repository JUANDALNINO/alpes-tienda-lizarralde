import React from 'react'
import '../ItemContainer/item.css';

const item = ({item}) => {
    return (
            <div className="card col-10 mx-3 my-3">
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">${item.price}</p>
                    <a href="#" className="btn btn-primary">Comprar</a>
                </div>
            </div>
    )
}

export default item;