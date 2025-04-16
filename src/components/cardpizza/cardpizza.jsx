import './cardpizza.css';

function CardPizza({ name, price, ingredients, img }) {
  return (
    <div>
      <img src={img} alt={`imagen de la pizza ${name}`} />
      <h3>{name}</h3>
      <div>
        <span>ingredientes:</span>
        <ul>
          {ingredients.map((ingredient) => {
            return (
              <li>
                <span>{ingredient}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <span>Precio: ${price}</span>
      <div>
        <button>Ver más</button>
        <button>Añadir</button>
      </div>
    </div>
  );
}

export default CardPizza;
