import { render, screen, fireEvent } from '@testing-library/react';
import StockTickerForm from './StockTickerForm';

test('renders stock symbol input field', () => {
    // Render the component
    render(<StockTickerForm />);

    // Check if the stock symbol input field exists
    const stockSymbolInput = screen.getByLabelText('Stock Symbol:');
    expect(stockSymbolInput).toBeInTheDocument();
});

test('submits form and displays stock data', async () => {
    // Render the component
    render(<StockTickerForm />);

    // Simulate form submission with a valid stock symbol
    const stockSymbolInput = screen.getByLabelText('Stock Symbol:');
    const submitButton = screen.getByText('Search');

    fireEvent.change(stockSymbolInput, { target: { value: 'AAPL' } });
    fireEvent.click(submitButton);

    // Wait for data to be fetched and displayed
    await screen.findByText(/stock data/i);

    // Check if the stock data is displayed
    expect(screen.getByText(/stock data/i)).toBeInTheDocument();
});