import { Paths } from "../../@shared/constant/Paths";
import CategoriesRoute from "./routes/CategoriesRoute";
import PostDetailsRoute from "./routes/PostDetailsRoute";


export const CategoriesRoutes = [
    {path: Paths.Categories , element: <CategoriesRoute/>},
    {path: Paths.PostDetailsRoute() , element: <PostDetailsRoute/>},
   
]