import './App.css';
import Users from './Components/Users'
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
function App() {
  const [userData, setuserData] = useState([])
  const [Loading, setLoading] = useState(false)
  const [boolmain, setboolmain] = useState(true)
  return (

    <div className="App">
      <Navbar setLoading={setLoading} setuserData={setuserData} userData={userData} setboolmain={setboolmain}/>
      {
        boolmain ? <Home /> : <Users loading={Loading} userData={userData} /> 
          
      }

    </div>


  );
}

export default App;
