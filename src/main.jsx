import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"


import Ref from './Hooks/useRef/MyComponentWithUseRef'
// import LoginPage from './LoginPage/LoginPage'
// import Usestate from './Hooks/Usestate/Usestate'
// import ConditionalRendering from './Hooks/Usestate/ConditionalRendering'
// import PasswordDotDotDot from './Hooks/Usestate/PasswordDotDotDot'
// import Api from './Hooks/UseEffect/Api'
// import DataOne from './Props/DataOne'
// import Comp1 from './Hooks/useContext/Comp1'
// import Product from './Hooks/Product'
// import Axios from './Hooks/Usestate/Axios'
import UserDetails from './Hooks/UseParams/UserDetails'
import StudentRegistration from './TestPractice/StudentRegistration';
// import DummyJson from './Hooks/Usestate/DummyJson'
// import Products from './Hooks/Usestate/Products'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <LoginPage/> */}
    {/* <Usestate  name="akhil" /> */}
    {/* <ConditionalRendering/> */}
    {/* <PasswordDotDotDot /> */}
    {/* <Api/> */}
    {/* <DataOne name="Akhil" age={4}/> */}
    {/* <Comp1/> */}
    {/* <Ref/> */}
    {/* <Product/> */}
    {/* <Axios/> */}
    {/* <UserDetails/> */}
    {/* <DummyJson/> */}
    {/* <Products/> */}
    {/* <BrowserRouter>
      <Routes>
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </BrowserRouter> */}
    <StudentRegistration/>
  </StrictMode>
)
