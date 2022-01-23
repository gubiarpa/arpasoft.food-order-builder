import React, { useState } from 'react';
import { ElegirPedido } from './ElegirPedido';

export const ArmaPedido = () => {

  const [comidas, setComidas] = useState([
    'Salchipapa',
    'Hamburguesa',
  ]);

  const [comidaSelected, setComidaSelected] = useState(comidas[0]);
  
  const [cremas, setCremas] = useState([
    'Ketchup',
    'Mostaza',
    'Mayonesa',
    'Ají',
  ]);

  const [cremasSelected, setCremasSelected] = useState([]);

  return (
    <>
      <h2>Arma tu pedido</h2>
      <div>
        <ElegirPedido
          comidas={comidas} setComidaSelected={setComidaSelected}
          cremas={cremas} cremasSelected={cremasSelected} setCremasSelected={setCremasSelected}
        />
      </div>
    </>
  );
}