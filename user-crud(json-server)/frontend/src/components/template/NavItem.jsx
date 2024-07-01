import "./NavItem.css";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faUsers} from "@fortawesome/free-solid-svg-icons"

function NavItem(props) {
    const icon = props.name === "Home" ? faHome : faUsers;
    return (
        <Link key={props.id} to={props.target}>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon> {props.name}
        </Link>
    )
}

export default NavItem;