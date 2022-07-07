import './styles.css';

const ItemListContainer = (prop) => {
    return (
        <div class="container">
            <div class="divList">
                <h1 class="titleGreeting">{prop.greeting}</h1>
            </div>
        </div>
    )
};

export default ItemListContainer;