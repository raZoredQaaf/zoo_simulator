// import React from 'react';

// const Animal = ({ name, health, imageUrl, status }) => {
//   console.log();
//   return (
//     <div className="animal">
//       <img src={imageUrl} alt={name} style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
//       <p>{`${name} Health ${health}%`}</p>
//       <button>{`${status}`}</button>
      
//     </div>
//   );
// };
// // properties of the animals are the health and name also the status alive or dead


// export default Animal;

import React from 'react';

const Animal = ({ name, health, imageUrl }) => {
  console.log();
  return (
    <div className="animal">
      <img src={imageUrl} alt={name} style={{ width: '48px', height: '48px', objectFit: 'cover' }} />
      <p>{`${name} Health ${health}%`}</p>
      
    </div>
  );
};

export default Animal;