import "./UsersNav.css";
import {UsersNavItens} from "../comonm/data";
import UsersNavItem from "./UsersNavItem";

function UsersNav(props) {
    return (
        <>
            <nav className="users-nav">
                <h1>Menu</h1>
                {UsersNavItens.map(props => {
                    return (
                        <UsersNavItem {...props}></UsersNavItem>
                    )
                })}
            </nav>
        </>
    )
}

export default UsersNav;