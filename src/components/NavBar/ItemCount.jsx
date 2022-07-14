import React from 'react';

export const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = React.useState(initial);

    // Función para restar -1 al contador
    const restar = () => {
        if(count > initial) { // Solo resta hasta el tope inicial
            setCount(count - 1);
        }
    };

    // Función para sumar +1 al contador
    const sumar = () => {
            if(count < stock) { // Maxima cantidad de Stock
            setCount(count + 1);
        }
    };




    return (
        <div className= "container d-flex justify-content-center my-5">
            <div className="card">
                <div className="card-body">
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-4">
                        <button type="button" className="btn btn-primary" onClick={restar}>
                            -
                        </button>
                        <p className="inline-text">{count}</p>
                        <button type="button" className="btn btn-primary" onClick={sumar}>
                            +
                        </button>
                    </div>
                    <button type="button" className="btn btn-success" onClick={onAdd}>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
};

export default ItemCount;