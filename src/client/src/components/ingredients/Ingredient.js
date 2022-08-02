import React from 'react';

export function Ingredient({name, quantity}) {

  return (
   <li className='ingredient'>
    {name}: {quantity} units
   </li>
  );
}

