import React from 'react';

export const ListaCremas = ({cremas}) => {
  return  <div className="block-pedido">
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
}
