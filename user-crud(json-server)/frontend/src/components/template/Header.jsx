import "./Header.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome, faUsers} from "@fortawesome/free-solid-svg-icons"

function Header(props) {
    const icon = props.tittle === "Home" ? faHome : faUsers;
    return (
        <header className="header">
                <h1>
                    <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
                    {props.tittle}
                </h1>
            <p>
                {props.subtittle}
            </p>
        </header>
    )
}

export default Header;