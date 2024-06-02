import "./Button.css"

export default  function Button({label, operation, click, equal}) {
    let classes = "button ";
    classes += operation ? "operation" : "";
    classes += equal ? "equal" : "";
    return (
        <button className={classes} onClick={e => click && click(label)}>
            {label}
        </button>
    )
} 