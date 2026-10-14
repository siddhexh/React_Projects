import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1> Context APIs </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
