import React, { useState } from "react";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TokenForm({ onGenerateTokens, onClearTokens }) {
    const [blueTokenCount, setBlueTokenCount] = useState(0);
    const [blueTokenPrefix, setBlueTokenPrefix] = useState("");
    const [blueTokensPerRow, setBlueTokensPerRow] = useState(1);
    const [redTokenCount, setRedTokenCount] = useState(0);
    const [redTokenPrefix, setRedTokenPrefix] = useState("");
    const [redTokensPerRow, setRedTokensPerRow] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate the number of tokens per row
        if (blueTokensPerRow > blueTokenCount) {
            alert(
                "Blue Tokens per row cannot be greater than the total number of Blue Tokens."
            );
            return;
        }

        if (redTokensPerRow > redTokenCount) {
            alert(
                "Red Tokens per row cannot be greater than the total number of Red Tokens."
            );
            return;
        }

        // Generate Blue Tokens
        const newBlueTokens = [];
        const blueRows = Math.ceil(blueTokenCount / blueTokensPerRow);
        for (let row = 0; row < blueRows; row++) {
            const rowTokens = [];

            for (let i = 0; i < blueTokensPerRow; i++) {
                const tokenNumber = row * blueTokensPerRow + i + 1;
                if (tokenNumber <= blueTokenCount) {
                    rowTokens.push({
                        label: `${blueTokenPrefix}${tokenNumber}`,
                    });
                }
            }
            // console.log(rowTokens);
            newBlueTokens.push(rowTokens);
        }
        // console.log(newBlueTokens);

        // Generate Red Tokens
        const newRedTokens = [];
        const redRows = Math.ceil(redTokenCount / redTokensPerRow);
        for (let row = 0; row < redRows; row++) {
            const rowTokens = [];
            for (let i = 0; i < redTokensPerRow; i++) {
                const tokenNumber = row * redTokensPerRow + i + 1;
                if (tokenNumber <= redTokenCount) {
                    rowTokens.push({
                        label: `${redTokenPrefix}${tokenNumber}`,
                    });
                }
            }
            newRedTokens.push(rowTokens);
        }

        // Call the onGenerateTokens callback to update the parent component
        onGenerateTokens(newBlueTokens, newRedTokens);
    };

    const handleClear = () => {
        setBlueTokenCount(0);
        setBlueTokenPrefix("");
        setBlueTokensPerRow(1);
        setRedTokenCount(0);
        setRedTokenPrefix("");
        setRedTokensPerRow(1);

        // Call the onClearTokens callback to clear tokens in the parent component
        onClearTokens();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="blueTokenCount">Number of Blue Tokens:</label>
                <input
                    type="number"
                    id="blueTokenCount"
                    value={blueTokenCount}
                    onChange={(e) =>
                        setBlueTokenCount(parseInt(e.target.value))
                    }
                    min="1"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="blueTokenPrefix">Prefix for Blue Tokens:</label>
                <input
                    type="text"
                    id="blueTokenPrefix"
                    value={blueTokenPrefix}
                    onChange={(e) => setBlueTokenPrefix(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="blueTokensPerRow">Blue Tokens per Row:</label>
                <input
                    type="number"
                    id="blueTokensPerRow"
                    value={blueTokensPerRow}
                    onChange={(e) =>
                        setBlueTokensPerRow(parseInt(e.target.value))
                    }
                    min="1"
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor="redTokenCount">Number of Red Tokens:</label>
                <input
                    type="number"
                    id="redTokenCount"
                    value={redTokenCount}
                    onChange={(e) => setRedTokenCount(parseInt(e.target.value))}
                    min="1"
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="redTokenPrefix">Prefix for Red Tokens:</label>
                <input
                    type="text"
                    id="redTokenPrefix"
                    value={redTokenPrefix}
                    onChange={(e) => setRedTokenPrefix(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="redTokensPerRow">Red Tokens per Row:</label>
                <input
                    type="number"
                    id="redTokensPerRow"
                    value={redTokensPerRow}
                    onChange={(e) =>
                        setRedTokensPerRow(parseInt(e.target.value))
                    }
                    min="1"
                    required
                />
            </div>

            <div className="button-group">
                <Button variant="contained" type="submit">
                    Generate Tokens
                </Button>
                <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={handleClear}
                >
                    Clear
                </Button>
            </div>
        </form>
    );
}

export default TokenForm;
