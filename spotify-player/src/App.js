import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Container} from 'react-bootstrap'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import YourLibrary from './Pages/YourLibrary';
import Home from './Pages/Home';
import NotFoundPage from './Pages/NotFoundPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Container>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path='/yourlibrary' element={<YourLibrary />} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </Container>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
