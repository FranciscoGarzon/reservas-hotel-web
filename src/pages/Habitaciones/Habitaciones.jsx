import './Habitaciones.css';
import juniorRoomImage from './imagesHabitaciones/habitacion-junior.jpg';
import masterRoomImage from './imagesHabitaciones/habitacion-master-king.jpg';
import presidentialRoomImage from './imagesHabitaciones/habitacion-presidencial.jpg';
import duoRoomImage from './imagesHabitaciones/habitacion-standar-doble.jpg';
import singleRoomImage from './imagesHabitaciones/habitacion-standar-sencilla.jpg';
import twinRoomImage from './imagesHabitaciones/habitacion-standar-twin.jpg';

const Habitaciones = () => {
  return (
    <div className='habitaciones'>
      <div className='habitaciones__card'>
        <h3 className='habitaciones__card-title'>Habitación presidencial</h3>
        <img
          src={presidentialRoomImage}
          alt=''
          className='habitaciones__card-image'
        />
        <p className='habitaciones__card-text'>
          Linda habitación de 217mts, cuenta con 3 habitaciones, una habitación
          principal con baño privado y jacuzzi, sala, comedor y una cocina.
          Perfecto para familias.
        </p>
      </div>

      <div className='habitaciones__card'>
        <h3 className='habitaciones__card-title'>
          Habitación estandar sencilla
        </h3>
        <img
          src={singleRoomImage}
          alt=''
          className='habitaciones__card-image'
        />
        <p className='habitaciones__card-text'>
          Las habitaciones estándar sencillas ofrecen un espacio acogedor para
          descansar en Bogotá muy cerca de zonas de interés cultural. Sus 26m2
          están equipados con cama, cajilla de seguridad, televisión, mesa de
          trabajo, wifi sin costo adicional y baño privado.
        </p>
      </div>

      <div className='habitaciones__card'>
        <h3 className='habitaciones__card-title'>Habitación estandar doble</h3>
        <img src={duoRoomImage} alt='' className='habitaciones__card-image' />
        <p className='habitaciones__card-text'>
          Las habitaciones estándar dobles son alojamientos creados para
          descansar en un ambiente íntimo, con capacidad máxima para dos
          personas. Se trata de 26 m2 de superficie equipados con cama, cajilla
          de seguridad, televisión, mesa de trabajo, wifi sin costo adicional y
          baño privado.
        </p>
      </div>

      <div className='habitaciones__card'>
        <h3 className='habitaciones__card-title'>Habitación estándar twin</h3>
        <img src={twinRoomImage} alt='' className='habitaciones__card-image' />
        <p className='habitaciones__card-text'>
          Las habitaciones estándar twin están pensadas para garantizar un plus
          de espacio para viajes de negocios y vacaciones. Disponen de 28 m2 que
          cuentan con dos camas individuales, cajilla de seguridad, televisión,
          mesa de trabajo, wifi sin costo adicional y baño privado.
        </p>
      </div>

      <div className='habitaciones__card'>
        <h3 className='habitaciones__card-title'>Habitación master king</h3>
        <img
          src={masterRoomImage}
          alt=''
          className='habitaciones__card-image'
        />
        <p className='habitaciones__card-text'>
          Las habitaciones master King son la elección ideal para disfrutar de
          unas vacaciones con todo lujo de detalles. Sus 35 m2 se visten de
          comodidad y poseen una cama King, cajilla de seguridad, televisión,
          mesa de trabajo, wifi sin costo adicional y baño privado.
        </p>
      </div>

      <div className='habitaciones__card'>
        <h3 className='habitaciones__card-title'>Junior suite</h3>
        <img
          src={juniorRoomImage}
          alt=''
          className='habitaciones__card-image'
        />
        <p className='habitaciones__card-text'>
          Las junior suites son las habitaciones más exclusivas del alojamiento.
          En ellas podrá relajarse en dos ambientes diferentes que proporcionan
          una atmósfera muy elegante y tranquila. Se dividen en una sala de
          estar y un dormitorio con una cama doble con 45 m². Están equipadas
          con cajilla de seguridad, televisión, mesa de trabajo, wifi sin costo
          adicional y baño privado.
        </p>
      </div>
    </div>
  );
};

export default Habitaciones;
