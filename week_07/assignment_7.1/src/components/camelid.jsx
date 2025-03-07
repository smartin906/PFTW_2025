export function Camelid ({name, image, trivia}) {
    return (
    <div className="Camelid">
    <h1>{name}</h1>
    <img src={image}
    alt={name}
    width="300"
    />
    <p>{trivia}</p>
    </div>
    )
}
export default Camelid