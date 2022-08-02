import React from 'react';

export function Purchase({ingredientName, quantity}) {

  let name = ingredientName[0].toUpperCase()+ ingredientName.substring(1)

  return (
   <li className='purchase'>
    {name}: {quantity} units
   </li>
  );
}

