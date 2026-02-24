import Card from "./Card";

function CardList() {
  const cards = [
    { title: "HTML", description: "Markup Language" },
    { title: "CSS", description: "Styling Language" },
    { title: "JavaScript", description: "Programming Language" },
    { title: "React", description: "Frontend Library" },
  ];

  return (
    <div className="card-list">
      {cards.map((item, index) => (
        <Card
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default CardList;
