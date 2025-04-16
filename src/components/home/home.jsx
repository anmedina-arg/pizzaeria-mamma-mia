import './home.css';
import Header from '../header/header';
import CardPizza from '../cardpizza/cardpizza';

function Home() {
  return (
    <section>
      <Header />
      <section>
        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={['mozzarella', 'tomates', 'jamón', 'orégano']}
          img="https://assets.elgourmet.com/wp-content/uploads/2023/03/8metlvp345_portada-pizza.jpg"
        />
        <CardPizza
          name="Española"
          price={6950}
          ingredients={['mozzarella', 'gorgonzola', 'parmesano', 'provolone']}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI2hdQeNVlyu20ReOpJcNwdgW0ER5hwxnauQ&s"
        />
        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={['mozzarella', 'pepperoni', 'orégano']}
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZI0UfzLiRyNMAjQkAeC1hPpmltGbRrkmvPA&s"
        />
      </section>
    </section>
  );
}

export default Home;
