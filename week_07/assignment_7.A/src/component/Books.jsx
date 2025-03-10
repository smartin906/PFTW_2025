export function Books ({title, villain, image, objective, outcome}) {
    return (
    <div className="Books">
    <h1>{title}</h1>
    <img src={image}
    alt={title}
    />
    <p>{villain}</p>
    <p>{objective}</p>
    <p>{outcome}</p>
    </div>
    )
}
export default Books