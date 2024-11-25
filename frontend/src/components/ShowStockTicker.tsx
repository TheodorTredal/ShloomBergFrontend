import "../styling/showStockTickers.css"

/**
 * Displays stock prices in a rolling animation from the right to the left
 */


const RollingStockTickers = () => {
    const tmpStocks = ["AAPL", "MSFT", "BGBIO", "NVDA"];
    
    return (
        <div className="tickerBox">
            <div className="tickerContent">
                {tmpStocks.map((stock, index) => (
                    <span key={index} className="tickerItem">
                        {stock}
                    </span>
                ))}
            </div>
        </div>
    )
}


export default RollingStockTickers;