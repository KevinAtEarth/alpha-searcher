# Stock Searcher

A React application for searching and fetching stock data from the Alpha Vantage API.

## Table of Contents

- [Overview](#overview)
- [Getting Started](#getting-started)
- [Usage](#usage)

## Overview

Stock Searcher is a simple React application that allows users to search for stock symbols and retrieve real-time stock data. It utilizes the Alpha Vantage API to fetch stock information. The application provides a user-friendly interface to select the desired time interval and intraday interval for the stock data.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/KevinAtEarth/stock-searcher.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your Alpha Vantage API key:
    1. Create a `.env` file in the root directory of the project.
    2. Add your API key as an environment variable:
       ```
       REACT_APP_ALPHA_API_KEY=your_api_key_here
       ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and visit http://localhost:3000/ to view the application.

## Usage

The Stock Searcher application a straightforward interface for users to search for stock data. Here's how to use it:

1. Open the application in your browser.
2. Enter the stock symbol you want to search for in the "Stock Symbol" input field.
3. Select the desired time interval from the "Time Interval" dropdown.
4. Select the desired intraday interval from the "Intraday Interval" dropdown.
5. Click the "Search" button.
6. The stock data will be displayed below the form.
