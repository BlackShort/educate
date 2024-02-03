import './App.css';
import { Navbar, Footer } from './components';
import { Home, Profile, Notes } from './app/index.js';
import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About.jsx';
import { Login } from './pages/Login.jsx';
import { Signup } from './pages/Signup.jsx';
import { Contact } from './pages/Contact.jsx';


const App = () => {
  return (
    <div className='w-full h-screen overflow-y-scroll overflow-x-hidden'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
