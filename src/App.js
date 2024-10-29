import React, { useState } from 'react';
import './App.css'

function App() {
    const [initialBalance, setInitialBalance] = useState('');
    const [dailyDeposit, setDailyDeposit] = useState('');
    const [days, setDays] = useState('');
    const [result, setResult] = useState(null);

    const calculateDelays = () => {
        let balance = parseFloat(initialBalance);
        const deposit = parseFloat(dailyDeposit);
        const numDays = parseInt(days);
        let delays = 0;

        for (let i = 0; i < numDays; i++) {
            if (!Number.isInteger(balance)) {
                delays++;
            }
            balance += deposit;
        }

        setResult(delays);
    };

    return (
        <div className="container">
            <h1>Atrasos do Hugo</h1>
            <input 
                type="number" 
                placeholder="Saldo Inicial" 
                value={initialBalance} 
                onChange={(e) => setInitialBalance(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Depósito Diário" 
                value={dailyDeposit} 
                onChange={(e) => setDailyDeposit(e.target.value)} 
            />
            <input 
                type="number" 
                placeholder="Número de Dias" 
                value={days} 
                onChange={(e) => setDays(e.target.value)} 
            />
            <button onClick={calculateDelays}>Calcular Atrasos</button>
            {result !== null && (
                <h2>Hugo se atrasará {result} vezes.</h2>
            )}
        </div>
    );
}

export default App;