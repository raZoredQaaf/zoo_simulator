import "./ZooApp.css";
import React, { useState, useEffect } from "react";
import Animal from "./Animals";
import monkey from "./images/monkey.png";
import giraffe from "./images/gira.png";
import elephant from "./images/elephant.png";

function ZooApp() {
  const [elephants, setElephants] = useState(
    Array(5).fill({ name: "Elephant", health: 100, imageUrl: elephant })
  );
  const [monkeys, setMonkeys] = useState(
    Array(5).fill({ name: "Monkey", health: 100, imageUrl: monkey })
  );
  const [giraffes, setGiraffes] = useState(
    Array(5).fill({ name: "Giraffe", health: 100, imageUrl: giraffe })
  );
  const [deathMessage, setDeathMessage] = useState("");
  const [currentTime, SetCurrentTime] = useState(0);

  //Function to notify the state of animals with their conditions
  const logDeaths = () => {
    const deadElephants = elephants.filter((elephant) => elephant.health < 70);
    const deadMonkeys = monkeys.filter((monkey) => monkey.health < 30);
    const deadGiraffes = giraffes.filter((giraffe) => giraffe.health < 50);

    const deathMessage = `
      ${deadElephants.length} elephants died.
      ${deadMonkeys.length} monkeys died.
      ${deadGiraffes.length} giraffes died.
    `;

    setDeathMessage(deathMessage);
  };

  useEffect(() => {
    logDeaths();
  }, [elephants, monkeys, giraffes]);

  const passTime = () => {
    //Function increase time by an 1 hour also working in tandem to decrease health of animals
    SetCurrentTime(currentTime + 1);
    //Function to decrease health of the animals by a random amount with between 0 and 20
    const decreaseHealth = (animal) => {
      //also removed the decimals using the toFixed function to remove futher confusion when adding the rules about animals
      const decreasePercentage = (Math.random() * 20).toFixed(0);
      return {
        ...animal,
        health: Math.max(0, animal.health - decreasePercentage),
      };
    };
    //The utilsing the UseState to decrease in health of animals within the array by setting a new health
    setElephants(elephants.map(decreaseHealth));
    setMonkeys(monkeys.map(decreaseHealth));
    setGiraffes(giraffes.map(decreaseHealth));
  };
  //Function to feed animal and increase their health
  const feedAnimals = () => {
    const feedPercentage = () => (Math.random() * 15).toFixed(0);
    setElephants(
      elephants.map((elephant) => ({
        ...elephant,
        health: Math.min(100, elephant.health + feedPercentage()),
      }))
    );
    setMonkeys(
      monkeys.map((monkey) => ({
        ...monkey,
        health: Math.min(100, monkey.health + feedPercentage()),
      }))
    );
    setGiraffes(
      giraffes.map((giraffe) => ({
        ...giraffe,
        health: Math.min(100, giraffe.health + feedPercentage()),
      }))
    );
  };

  const DisplayDeadAnimals = () => {
    return (
      <div className="notifications-container">
        <div className="death-counter">
          <div className="header">
            <h3>NOTIFICATIONS</h3>
          </div>
          <p> {deathMessage}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <h1>Zoo Simulator</h1>
      <h3>Hours {currentTime} </h3>
      <div className="button-container">
        <button className="button-feed" onClick={feedAnimals}>
          Feed
        </button>
        <button className="button-passTime" onClick={passTime}>
          PassTime
        </button>
      </div>

      <div className="container">
        <div className="array">
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
      <DisplayDeadAnimals />
    </>
  );
}

export default ZooApp;
