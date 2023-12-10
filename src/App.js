import "./App.css";
import React, { useState} from "react";
import Animal from "./Animals";


function App() {
  const [elephants, setElephants] = useState(Array(5).fill({ name: "Elephant", health: 100 }));
  const [monkeys, setMonkeys] = useState(Array(5).fill({ name: "Monkey", health: 100 }));
  const [giraffes, setGiraffes] = useState(Array(5).fill({ name: "Giraffe", health: 100 }));
  const [currentTime, SetCurrentTime] = useState(0);

 const passTime = () => {
    //Function increase time by an 1 hour also working in tandem to decrease health of animals
     SetCurrentTime(currentTime + 1);
    //Function to decrease health of the animals by a random amount with between 0 and 20
    const decreaseHealth = (animal) => {
      //also removed the decimals using the toFixed function to remove futher confusion when adding the rules about animals
      const decreasePercentage = (Math.random() * 20).toFixed(0);
      return { ...animal, health: Math.max(0, animal.health - decreasePercentage) };
      
    };
    //The utilsing the UseState to decrease in health of animals within the array by setting a new health
    setElephants(elephants.map(decreaseHealth));
    setMonkeys(monkeys.map(decreaseHealth));
    setGiraffes(giraffes.map(decreaseHealth));
  };
  //Function to feed animal and increase their health
  const feedAnimals = () => {
    const feedPercentage = () => (Math.random() * 15 + 10).toFixed(0);
    setElephants(elephants.map((elephant) => ({ ...elephant, health: Math.min(100, elephant.health + feedPercentage()) })));
    setMonkeys(monkeys.map((monkey) => ({ ...monkey, health: Math.min(100, monkey.health + feedPercentage()) })));
    setGiraffes(giraffes.map((giraffe) => ({ ...giraffe, health: Math.min(100, giraffe.health + feedPercentage()) })));
  };

  //Function to notify elephants cannot walk when health is 70%
  //Function to delete elephants and when health is below 70%
  //Function to delete monkey when health is 30%
  //Function to delete giraffes when health is 50%
  
  
  return (
    <>
      <h1>Zoo Simulator</h1>
      <h3>00:00:{currentTime + "0"}</h3>
    <button className="Feed"onClick={feedAnimals}>Feed</button>
    <button className="passTime" onClick={passTime}>AddTime</button>

    <div className="container">
      <div >
        
        {elephants.map((elephant, index) => (
          <Animal key={index} {...elephant} />
        ))}
      </div>

      <div>
        
        {monkeys.map((monkey, index) => (
          <Animal key={index} {...monkey} />
        ))}
      </div>

      <div>
        {giraffes.map((giraffe, index) => (
          <Animal key={index} {...giraffe} />
        ))}
      </div>

      
    </div>
 
    
    </>
  );
}

export default App;
