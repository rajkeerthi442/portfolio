
import './App.css';
import Header from "./components/Header/Header"
import Prjcontainer from './components/Prjcontainer/Prjcontainer';

import Skillcontainer from './components/Skillcontainer/Skillcontainer';
import Topcontainer from './components/topcontainer/Topcontainer';
import "./App.css"
import Contact from './components/contact/Contact';

const App=() =>{
  return (
    <div>
      <Header/>
      <Topcontainer/>
      <Skillcontainer/>
      <Prjcontainer/>
      <Contact/>
  
    </div>
  );
}

export default App;
