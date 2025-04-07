import Card from './Card.jsx';

function CardList({ items }) {
  return (
    <div className="card-list">
      {items.map((item, index) => (
        <div key={index}>
          <Card
            title={item.title}
            image={item.image}
            villain={item.villain}
            objective={item.objective}
            outcome={item.outcome}
            
          />
        </div>
      ))}
    </div>
  );
}

export default CardList;