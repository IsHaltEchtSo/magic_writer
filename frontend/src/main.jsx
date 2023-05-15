import AuthenticationPage from './authentication'
import DownloadPage from './download'
import IndexPage from './index'
import WriterPage from './writer';
import "./assets/style.css";

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "/authentication",
    element: <AuthenticationPage />,
  },
  {
    path: "/download",
    element: <DownloadPage />,
  },
  {
    path: '/writer',
    element: <WriterPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root'))
        .render(<React.StrictMode>
                  <RouterProvider router={router} />
                </React.StrictMode>,
)
