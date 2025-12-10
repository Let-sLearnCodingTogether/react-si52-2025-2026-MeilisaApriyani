import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path : "/",
        children : [
            {
                path : "signUp",
                lazy : {
                    Component : async() => {
                        const component = await import("../pages/movie/auth/signup/SignUp.tsx")
                        return component.default
                    }
                }
            },
            {
                path : "signIn",
                lazy : {
                    Component : async() => {
                        const component = await import("../pages/movie/auth/signin/SignIn.tsx")
                        return component.default
                    }
                }
            }
        ]    
    },  
    {
        path : "/movie",
        children : [
            {
                index : true,
                lazy : {
                    Component : async() => {
                        const component = await import("../pages/movie/Movie.tsx")
                        return component.default
                    }
                }
            },
            {
                path : "add-movie",
                lazy : {
                    Component : async() => {
                        const component = await import("../pages/movie/AddMovie.tsx")
                        return component.default
                    }
                } 
            },
            {
                path : "edit-movie/:id",
                lazy : {
                    Component : async() => {
                        const component = await import("../pages/movie/EditMovie.tsx")
                        return component.default
                    }
                }
            }
        ] 
    }
])

export default router