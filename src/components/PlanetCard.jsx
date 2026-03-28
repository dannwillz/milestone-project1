const PlanetCard = ({ planet }) => {
  return (
    <figure>
      <img
        src={`/assets/images/${planet.image.split("/").pop().replace(".webp", ".jpg")}`}
        alt={planet.planet}
      />
      <figcaption>
        <h3>{planet.name}</h3>
        <p>{planet.distance}</p>
      </figcaption>
    </figure>
  );
};

export default PlanetCard;
