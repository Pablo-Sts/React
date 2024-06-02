import "./Display.css"

export default function Display({value, top}) {
    let classes = "display ";
    classes += top ? "top" : "";
    return (
        <div className={classes}>{value}</div>
    )
}