import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestMenuPage from "./components/RestMenuPage";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import('./components/Grocery'));

const AppLayout= () =>{
return (
    <div className="App">
        <Header />
        <Outlet />
    </div>
)
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
            {
                path: '/',
                element: <Body />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'grocery',
                element: <Suspense fallback={< Shimmer />}><Grocery /></Suspense>
            },
            {
                path:"/restaurant/:restId",
                element: <RestMenuPage />
        
            }
        ],
        errorElement:<Error />

    },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
