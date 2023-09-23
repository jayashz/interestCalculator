import React from 'react';
import { useState } from 'react';
const initInp = {
    'current-savings': 10000,
    'yearly-contributions': 1200,
    'expected-return': 7,
    'duration': 10,
};
const InpForm = (props) => {
    const [userInput, setUserInput] = useState(initInp);

    const calculateHandler = (event) => {
        event.preventDefault();
        props.onCalculate(userInput);
    };

    const resetHandler = () => {
        setUserInput(initInp);
    };
    const inputChangeHandler = (input, value) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: +value
            };
        });
    };

    return (
        <div>
            <form className="form" onSubmit={calculateHandler}>
                <div className="input-group">
                    <p>
                        <label htmlFor="current-savings">Current Savings ($)</label>
                        <input type="number" id="current-savings" value={userInput['current-savings']} onChange={(event) => { inputChangeHandler('current-savings', event.target.value) }} />
                    </p>
                    <p>
                        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                        <input type="number" id="yearly-contribution" value={userInput['yearly-contributions']} onChange={(event) => { inputChangeHandler('yearly-contributions', event.target.value) }} />
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label htmlFor="expected-return">
                            Expected Interest (%, per year)
                        </label>
                        <input type="number" id="expected-return" value={userInput['expected-return']} onChange={(event) => { inputChangeHandler('expected-return', event.target.value) }} />
                    </p>
                    <p>
                        <label htmlFor="duration">Investment Duration (years)</label>
                        <input type="number" id="duration" value={userInput['duration']} onChange={(event) => { inputChangeHandler('duration', event.target.value) }} />
                    </p>
                </div>
                <p className="actions">
                    <button type="reset" className="buttonAlt" onClick={resetHandler}>Reset
                    </button>
                    <button type="submit" className="button">
                        Calculate
                    </button>
                </p>
            </form>
        </div>
    )
}

export default InpForm