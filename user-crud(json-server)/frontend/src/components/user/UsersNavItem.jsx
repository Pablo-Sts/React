import "./UsersNavItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPencil, faList, faTrash, faAdd} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function UsersNavItem(props) {
    const icon = props.name === "List" ? faList : props.name === "Remove" ? faTrash : props.name === "Edit" ? faPencil : faAdd;
    return (
            <Link to={props.target} className="users-nav-item">
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
                {props.name}
            </Link>
    )
}

export default UsersNavItem;