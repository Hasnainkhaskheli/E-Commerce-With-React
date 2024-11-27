import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './component/Header/header';
import { Products } from './component/Products/products';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Products />
    </div>
  );
}

export default App;
