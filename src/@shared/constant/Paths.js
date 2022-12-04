export const Paths = {
    HomeRoute : '/',
    userLogin:'/user',
    LoginRoute: '/user/login',
    SignupRoute: '/user/signup',
    ResetRoute: '/user/reset',
    Categories:"/categories",
    PostDetailsRoute: (id = ":id") => `/categories/${id}`
}