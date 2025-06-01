import React, { useState } from 'react'
import Accordion from 'react-bootstrap/Accordion';
import "bootstrap/dist/css/bootstrap.min.css"
import "../scss/filter.scss"
import Form from 'react-bootstrap/Form';

function FilterBar() {
    const [selectedGender, setSelectedGender] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedSize, setSelectedSize] = useState([]);
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');

    const toggleOption = (value, state, setter) => {
        setter(state.includes(value)
            ? state.filter(v => v !== value)
            : [...state, value]);
    };

    const boxStyle = (active) => ({
        border: active ? '2px solid #007bff' : '1px solid #ccc',
        borderRadius: '6px',
        padding: '8px 12px',
        margin: '6px',
        display: 'inline-block',
        cursor: 'pointer',
        minWidth: '80px',
        textAlign: 'center',
        backgroundColor: active ? '#e6f0ff' : '#f9f9f9',
        userSelect: 'none',
    });
    return (
        <Accordion defaultActiveKey={['0']} alwaysOpen flush>


            <Accordion.Item eventKey="0">
                <Accordion.Header>Gender</Accordion.Header>
                <Accordion.Body>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {['Male', 'Female'].map(item => (
                            <div
                                key={item}
                                style={boxStyle(selectedGender.includes(item))}
                                onClick={() => toggleOption(item, selectedGender, setSelectedGender)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="1">
                <Accordion.Header>Categories</Accordion.Header>
                <Accordion.Body>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {['Perfume', 'Clothing', 'Shoes'].map(item => (
                            <div
                                key={item}
                                style={boxStyle(selectedCategory.includes(item))}
                                onClick={() => toggleOption(item, selectedCategory, setSelectedCategory)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="2">
                <Accordion.Header>Size</Accordion.Header>
                <Accordion.Body>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {['S', 'M', 'L', 'XL'].map(item => (
                            <div
                                key={item}
                                style={boxStyle(selectedSize.includes(item))}
                                onClick={() => toggleOption(item, selectedSize, setSelectedSize)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="3">
                <Accordion.Header>Brand</Accordion.Header>
                <Accordion.Body>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {['Nike', 'Adidas', 'Puma', 'Gucci'].map(item => (
                            <div
                                key={item}
                                style={boxStyle(selectedBrand.includes(item))}
                                onClick={() => toggleOption(item, selectedBrand, setSelectedBrand)}
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="4">
                <Accordion.Header>Color</Accordion.Header>
                <Accordion.Body>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {['red', 'blue', 'green', 'black', 'orange'].map(color => (
                            <div
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: '50%',
                                    backgroundColor: color,
                                    border: selectedColor === color ? '3px solid black' : '1px solid gray',
                                    cursor: 'pointer'
                                }}
                                title={color}
                            />
                        ))}
                    </div>
                </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="5">
                <Accordion.Header>Price</Accordion.Header>
                <Accordion.Body>
                    <Form.Select
                        value={selectedPrice}
                        onChange={(e) => setSelectedPrice(e.target.value)}
                    >
                        <option value="">Seçin</option>
                        <option value="0-50">0 - 50 AZN</option>
                        <option value="51-100">51 - 100 AZN</option>
                        <option value="101-200">101 - 200 AZN</option>
                        <option value="200+">200+ AZN</option>
                    </Form.Select>
                </Accordion.Body>
            </Accordion.Item>

            <button className='my-5 btn btn-primary filter-apply'>Apply Filter</button>

        </Accordion>
    )
}

export default FilterBar