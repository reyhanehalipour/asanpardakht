import {
  createBrowserRouter,RouterProvider, Outlet,Route, Link,} from "react-router-dom";

import MainPage from "./Pages/MainPage"
import Login from "./Pages/Login"
import LoginInCode from "./Pages/LoginInCode";


const router = createBrowserRouter([
  { path: "/", element: <MainPage/> },
  { path: "/login", element: <Login/> },
  { path: "/logincode", element: <LoginInCode/> },
 

]);

function App() {
  

  return (
    <div className="app">
    <RouterProvider router={router} />
  </div>
    
   
  )
}

export default App
