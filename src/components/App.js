
import React from "react";
import './../styles/App.css';


const App = ({temperature, conditions}) => {
  return (
    <div className= {temperature>20? "red-cl" : "blue-cl"}>
        {temperature + " " +  conditions}
    </div>
  )
}

export default App
