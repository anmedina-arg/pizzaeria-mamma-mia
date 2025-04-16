import './cardpizza.css';

function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="card-container">
      <img
        className="card-image"
        src={img}
        alt={`imagen de la pizza ${name}`}
      />
      <h3 className="card-title">{name}</h3>
      <div className="separator-line"></div>
      <div className="ingredients-container">
        <span className="ingredients-title">Ingredientes:</span>
        <ul className="ingredients-list">
          {ingredients.map((ingredient) => {
            return (
              <li className="ingredients-items">
                <span>{ingredient}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="separator-line"></div>
      <span className="card-price">Precio: ${price}</span>
      <div className="card-container-buttons">
        <button>Ver más</button>
        <button>Añadir</button>
      </div>
    </div>
  );
}

export default CardPizza;
