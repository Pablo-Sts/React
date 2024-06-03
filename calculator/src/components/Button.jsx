import "./Button.css"

function Button(props) {
    let classes = "button ";
    classes += props.operation ? "operation" : "";
    classes += props.equal ? "equal" : "";
    return (
        <button className={classes} onClick={e => props.click && props.click(props.label)}>
            {props.label}
        </button>
    )
} 

export default Button;