import React, { useState } from 'react';
import { ElegirPedido } from './ElegirPedido';

export const ArmaPedido = () => {

  const [comidas, ] = useState([
    'Salchipapa',
    'Hamburguesa',
  ]);

  const [comidaSelected, setComidaSelected] = useState(comidas[0]);
  
  const [cremas, ] = useState([
    'Ketchup',
    'Mostaza',
    'Mayonesa',
    'Ají',
  ]);

  const [cremasSelected, setCremasSelected] = useState([]);

  const handleOnClick = (e) => {
    const mensaje = `${comidaSelected}, cremas: ${cremasSelected.join(', ')}`;
    window.open(`https://wa.me/51935598917?text=${mensaje}`);
  }

  return (
    <>
      <h2>Arma tu pedido</h2>
      <div>
        <ElegirPedido
          comidas={comidas} setComidaSelected={setComidaSelected}
          cremas={cremas} cremasSelected={cremasSelected} setCremasSelected={setCremasSelected}
        />
        {/* <a url="http://wa.me/51935598917?text=I'm">Enviar mensaje</a> */}
      </div>
      <div className="block-pedido">
        <button onClick={handleOnClick}>Hacer pedido</button>
      </div>
    </>
  );
}