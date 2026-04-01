import {Routes ,Route} from 'react-router-dom'
import './styles/index.css'
import LoginPage from "./features/auth/pages/login";

function App() {

  return (
<>
    <Routes>
      <Route path='/login' element = {<LoginPage/>} ></Route>
      <Route></Route>
      <Route></Route>
      <Route></Route>
    </Routes>
</>
  )
}

export default App
