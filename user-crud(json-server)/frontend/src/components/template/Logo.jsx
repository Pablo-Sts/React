import "./Logo.css";
import {Link} from "react-router-dom";
import logo from "../../assets/imgs/logo.png";

function Logo(props) {
    return (
        <aside className="logo">
            <Link href="/" className="logo">
                <img src={logo} alt="Logo" />
            </Link>
        </aside>
    )
}

export default Logo;