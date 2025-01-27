import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {AccediRegistrati} from "./Components/AccediRegistrati/AccediRegistrati.jsx";
/*import {Provider} from "react-redux";
import {persistor, store} from "./store/store"
import {PersistGate} from "redux-persist/integration/react";*/

const router  = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/Accedi',
                element:<AccediRegistrati/>
            }
        ]
    }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <Provider store={store}>
          <PersistGate persistor={persistor}>
              <RouterProvider router={router}/>
          </PersistGate>
      </Provider>*/}
      <RouterProvider router={router}/>
  </StrictMode>,
)
