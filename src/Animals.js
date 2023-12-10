import React from 'react';
// properties of the animals are the health and name 
const Animal = ({ name, health }) => (
  <div>
    <p>{`${name} Health ${health}%`}</p>
  </div>
);

export default Animal;