import planAmigasImage from './imagesPlanes/plan-amigas.jpg';
import planBirthdayImage from './imagesPlanes/plan-cumpleaños.jpg';
import planEscapaditaImage from './imagesPlanes/plan-escapadita.jpg';
import planRelaxImage from './imagesPlanes/plan-relax.jpg';
import planRomanticoImage from './imagesPlanes/plan-romantico.jpg';
import './Planes.css';

const Planes = () => {
  return (
    <div className='planes'>
      <div className='planes__card'>
        <h3 className='planes__card-title'>Plan amigas</h3>
        <img src={planAmigasImage} alt='' className='planes__card-image' />
        <p className='planes__card-text'>
          VALOR $599.000 Alojamiento en habitacion Junior para 3 personas. Tabla
          de Quesos y Frutas de Bienvenida a la Habitacion Masaje de relajacion
          de 40min.
        </p>
      </div>

      <div className='planes__card'>
        <h3 className='planes__card-title'>Plan escapadita</h3>
        <img src={planEscapaditaImage} alt='' className='planes__card-image' />
        <p className='planes__card-text'>
          VALOR $290000 Noche de Alojamiento en Habitación Junior para dos
          personas Desayuno tipo Buffet en el restaurante 2 Cervezas y pizza.
        </p>
      </div>

      <div className='planes__card'>
        <h3 className='planes__card-title'>Plan romantico</h3>
        <img src={planRomanticoImage} alt='' className='planes__card-image' />
        <p className='planes__card-text'>
          Valor $450.000 Noche de alojamiento en habitación Junior para dos
          personas Desayuno tipo Buffet en el restaurante Cena (Menú sugerencia
          del chef) 2 bebidas sin alcohol para acompañar la cena.
        </p>
      </div>

      <div className='planes__card'>
        <h3 className='planes__card-title'>Plan cumpleaños</h3>
        <img src={planBirthdayImage} alt='' className='planes__card-image' />
        <p className='planes__card-text'>
          Valor $320.000 Noche de alojamiento en habitación Junior para dos
          personas Desayuno tipo Buffet en el restaurante Decoración especial
          (Globos). Torta de cumpleaños Media botella de vino Piscina.
        </p>
      </div>

      <div className='planes__card'>
        <h3 className='planes__card-title'>Plan relax</h3>
        <img src={planRelaxImage} alt='' className='planes__card-image' />
        <p className='planes__card-text'>
          Valor $550.000 Alojamiento en Habitación Junior para dos personas.
          Masaje de relajación simultaneo de 40min con exfoliación y
          reflexología (la cita será agendada por el SPA).
        </p>
      </div>
    </div>
  );
};

export default Planes;
