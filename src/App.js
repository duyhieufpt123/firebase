
import './App.css';
import Protected from './components/Protected';
import { Routes,Route } from 'react-router-dom';
import Login from './components/Login';
import Read from './components/read';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Create from './components/create';
import Update from './components/update';
import Home from './components/home';
function App() {
  return (

    <div>
      <ResponsiveAppBar />
      <Routes>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
        <Routes>
      <Route path='/' element={<Home />}></Route>
      </Routes>
        <Routes>
      <Route path='/dashboard' element={<Protected><Read /></Protected>}></Route>
      </Routes>
      <Routes>
      <Route path='/create' element={<Protected><Create /></Protected>}></Route>
      </Routes>
      <Routes>
      <Route path='/update/:id' element={<Protected><Update /></Protected>}></Route>
      </Routes>
      <Routes>
      <Route path='/detail/:id' element={<Protected><Detail /></Protected>}></Route>
      </Routes>
    </div>
  );
}

export default App;
