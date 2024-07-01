import {Route, Routes} from "react-router-dom";
import Home from "../components/home/Home";
import Users from "../components/user/Users";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/users" element={<Users></Users>}></Route>
            <Route path="/users/list" element={<Users list={true}></Users>}></Route>
            <Route path="/users/edit" element={<Users edit={true}></Users>}></Route>
            <Route path="/users/remove" element={<Users remove={true}></Users>}></Route>
            <Route path="*" element={<Home></Home>}></Route>
        </Routes>
    )
}

export default AppRoutes;