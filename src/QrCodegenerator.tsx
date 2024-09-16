// src/components/QRCodeGenerator.jsx
import { QRCodeSVG } from 'solid-qr-code';
import { createSignal } from 'solid-js';

const QRCodeGenerator = () => {
    const [restaurant, setRestaurant] = createSignal(1);
    const [table, setTable] = createSignal(1);

    const restaurants = [
        { id: 1, name: 'Restaurant 1' },
        { id: 2, name: 'Restaurant 2' },
        { id: 3, name: 'Restaurant 3' },
    ];

    const handleRestaurantChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if(!isNaN(value)) {
            setRestaurant(value);
            console.log(value);
        }
    }

    const handleTableChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if(!isNaN(value)) {
            setTable(value);
        }
    }

    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h2>QR Code Generator</h2>
            <div>
                <h3>Restaurant</h3>
                <select
                    value={restaurant().toString()}
                    onChange={handleRestaurantChange}
                    style={{padding: '10px', fontSize: '16px'}}
                >
                    {restaurants.map((restaurant) => (
                        <option key={restaurant.id} value={restaurant.id}>{restaurant.name}</option>
                    ))}
                    </select>
            </div>
            <div>
                <h3>Table</h3>
                <input
                    type="text"
                    value={table().toString()}
                    onInput={handleTableChange}
                    placeholder="Enter text to generate QR code"
                    style={{padding: '10px', fontSize: '16px', width: '300px'}}
                />
            </div>
            <div style={{marginTop: '20px'}}>
                <QRCodeSVG
                    value={"localhost/index?r=" + restaurant() + "&t=" + table()}
                    backgroundColor="#ffffff"
                    foregroundColor="#000000"
                    width={128}
                    height={128}
                />
            </div>
        </div>
    );
};

export default QRCodeGenerator;
