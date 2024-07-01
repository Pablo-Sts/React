import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";
import Main from "../components/template/Main";
import Footer from "../components/template/Footer";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";


function App(props) {
    return (
        <BrowserRouter>
            <div className="app">
                <Logo></Logo>
                <Nav></Nav>
                <AppRoutes></AppRoutes>
                <Footer></Footer>
            </div>
        </BrowserRouter>
    )
} 

export default App;