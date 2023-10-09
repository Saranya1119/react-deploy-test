// function Nav()
// {
//     return(
//         <div class="navbar bg-danger px-4">
//             <a class="navbar-brand">Flipkart</a>
//             <div class="nav ms-auto">
//                 <a class="nav-link" href="#">Home</a>
//                 <a class="nav-link" href="#">Contact</a>
//                 <a class="nav-link" href="#">Blog</a>
//                 <a class="nav-link" href="#">Projects</a>
//             </div>
//             <button class="btn btn-success">Order Now</button>
//         </div>
//     )
// }
// export default Nav;


// replacing anchor tags after installing and tryinto use react-router-dom

import {Link} from "react-router-dom";

function Nav()
{
    return(
        <div class="navbar bg-danger px-4">
            <Link to="/" class="navbar-brand">Flipkart</Link>
            <div class="nav ms-auto">
                <Link class="nav-link" to="/">Home</Link>
                <Link class="nav-link" to="/contact">Contact</Link>
                <Link class="nav-link" to="/blog">Blog</Link>
                <Link class="nav-link" to="/project">Project</Link>
            </div>
            <button class="btn btn-success">Order Now</button>
        </div>
    )
}
export default Nav;

