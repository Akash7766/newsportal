import { Paths } from "../../@shared/constant/Paths";
import LoginRoute from "./routes/LoginRoute";
import ResetPass from "./routes/ResetPass";
import SignupRoute from "./routes/SignupRoute";

export const LoginRoutes = [
    {path: Paths.LoginRoute , element: <LoginRoute/>},
    {path: Paths.SignupRoute , element: <SignupRoute/>},
    {path: Paths.ResetRoute , element: <ResetPass/>},
]