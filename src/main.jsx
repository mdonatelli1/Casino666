import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Accueil from "./pages/MenuPrincipal/component/Accueil.jsx";
import Niveau1 from "./pages/Niveau1/components/Niveau1.jsx";
import Niveau2 from "./pages/Niveau2/components/Niveau2.jsx";
import Niveau3 from "./pages/Niveau3/components/Niveau3.jsx";
import Niveau4 from "./pages/Niveau4/components/Niveau4.jsx";
import Niveau5 from "./pages/Niveau5/components/Niveau5.jsx";
import FinalPage from "./pages/FinalPage/components/FinalPage.jsx";
import YesPage from "./pages/FinalPage/components/YesPage.jsx";
import NoPage from "./pages/FinalPage/components/NoPage.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/Casino666",
        element: <Accueil />,
      },
      {
        path: "/Casino666/niveau1",
        element: <Niveau1 />,
      },
      {
        path: "/Casino666/niveau2",
        element: <Niveau2 />,
      },
      {
        path: "/Casino666/niveau3",
        element: <Niveau3 />,
      },
      {
        path: "/Casino666/niveau4",
        element: <Niveau4 />,
      },
      {
        path: "/Casino666/niveau5",
        element: <Niveau5 />,
      },
      {
        path: "/Casino666/pagefinale",
        element: <FinalPage />,
      },
      {
        path: "/Casino666/cimetiere",
        element: <YesPage />,
      },
      {
        path: "/Casino666/asile",
        element: <NoPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
