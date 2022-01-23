import React from 'react';
import { ListaCremas } from './ListaCremas';
import { ListaPedidos } from './ListaPedidos';

export const ElegirPedido = ({ comidas, setComidaSelected, cremas, setCremasSelected}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <>
      <h3>Elige tu pedido</h3>
      <form onSubmit={handleSubmit}>
        <ListaPedidos comidas={comidas} setComidaSelected={setComidaSelected} />
        <ListaCremas cremas={cremas} setCremasSelected={setCremasSelected} />
      </form>
    </>
  );
}
