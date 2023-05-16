import { ClientContext, GraphQLClient } from 'graphql-hooks';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Chronicles from './pages/Chronicles/Chronicles'
import Stories from './pages/Stories/Stories'
import Home from './pages/Home/Home';

const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    "Authorization": `Bearer ${import.meta.env.VITE_DATOCMS_API_KEY}`,
  }
});

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <h1>Deu ruim</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cronicas",
        element: <Chronicles />,
      },
      {
        path: "/estorias",
        element: <Stories />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>
      <RouterProvider router={router} />
    </ClientContext.Provider>
  </React.StrictMode>,
)
