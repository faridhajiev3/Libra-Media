import React from 'react'

function SizeSelection({selectedSize, productData, setSelectedSize}) {
    return (
        <div className="size-selection">
            <p>
                Select Size: <span>{selectedSize}</span>
            </p>
            <div className="sizes">
                {productData.sizes.map((size) => (
                    <div
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`size-box ${selectedSize === size ? "active" : ""
                            }`}
                    >
                        {size}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SizeSelection