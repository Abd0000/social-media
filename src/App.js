import Root from "components/Root";
import Home from "pages/home/Home";
import NotFound from "pages/notfound/NotFound";


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
     <Route index element={<Home  />} />
      <Route path="*" element={<NotFound />} />
      
    </Route>
  )
);

function App() {
 

  return (
    <RouterProvider router={router} />
  );
}

export default App;
