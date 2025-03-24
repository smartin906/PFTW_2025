export default function UsComponent({stateName, deleteFn, focusFn}) {
  return (
    <div>
      <h2>{stateName}</h2>
      <div>
        <button onClick={() => {
          focusFn(stateName)
          }} style={{color: 'blue', background: 'white'}}>Focus</button>  <button onClick={() => {
          deleteFn(stateName)
          }} style={{color: 'red', background: 'white'}
        }>Delete</button>
      </div>
    </div>
  )
}