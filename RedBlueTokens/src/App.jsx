import React, { useState } from "react";
import TokenDisplay from "./components/TokenDisplay";
import TokenForm from "./components/TokenForm";
import "./App.css";

function App() {
    const [blueTokens, setBlueTokens] = useState([]);
    const [redTokens, setRedTokens] = useState([]);

    const handleGenerateTokens = (blueTokens, redTokens) => {
        setBlueTokens(blueTokens);
        setRedTokens(redTokens);
    };

    const handleClearTokens = () => {
        setBlueTokens([]);
        setRedTokens([]);
    };

    return (
        <div>
            <div className="container">
                <h1>Token Generator</h1>
                <TokenForm
                    onGenerateTokens={handleGenerateTokens}
                    onClearTokens={handleClearTokens}
                />
            </div>
            <TokenDisplay blueTokens={blueTokens} redTokens={redTokens} />
        </div>
    );
}

export default App;
