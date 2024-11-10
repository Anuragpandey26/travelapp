import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DashboardPage.css';

function DashboardPage() {
    const [packages, setPackages] = useState([]);
    const [filteredPackages, setFilteredPackages] = useState([]);
    const [error, setError] = useState('');
    const [selectedLocation, setSelectedLocation] = useState(''); 
    const [sortOption, setSortOption] = useState(''); 

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:8080/api/packages', {
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                });
                setPackages(response.data);
                setFilteredPackages(response.data); 
            } catch (err) {
                setError('Failed to load packages');
            }
        };

        fetchPackages();
    }, []);

    const handleLocationFilter = (event) => {
        setSelectedLocation(event.target.value);

        if (event.target.value === '') {
            setFilteredPackages(packages);
        } else {
            const filtered = packages.filter(pkg =>
                pkg.location.toLowerCase().includes(event.target.value.toLowerCase())
            );
            setFilteredPackages(filtered);
        }
    };

    const handleSort = (event) => {
        setSortOption(event.target.value);

        let sortedPackages = [...filteredPackages];
        if (event.target.value === 'price-asc') {
            sortedPackages.sort((a, b) => a.price - b.price);
        } else if (event.target.value === 'price-desc') {
            sortedPackages.sort((a, b) => b.price - a.price);
        }

        setFilteredPackages(sortedPackages);
    };

    const handleBooking = (packageName) => {
        alert(`You have booked the ${packageName} package!`);
    };

    return (
        <div className="dashboard-container">
            <h2>Available Travel Packages</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="filters">
                <div className="filter">
                    <label>Filter by Location:</label>
                    <input
                        type="text"
                        value={selectedLocation}
                        onChange={handleLocationFilter}
                        placeholder="Enter location"
                    />
                </div>

                <div className="filter">
                    <label>Sort by Price:</label>
                    <select onChange={handleSort} value={sortOption}>
                        <option value="">Select</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                    </select>
                </div>
            </div>
            <div className="packages-list">
                {filteredPackages.map((pkg) => (
                    <div className="package-card" key={pkg._id}>
                        <h3>{pkg.name}</h3>
                        <p><strong>Location:</strong> {pkg.location}</p>
                        <p><strong>Price:</strong> ${pkg.price}</p>
                        <p><strong>Description:</strong> {pkg.description}</p>
                        <button onClick={() => handleBooking(pkg.name)}>Book Now</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DashboardPage;
