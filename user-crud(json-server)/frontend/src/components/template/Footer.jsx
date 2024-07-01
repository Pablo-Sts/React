import "./Footer.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCode} from "@fortawesome/free-solid-svg-icons"

function Footer(props) {
    return (
        <footer className="footer">
            <div className="text">
                <p>Um simples sistema em react para cadastro de usuários.</p>
            </div>
            <div className="social-medias">
                <a href="https://github.com/pablo-sts" target="_blank">
                    <FontAwesomeIcon icon={faCode}></FontAwesomeIcon> GitHub
                </a>
            </div>
        </footer>
    )
}

export default Footer;