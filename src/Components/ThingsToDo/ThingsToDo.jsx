
import { CardThingsToDo, VariablesThingsToDo } from "./ThingsToDoModule.jsx";
import "./ThingsToDoModule.jsx"


function ThingsToDo() {

  VariablesThingsToDo();

  return (
    <>
      <br />
      {CardThingsToDo()}
    </>
  );
}

export default ThingsToDo;
