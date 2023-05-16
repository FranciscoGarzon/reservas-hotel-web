import { Layout } from '@components';
import { Habitaciones, Home, Planes, Servicios } from '@pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/'element={ <Layout />}>
    <Route index element={<Home />}/>
    <Route path='/planes' element={<Planes />}/>
    <Route path='/servicios' element={<Servicios />}/>
    <Route path='/habitaciones' element={<Habitaciones />}/>
      </Route>
     
    </Routes>
  );
}

export default App;
