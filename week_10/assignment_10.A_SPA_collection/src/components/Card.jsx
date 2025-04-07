import { Link } from 'react-router-dom'; // Import Link for navigation
import clsx from "clsx";
import PropTypes from "prop-types";
import "./Card.css";
export default function Card({    
    title,
    villain,
    objective,
    outcome,
    image,
    id,
    duplicateFn,
    focusFn,
    deleteFn
}) {
    return (
      <div className="card">
        <h2><Link to={`${id}`}>{title}</Link></h2>
        <img src={image} alt={title} />
        <p><strong>Villain:</strong> {villain}</p>
        <p><strong>Objective:</strong> {objective}</p>
        <p><strong>Outcome:</strong> {outcome}</p>
        <button onClick={() => deleteFn(id)}>Delete</button>
        <button onClick={() => focusFn(title)}>Focus</button>
        <button onClick={() => duplicateFn(id)}>Duplicate</button>
      </div>
    )
}
Card.prototype = {
    title: PropTypes.string.isRequired,
    villain: PropTypes.string.isRequired,
    objective: PropTypes.string.isRequired,
    outcome: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    duplicateFn: PropTypes.func.isRequired,
    focusFn: PropTypes.func.isRequired,
    deleteFn: PropTypes.func.isRequired
}