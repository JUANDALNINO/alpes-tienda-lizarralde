import "./styles.css";

const ItemListContainer = (prop) => {
    return (
        <div class="px-4 pt-5 my-5 text-center border-bottom">
            <h1 class="display-4 fw-bold titleGreeting">{prop.greeting}</h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">
                    Contador de productos:
                </p>
            </div>
        </div>
    );
};

export default ItemListContainer;