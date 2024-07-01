import "./Home.css";
import Main from "../template/Main";
import {HomeHeader} from "../comonm/data"

function Home(props) {
    return (
        <Main {...HomeHeader}>
            <div className="home">
                <h1>Bem Vindo!</h1>
                <hr />
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sint sequi necessitatibus at 
                    aspernatur placeat corrupti vero architecto rerum! Voluptas earum nostrum odit. Iure at similique 
                    veniam voluptatibus vel nemo!
                </p>
            </div>
        </Main>
    )
}

export default Home;