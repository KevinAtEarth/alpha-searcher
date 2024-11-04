import React from 'react';
import './stockTickerForm.css';

export function StockTickerForm() {
    const [symbol, setSymbol] = React.useState('');
    const [stockData, setStockData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [timeInterval, setTimeInterval] = React.useState("TIME_SERIES_INTRADAY");
    const [intradayInterval, setIntradayInterval] = React.useState("5min");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://www.alphavantage.co/query?function=${timeInterval}&symbol=${symbol}&interval=${intradayInterval}&outputsize=full&apikey=${process.env.REACT_APP_ALPHA_API_KEY}`);
            const data = await response.json();
            if (data.hasOwnProperty('Error Message')) {
                setError(data['Error Message']);
                setStockData(null);
            } else {
                setError(null)
                setStockData(data)
            }
        } catch (error) {
            setError('An error occurred while fetching the stock data.');
            setStockData(null);
        }
    }

    const timeIntervalOptions = ["TIME_SERIES_INTRADAY", "TIME_SERIES_DAILY", "TIME_SERIES_WEEKLY", "TIME_SERIES_MONTHLY"];
    const intradayIntervalOptions = ["1min", "5min", "15min", "30min", "60min"];

    return (
        <div style={{width: 800}}>
            <h1>Stock tracker</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <p>
                        <label>
                            Stock Symbol:
                            <input type="text" value={symbol} onChange={(event) => setSymbol(event.target.value)}/>
                        </label>
                    </p>
                    <p>
                        <label>
                            Time Interval:
                            <select value={timeInterval} onChange={(event) => setTimeInterval(event.target.value)}>
                                {timeIntervalOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </p>
                    <p>
                        <label>
                            Intraday Interval:
                            <select value={intradayInterval}
                                    onChange={(event) => setIntradayInterval(event.target.value)}>
                                {intradayIntervalOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </p>
                    <input type="submit" value="Search"/>
                </form>
            </div>
            {error && <p>{error}</p>}
            {stockData && (
                <div>
                    <p>{JSON.stringify(stockData, null, '\t')}</p>
                </div>
            )}
        </div>
    );
}

export default StockTickerForm;