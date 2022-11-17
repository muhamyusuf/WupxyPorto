import './App.css';
import Navbar from './components/NavBar';
import Home from './components/Home';
import MySkill from './components/Myskill';
import About from './components/About';
import MyProject from './components/MyProject';
import MyFooter from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <MySkill/>
      <MyProject/>
      <MyFooter/>
    </div>
  );
}

export default App;
