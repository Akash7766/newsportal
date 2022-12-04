import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { portalRoutes } from './@shared/routes/portalRoute';

function App() {
  const router = createBrowserRouter(portalRoutes);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
