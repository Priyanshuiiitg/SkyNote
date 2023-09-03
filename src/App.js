import './App.css';
import Navbar  from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import { HashRouter as Router,Routes,Route } from 'react-router-dom';
import NoteState from './context/note/NoteState';
// import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';


const App=()=>{

  return (
    <NoteState>
    <Router>

     <Navbar/>
     {/* <Alert/> */}
   
     
     
     

    <div className="container">
      
      <Routes>
        <Route exact  path="/" element={<Home/>}  />
      </Routes>
      <Routes>
        <Route exact  path="/about"   element={<About/>} />
      </Routes>
      <Routes>
        <Route exact  path="/login"   element={<Login/>} />
      </Routes>
      <Routes>
        <Route exact  path="/signup"   element={<Signup/>} />
      </Routes>

     


    </div>
    </Router>
    </NoteState>

  );
}

export default App;
