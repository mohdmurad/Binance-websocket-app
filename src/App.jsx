import React, { useState, useEffect } from 'react';
import Dropdown from './components/Dropdown';
import Chart from './components/Chart';

const symbols = {
  'ETH/USDT': 'ethusdt',
  'BNB/USDT': 'bnbusdt',
  'DOT/USDT': 'dotusdt'
};

const intervals = ['1m', '3m', '5m'];

function App() {
  const [selectedSymbol, setSelectedSymbol] = useState('ethusdt');
  const [selectedInterval, setSelectedInterval] = useState('1m');
  const [chartData, setChartData] = useState({});
  
  useEffect(() => {
    let ws;
    
    const connectWebSocket = () => {
      ws = new WebSocket(`wss://stream.binance.com:9443/ws/${selectedSymbol}@kline_${selectedInterval}`);
      
      ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        const { k } = message;
        
        const newCandle = {
          time: k.t,
          open: parseFloat(k.o),
          high: parseFloat(k.h),
          low: parseFloat(k.l),
          close: parseFloat(k.c)
        };
        
        setChartData((prevData) => ({
          ...prevData,
          [selectedSymbol]: [...(prevData[selectedSymbol] || []), newCandle]
        }));
      };
      
      ws.onclose = () => console.log('WebSocket disconnected');
    };

    connectWebSocket();
    
    return () => {
      ws.close();
    };
  }, [selectedSymbol, selectedInterval]);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Binance Live Market Data</h1>

      <div className="flex space-x-4 mb-4">
        <Dropdown
          options={Object.keys(symbols)}
          selected={selectedSymbol}
          setSelected={(value) => setSelectedSymbol(symbols[value])}
        />
        <Dropdown
          options={intervals}
          selected={selectedInterval}
          setSelected={setSelectedInterval}
        />
      </div>

      <Chart data={chartData[selectedSymbol]} />
    </div>
  );
}

export default App;
