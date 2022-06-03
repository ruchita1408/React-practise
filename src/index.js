import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(

  <App/>,
  document.getElementById("root")
)

const A=[1,21,2,4];
function double(x)
{
  return x*2;
}
var number=A.map(double)
console.log(number);