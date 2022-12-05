export const Paths = {
    HomeRoute : '/',
    userLogin:'/user',
    LoginRoute: '/user/login',
    SignupRoute: '/user/signup',
    ResetRoute: '/user/reset',
    Categories:"/category",
    Categorty : (name= ":name") => `/category/${name}`,
    PostDetailsRoute: (id=":id" , name= ":name") => `/category/${name}/${id}`
}