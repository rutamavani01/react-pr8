import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import AddData from './Components/AddData';
import Main from './Components/Main';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AddData/>}></Route>
            <Route path='/Main' element={<Main/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
