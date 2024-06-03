import "./Display.css"

function Display(props) {
    let classes = "display ";
    classes += props.top ? "top" : "";
    return (
        <div className={classes}>{props.value}</div>
    )
}

export default Display;