import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import info from "./info";

function createCard(info1)
{
return(
  <Card
  name={info1.name}
  img={info1.img}
  para={info1.para}
  />
);
}
function App() {
  return (
    <div>
    <Heading />
    {info.map(createCard)}
    </div>
  );
}

export default App;
