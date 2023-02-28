import './App.css';
import PersonCard from './components/PersonCard';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <PersonCard
        firstName={"Brendan"}
        lastName={"Cordova"}
        age={27}
        hairColor={"sienna"}
      />
      <PersonCard
        firstName={"Tori"}
        lastName={"Cordova"}
        age={26}
        hairColor={"brown"}
      />
      <PersonCard
        firstName={"Bella"}
        lastName={"Cordova"}
        age={10}
        hairColor={"chocolate"}
      />
      <PersonCard
        firstName={"Charlie"}
        lastName={"Cordova"}
        age={9}
        hairColor={"gray"}
      />
    </div>
  );
}

export default App;
