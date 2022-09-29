import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header'
import MovieList from './components/header/movieList';
import Home from './pages/Home';
import Login from './pages/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Logout from './pages/Logout';


function App() {

  const user =  useSelector(selectUser);
  return (
    <>
    
    <div className="App">
     <Router>
      <Header/>
      <Routes>
      <Route index element={<Home/>}></Route>
               
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/Login" element={<Login />} ></Route> 
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
     </Router>
     <div>
      {user ? <Logout/> : <Login/>}
    </div>
    </div>
    </>
  );
}

export default App;
