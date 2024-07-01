import { useState } from "react";
import "./App.css";
import Button from "./components/Button.js";
import Input from "./components/Input.js";

let p = 0;
let index_symbol = 0;

function App() {

  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [operator, setOperator] = useState(null);


  const addText = (val) => {
    if (!isNaN(val) || val === '.') {
      p = p+1
    } else {
      index_symbol = p;
      setOperator(val);
    }
    setText((text) => [...text, val]);
  };

 

  const resetInput = () => {
    setText([]);
    setResult('');
    setOperator(null);
    p = 0;
    index_symbol = -1;
  };

  const buttonColor = "#FF4500";

 /* const showResult = () => {
    //const symbol_index = function_?(text)
    //const symbol_index = 2 
    let end_index = text.length;
    //console.log("end_index", end_index)


    console.log(text.slice(0,index_symbol).join(''))
    console.log(text.slice(index_symbol, index_symbol+1))
    console.log(text.slice(index_symbol+1,end_index).join(''))

     console.log(text.slice(0,3))
    console.log(text.slice(3, 4))
    console.log(text.slice(4,7))

    console.log(text.slice(0,9))
    console.log(text.slice(9, 10))
    console.log(text.slice(10,14)) 
  };*/

  const showResult = () => {
    let end_index = text.length;
    const firstNumber = parseFloat(text.slice(0, index_symbol).join(''));
    const secondNumber = parseFloat(text.slice(index_symbol + 1, end_index).join(''));
   

    if (operator === '+') {
      setResult(firstNumber + secondNumber);
    } else if (operator === '-') {
      setResult(firstNumber - secondNumber);
    } else if (operator === '/') {
      setResult(firstNumber / secondNumber)
    }
    else if (operator === '*') {
      setResult(firstNumber * secondNumber);
    }
  };
 


  return (
    <div className="App">
      <div className="calcul-wrapper">
        <Input text={text} result={result} />
        <div className="row">
        <Button symbol="7" handleClick={addText}/>
        <Button symbol="8" handleClick={addText}/>
        <Button symbol="9" handleClick={addText}/>
        <Button symbol="/" color={buttonColor} handleClick={addText}/>
        </div>
        <div className="row">
        <Button symbol="4" handleClick={addText}/>
        <Button symbol="5" handleClick={addText}/>
        <Button symbol="6" handleClick={addText}/>
        <Button symbol="*" color={buttonColor} handleClick={addText}/>
        </div>
        <div className="row">
        <Button symbol="1" handleClick={addText}/>
        <Button symbol="2" handleClick={addText}/>
        <Button symbol="3" handleClick={addText}/>
        <Button symbol="+" color={buttonColor} handleClick={addText}/>
        </div>
        <div className="row">
        <Button symbol="." handleClick={addText}/>
        <Button symbol="0" handleClick={addText}/>
        <Button symbol="=" handleClick={showResult} />
        <Button symbol="-" color={buttonColor} handleClick={addText}/>
        </div>
        <Button symbol="Clear" color="#800000" handleClick={resetInput}/>
      </div>
    </div>
  );
}

export default App;
