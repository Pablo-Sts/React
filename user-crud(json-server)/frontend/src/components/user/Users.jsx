import "./Users.css";
import Main from "../template/Main";
import {UsersHeader} from "../comonm/data";
import { Component } from "react";
import UsersForm from "./UsersForm";
import UsersNav from "./UsersNav";
import UsersTable from "./UsersTable";
import axios from "axios";
import { json } from "react-router";

const initialState = {
    user: {
        name: "",
        email: "",
        cpf: "",
        birthDate: ""
    },
    usersList: []
}

const baseURL = "http://localhost:3000/users";

class Users extends Component {
    state = {...initialState};
    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        const resp = await fetch(baseURL);
        const json = await resp.json();
        this.setState({usersList: json});
    }

    renderDefault() {
        return (
            <Main {...UsersHeader}>
                <div className="users container mx-0 px-0 gap-5">
                    <UsersNav></UsersNav>
                    <UsersForm></UsersForm>
                </div>
            </Main> 
        )
    }

    renderList() {
        return (
            <Main {...UsersHeader}>
                <div className="users container mx-0 px-0 gap-5">
                    <UsersNav></UsersNav>
                    <UsersTable users={[...this.state.usersList]}></UsersTable>
                </div>
            </Main>
        )
    }
    
    render() {
        if(this.props.list) return this.renderList();
        return this.renderDefault();
    }
}

export default Users;