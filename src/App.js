import logo from './logo.svg';
import './App.css';
import ProgressBar from "./ProgressBar";
import React from "react"
//import { useWindowDimensions } from "react-native";

function App() {
  const [value, updateValue] = React.useState(0);
  //const windowWidth = useWindowDimensions().width; //screen width
 //console.log(windowWidth)
  React.useEffect(()=>{
    const interval = setInterval(()=>{
      //Run this every 10 seconds
      updateValue(oldValue=>{
        //Update value by 10
        const newValue = oldValue + 10
        console.log(newValue);
        if(newValue === 100){
          //If the value its 100, clear the interval
          clearInterval(interval);
        
        }
        return newValue;
      });
    },10000);
  },[]);

  return (
    <div className="App">
      <ProgressBar value={value} />

    </div>
  );
}

export default App;
