import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path : "/",
        children : [
            {
                index : true,
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
        path : "/movies",
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
            }
        ] // alamat dari sebuah page
    }
])

export default router