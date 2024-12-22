import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet,Link} from "react-router";


const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout></AppLayout>,
        children: [{
          path:"/",
          element:<Body/>
        },{
          path:"/about",
          element:<About/>
        }],
        errorElement: <Error/>
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <Error></Error>

    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// root.render(<AppLayout></AppLayout>)