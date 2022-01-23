import React from 'react';

export const ElegirPedido = ({comidas, cremas}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }

  return (
    <>
      <h3>Elige tu pedido</h3>
      <form onSubmit={handleSubmit}>
        <div className="block-pedido">
          <label>Pedido:</label>
          <br />
          <select>
            {
              comidas.map(comida => {
                return <option key={comida} value={comida}>{comida}</option>
              })
            }
          </select>
        </div>
        <div className="block-pedido">
          <label>Cremas:</label>
          <br />
          {
            cremas.map(crema => {
              return  <div key={crema}>
                        <input type="checkbox" id={crema} name={crema} />
                        <label htmlFor={crema}>{crema}</label>
                      </div>
            })
          }
        </div>
      </form>
    </>
  );
}