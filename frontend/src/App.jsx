import './App.css';
import { Navbar ,Footer  } from './components';
import {Home , Profile ,Notes } from './app/index.js';
import { Routes , Route } from 'react-router-dom';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/notes' element={<Notes/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
