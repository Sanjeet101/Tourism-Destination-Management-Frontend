import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {BrowserRouter} from 'react-router-dom';
import './css/style.css';
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'


function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
     <Header></Header>
     <Body></Body>
     <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
