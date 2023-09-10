import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import ContextProvider from './context/context';

function App() {
  return (
    <div className="App">
      <ContextProvider>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
     </Router>
     </ContextProvider>
    </div>
  );
}

export default App;
