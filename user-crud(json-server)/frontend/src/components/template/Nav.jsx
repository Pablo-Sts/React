import "./Nav.css";
import NavItem from "./NavItem";
import {NavItens} from "../comonm/data"

function Nav(props) {
    return (
        <nav className="menu">
            {NavItens.map(props => {
                return (
                    <NavItem {...props}></NavItem>
                )
            })}
        </nav>
    )
}

export default Nav;