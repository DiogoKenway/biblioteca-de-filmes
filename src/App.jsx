import { Outlet } from 'react-router-dom'
import Navbar from "./components/navbar/Navbar"
import GlobalStyle from './global-style/GlobalStyle'

function App() {

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Outlet />
    </>
  )
}




export default App
