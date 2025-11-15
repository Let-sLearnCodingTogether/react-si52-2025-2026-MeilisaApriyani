import { NavLink } from "react-router";

function AddMovie() {
    return <div>
        <h2>AddMovie Page</h2>
        <NavLink to = "/" className="btn btn-danger">Back to Movie</NavLink>
    </div>
}

export default AddMovie;