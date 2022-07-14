import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemContainer/ItemListContainer';
import ItemCount from './components/NavBar/ItemCount';

function App() {

  // Función para agregar al carrito
  const onAdd = () => {
    alert("Agregando al carrito");
  };

  return (
    <>
      <div className="App">
        <NavBar />
        <ItemListContainer greeting="Bienvenido" />
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      </div>
    </>


  );
}

export default App;