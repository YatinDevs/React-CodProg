import Reactm, { useState } from "react";
import RockBand from "./RockBand";

function RockBandList() {
  const [rockBands, setRockBands] = useState([
    { name: "Queen", id: 1 },
    { name: "King", id: 2 },
    { name: "Siddesh", id: 3 },
    { name: "Rajesh", id: 4 },
    { name: "Ramesh", id: 5 },
    { name: "Priya", id: 6 },
    { name: "Rinka", id: 7 },
    { name: "Siya", id: 8 },
    { name: "Aditya", id: 9 },
    { name: "Abhi", id: 10 },
  ]);

  const addNewRockBand = () => {
    console.log("add New Rock Band...");
    const newRockBand = {
      id: crypto.randomUUID(),
      name: "newBankAdded",
    };
    setRockBands((prevState) => {
      return [...prevState, newRockBand];
    });
  };
  return (
    <ol>
      {rockBands.map((band) => (
        <RockBand name={band.name} key={band.id} />
      ))}
      <button onClick={addNewRockBand}>Add new Rock Band</button>
    </ol>
  );
}

export default RockBandList;
