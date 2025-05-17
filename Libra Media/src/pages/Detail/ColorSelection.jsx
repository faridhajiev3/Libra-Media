import React from 'react'

function ColorSelection({selectedColor, setSelectedColor, productData}) {
    return (
        <div className="color-selection">
            <p>
                Select Color: <span>{selectedColor}</span>
            </p>
            <div className="colors">
                {productData.colors.map((color) => (
                    <div
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        className={`color-box ${selectedColor === color.name ? "active" : ""
                            }`}
                    >
                        <div
                            style={{ backgroundColor: color.paint }}
                            className="detail-color"
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ColorSelection