
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Men from './Components/Men/Men';
import Women from './Components/Women/Women';
import Accessories from './Components/Accessories/Accessories';
import Home from './Components/Home/Home';


function App() {
  return (
    <div>
   
    <BrowserRouter>
    <Navbar/>
  
      <Routes>
       <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/Men' element={<Men/>}></Route>
        <Route exact path='/Women' element={<Women/>}></Route>
        <Route exact path='/Accessories' element={<Accessories/>}></Route>
        
      </Routes>
   
    </BrowserRouter>
    </div>
  );
}


export default App;
