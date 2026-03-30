import { Routes, Route } from "react-router-dom";
import './styles/index.css'
import LoginPage from "./pages/Login/LoginPage"
import Home from "./pages/Home/Home";
import SignUpPage from "./pages/SignUp/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";
function App() {

  return (
    <>
  
    <Routes>
  
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<LoginPage />}/>
  <Route path="/signup" element={<SignUpPage />} />
  <Route path="*" element={<NotFoundPage/>} />
</Routes>
</>
  )
}

export default App
