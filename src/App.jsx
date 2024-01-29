import UserContextprovider from './context/UserContextProvider'
import Login from './components/Login'
import './App.css'
import Profile from './components/Profile'

function App() {
 

  return (
    <UserContextprovider>
      <h1>React with chai</h1>
      <Login />
      <Profile />
    </UserContextprovider>
  )
}

export default App
