import AuthenticationPage from './authentication.jsx'
import DownloadPage from './download.jsx'
import IndexPage from './index.jsx'
import WriterPage from './writer.jsx';
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
