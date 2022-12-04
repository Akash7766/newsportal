import ErrorElements from "../components/ErrorElements";
import { Paths } from "../constant/Paths";
import Layout from "../layout/Layout";
import { PublicRoutes } from "./PublicRoute";

export const portalRoutes = [
    {path:Paths.HomeRoute, element:<Layout/>, children:PublicRoutes ,errorElement:<ErrorElements/>}
]