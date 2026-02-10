import "./Printing.css";

function Printing({ title, description }) {
    return (
        <div className="printing">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default Printing;