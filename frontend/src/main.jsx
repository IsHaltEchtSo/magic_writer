import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import WriterPage from './writer.jsx';
import IndexPage from './index.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: '/writer',
    element: <WriterPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
