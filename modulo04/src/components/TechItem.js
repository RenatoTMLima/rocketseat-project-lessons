import React from 'react';
import propTypes from 'prop-types';

export default function TechItem({tech, onDelete}) {
   return (
      <li>
         {tech}
         <button onClick={onDelete} type="button">Remover</button>
      </li>
   );
}

TechItem.propTypes = {
   tech: propTypes.string.isRequired,
   onDelete: propTypes.func.isRequired
}