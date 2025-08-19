import HomePage from './routers/HomePage'
import ListPage from './routers/ListPage'
import {Layout,RequireAuth} from './routers/Layout'
import SinglePage from './routers/SinglePage'
import ProfilePage from './routers/ProfilePage'
import LoginPage from "./routers/LoginPage"
import RegisterPage from "./routers/RegisterPage"
import ProfileUpdatePage from './routers/UpdateProfilePage'
import NewPostPage from './routers/NewPostPage'
import { listPageLoader, singlePageLoader,profilePageLoader } from './lib/loader'
import './style/index.scss'

import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


function App() {
  const router=createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
        children:[
          {
          path:"/",
          element:<HomePage/>,
          },
          {
            path:"list",
            element:<ListPage/>,
            loader:listPageLoader
          },
          {
            path:":id",
            element:<SinglePage/>,
            loader:singlePageLoader
          },
          {
          path:"login",
          element:<LoginPage/>
          },
          {
          path:"register",
          element:<RegisterPage/>
          }
        ]
    },
    {
      path:'/',
      element:<RequireAuth/>,
      children:[
        {
            path:"profile",
            element:<ProfilePage/>,
            loader:profilePageLoader
        },
        {
          path:"/profile/update",
          element:<ProfileUpdatePage/>
        },
        {
          path:"/add",
          element:<NewPostPage/>
        },
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App