import './App.css'
import { Outlet } from 'react-router'
import useUserStore from './stores/userStores'
import Header from './components/Header'


function App() {

  const user = useUserStore(state => state.user)
  const logout = useUserStore(state => state.logout)

  return (
    <>
    <div className='min-h-screen bg-rose-100'>
      <Header /> 
      <main className='relative flex bg-gray-50 border pt-14 gap-2'>
        <Outlet />  
      </main>
    </div>
    </>
  )
}

export default App
