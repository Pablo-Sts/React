import "./Main.css";
import Header from "./Header";

function Main(props) {
    return (
        <>
            <Header {...props}></Header>
            <main className="content">
                {props.children}
            </main>
        </>
    )
}

export default Main;