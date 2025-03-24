export default function Card({ title, image, villain, objective, outcome, deleteFn, focusFn, duplicateFn }) {
    
  return (
    <div className="card">
      <h3>{title}</h3>
      <img src={image}
        alt={title}
      />
      <h4>villain</h4>
      <p>{villain}</p>
      <h4>objective</h4>
      <p>{objective}</p>
      <h4>outcome</h4>
      <p>{outcome}</p>
      <button onClick={() => {
        focusFn(title)
      }} style={{color: 'blue', background: 'white', margin: 10}}>Focus</button>
      <button onClick={() => {
        deleteFn(title)
      }} style={{color: 'red', background: 'white'}}>Delete</button>
      < button onClick={() => {
        duplicateFn(title)
      }
      } style={{ color: 'green', background: 'white' }}>Duplicate</button>
    </div>
  );
}

