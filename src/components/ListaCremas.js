import React, { useEffect } from 'react';

export const ListaCremas = ({cremas, cremasSelected = [], setCremasSelected}) => {

  const handleOnChange = (e) => {
    const cremaSelected = e.target.name;
    if (cremasSelected.some(x => x === cremaSelected)) {
      setCremasSelected(cremasSelected.filter(x => x !== cremaSelected));
    } else {
      setCremasSelected([...cremasSelected, cremaSelected].sort());
    }
  }

  return  <div className="block-pedido">
            <label>Cremas:</label>
            <br />
            {
              cremas.map(crema => {
                return  <div key={crema}>
                          <input type="checkbox" id={crema} name={crema} onChange={handleOnChange}  />
                          <label htmlFor={crema}>{crema}</label>
                        </div>
              })
            }
          </div>
}
