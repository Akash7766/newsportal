import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { portalRoutes } from './@shared/routes/portalRoute';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
function App() {
  const router = createBrowserRouter(portalRoutes);
  const queryClient = new QueryClient()

  return (
    <>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
    </>
  );
}

export default App;
