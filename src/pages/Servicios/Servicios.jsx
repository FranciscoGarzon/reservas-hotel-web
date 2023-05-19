import barImage from '@assets/images/bar.jpg';
import campingImage from '@assets/images/camping.jpg';
import eventHallImage from '@assets/images/event-hall.jpg';
import gameZoneImage from '@assets/images/game-zone.jpg';
import parkingImage from '@assets/images/parking.jpg';
import poolImage from '@assets/images/pool.jpg';
import restaurantImage from '@assets/images/restaurant.jpg';
import tourGuideImage from '@assets/images/tour-guide.jpg';
import './Servicios.css';

const Servicios = () => {
  return (
    <div className='servicios'>
      <div className='servicios__card'>
        <h3 className='servicios__card-title'>Zona de camping</h3>
        <img src={campingImage} alt='' className='servicios__card-image' />
        <p className='servicios__card-description'>
          Aquí podrás acampar con tu familia y amigos, disfrutando de la
          naturaleza y de la tranquilidad que te ofrece el hotel.
        </p>
      </div>

      <div className='servicios__card'>
        <h3 className='servicios__card-title'>Piscina</h3>
        <img src={poolImage} alt='' className='servicios__card-image' />
        <p className='servicios__card-description'>
          Disfruta de nuestra piscina, con una vista espectacular y un clima
          agradable.
        </p>
      </div>

      <div className='servicios__card'>
        <h3 className='servicios__card-title'>Restaurante</h3>
        <img src={restaurantImage} alt='' className='servicios__card-image' />
        <p className='servicios__card-description'>
          Exquisitos platos típicos de la región, con ingredientes frescos, de
          temporada y de la mejor calidad.
        </p>
      </div>

      <div className='servicios__card'>
        <h3 className='servicios__card-title'>Parqueadero</h3>
        <img src={parkingImage} alt='' className='servicios__card-image' />
        <p className='servicios__card-description'>
          Contamos con un amplio parqueadero para que puedas dejar tu vehículo
          con total seguridad.
        </p>
      </div>

      <div className='servicios__card'>
        <h3 className='servicios__card-title'>Bar</h3>
        <img src={barImage} alt='' className='servicios__card-image' />
        <p className='servicios__card-description'>
          Experiencia única en nuestro bar, con gran variedad de bebidas y
          cocteles para acompañar tus mejores momentos.
        </p>
      </div>

      <div className='servicios__card'>
        <h3 className='servicios__card-title'>Salón de eventos</h3>
        <img src={eventHallImage} alt='' className='servicios__card-image' />
        <p className='servicios__card-description'>
          Celebra tus mejores momentos en nuestro salón de eventos, con una
          capacidad de hasta 100 personas.
        </p>
      </div>

      <div className='servicios__card'>
        <h3 className='servicios__card-title'>Guía turistico</h3>
        <img src={tourGuideImage} alt='' className='servicios__card-image' />
        <p className='servicios__card-description'>
          Te ofrecemos un guía turístico para que puedas conocer los mejores
          lugares de la región.
        </p>
      </div>

      <div className='servicios__card'>
        <h3 className='servicios__card-title'>Zona de juegos y recreación</h3>
        <img src={gameZoneImage} alt='' className='servicios__card-image' />
        <p className='servicios__card-description'>
          En nuestra zona de juegos podrás explorar diferentes actividades como:
          ping pong, billar, juegos de mesa, entre otros.
        </p>
      </div>
    </div>
  );
};

export default Servicios;
