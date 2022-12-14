import { CategoriesRoutes } from "../../@modules/categories";
import { HomeRoutes } from "../../@modules/home";
import { LoginRoutes } from "../../@modules/login";
import { Paths } from "../constant/Paths";

export const PublicRoutes = [
    {path:Paths.HomeRoute, children:HomeRoutes},
    {path:Paths.userLogin,children:LoginRoutes},
    {path:Paths.Categories,children:CategoriesRoutes},
]