import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path : "/", // alamat dari sebuah page
        children : [
            {
                index : true,
                lazy : {
                    Component : async () => {
                        const component = await import ("../pages/movie/Movie.tsx");
                        return component.default
                }
            }
            },
            {
                path : "add-movie",
                lazy : {
                    Component : async () => {
                        const component = await import ("../pages/movie/AddMovie.tsx")
                        return component.default
                }
            }
        }]
    }
])

export default router;