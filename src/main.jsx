import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {LoginSignUp} from "./Components/AccediRegistrati/LoginSignUp.jsx";
import HomePage from "./Components/HomePage/HomePage.jsx";
import {Provider} from "react-redux";
import {persistor, store} from "./store/store"
import {PersistGate} from "redux-persist/integration/react";
import {ForgotPassword} from "./Components/PasswordDimenticata/ForgotPassword.jsx";
import {ResetPassword} from "./Components/ReimpostaPassword/ResetPassword.jsx";
import {GetRegistrationToken} from "./Components/GetRegistrationToken/GetRegistrationToken.jsx";

const router  = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'homepage',
                element: <HomePage/>,
            },
            {
                path:'authentication',
                element:<LoginSignUp/>,
            },
            {
                path:'user/:id/confirm/:registrationToken',
                element:<GetRegistrationToken/>,
            }
        ]
    }
])


createRoot(document.getElementById('root')).render(

       <Provider store={store}>
          <PersistGate persistor={persistor}>
              <RouterProvider router={router}/>
          </PersistGate>
      </Provider>

)
