function Card({ title, villain }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{villain}</p>
    </div>
  );
}

export default Card;