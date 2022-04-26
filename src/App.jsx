
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './Components/AddUser';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import User from './Components/User';
import UserList from './Components/UserList';


function App() {
 
  

return <div className='App'>
  <h1>UserApp</h1>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/adduser' element={<AddUser/>}/>
    <Route path='/userlist' element={<UserList/>}/>
    <Route path='userlist/:id' element={<User/>}/>
    </Routes>
    </div>
}


export default App;
