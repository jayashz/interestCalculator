
import logo from './assets/investment-calculator-logo.png';
import Form from './components/inpForm/inpForm';
import Result from './components/result/dispResult'
import { useState } from 'react';
function App() {
  const [userInput, setUserInput]= useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
  };


    const yearlyData = []; // per-year results

    if(userInput){
      let currentSavings = +userInput["current-savings"]; // feel free to change the shape of this input object!
      const yearlyContribution = +userInput["yearly-contributions"]; // as mentioned: feel free to change the shape...
      const expectedReturn = +userInput["expected-return"] / 100;
      const duration = +userInput["duration"];
  
      // The below code calculates yearly results (total savings, interest etc)
      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          // feel free to change the shape of the data pushed to the array!
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution
        });
      }
    };
 

    
    // do something with yearlyData ...

  

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <Form onCalculate={calculateHandler} />

      {!userInput && <p>No investment calculations yet!!!</p>}
      {userInput &&  <Result result={yearlyData} initInvestment={userInput['current-savings']}  /> }
     
      
    </div>
  );
  };

export default App;
