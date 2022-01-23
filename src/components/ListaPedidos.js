import React from 'react';

export const ListaPedidos = ({comidas, setComidaSelected}) => {

  const handleOnChange = (e) => {
    const comidaSelected = e.target.value;
    setComidaSelected(comidaSelected);
  }

  return  <div className="block-pedido">
            <label>Pedido:</label>
            <br />
            <select onChange={handleOnChange}>
              {
                comidas.map(comida => {
                  return <option key={comida} value={comida}>{comida}</option>
                })
              }
            </select>
          </div>
}
