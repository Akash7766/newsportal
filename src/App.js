import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { portalRoutes } from './@shared/routes/portalRoute';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { HelmetProvider } from 'react-helmet-async';
function App() {
  const router = createBrowserRouter(portalRoutes);
  const queryClient = new QueryClient()

  return (
    <>
    <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
    </HelmetProvider>
    </>
  );
}

export default App;
