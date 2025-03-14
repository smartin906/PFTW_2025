import Card from './Card.jsx';

function CardList({ items }) {
  return (
    <div className="card-list">
      {items.map((item, index) => (
        <Card key={index} title={item.title} villain={item.villain} />
      ))}
    </div>
  );
}

export default CardList;