import { Paths } from "../../@shared/constant/Paths";
import HomeRoute from "./routes/HomeRoute";

export const HomeRoutes = [
    {path: Paths.HomeRoute , element: <HomeRoute/>},
    {path:'/about' , element: <div>about</div>}
]