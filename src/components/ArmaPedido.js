import React, { useState } from 'react';
import { ElegirPedido } from './ElegirPedido';

export const ArmaPedido = () => {

  const [comidas, setComidas] = useState([
    'Salchipapa',
    'Hamburguesa',
  ]);

  const [cremas, setCremas] = useState([
    'Ketchup',
    'Mostaza',
    'Mayonesa',
    'Ají',
  ]);

  return (
    <>
      <h2>Arma tu pedido</h2>
      <div>
        <ElegirPedido
          comidas={comidas}
          cremas={cremas} />
      </div>
    </>
  );
}