import './App.css'
import { Outlet } from 'react-router'


function App() {

  return (
    <>
      <p>Header Menu</p>
      <Outlet />  
    </>
  )
}

export default App
