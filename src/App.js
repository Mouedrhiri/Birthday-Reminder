import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const [btn, setBtn] = useState("Remove People");
  const handleClick = () => {
    if (btn === "Remove People") {
      setBtn("Add People");
      setPeople([]);
    } else if (btn === "Add People") {
      setPeople(data);
      setBtn("Remove People");
    }
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => handleClick()}>{btn}</button>
        <br />
        <h4
          style={{
            textAlign: "center",
          }}
        >
          By Mohammed Ouedrhiri
        </h4>
      </section>
    </main>
  );
}

export default App;
