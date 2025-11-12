import { NavLink } from "react-router";

function AddMovies() {
    return <div>
        <h2>AddMovies Page</h2>
        <NavLink to = "/" className="btn btn-danger">Back to Movies</NavLink>
    </div>
}

export default AddMovies;