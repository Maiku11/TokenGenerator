import React from "react";

function TokenDisplay({ blueTokens, redTokens }) {
    return (
        <div id="tokenDisplay" className="token-display">
            <h2>Blue Tokens</h2>
            {blueTokens.map((row, rowIndex) => (
                <div key={rowIndex} className="token-row">
                    {row.map((token, tokenIndex) => (
                        <div key={tokenIndex} className="token blue">
                            {token.label}
                        </div>
                    ))}
                </div>
            ))}

            <h2>Red Tokens</h2>
            {redTokens.map((row, rowIndex) => (
                <div key={rowIndex} className="token-row">
                    {row.map((token, tokenIndex) => (
                        <div key={tokenIndex} className="token red">
                            {token.label}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default TokenDisplay;
