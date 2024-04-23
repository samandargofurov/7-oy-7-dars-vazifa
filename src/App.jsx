import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<Home></Home>}></Route>
      <Route path='/products' element={<Home></Home>}></Route>
      <Route path='/cart' element={<Home></Home>}></Route>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/' element={<Home></Home>}></Route>
    </Routes>
  )
}

export default App
