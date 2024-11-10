
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Package from './models/packageModel.js';

dotenv.config();
connectDB();

const seedPackages = async () => {
    try {
        await Package.deleteMany();
        const packages = [
            {
                name: 'Beach Escape',
                description: 'Enjoy a relaxing 5-day trip to the Caribbean beaches.',
                price: 1500,
                duration: 5,
                location: 'Caribbean',
                available: true
            },
            {
                name: 'Mountain Adventure',
                description: 'A thrilling 7-day hiking and camping experience in the Rockies.',
                price: 2000,
                duration: 7,
                location: 'Rocky Mountains',
                available: true
            },
            {
                name: 'City Tour',
                description: 'Explore the best sights of New York City in 3 days.',
                price: 800,
                duration: 3,
                location: 'New York',
                available: true
            },
            {
                name: 'Safari Expedition',
                description: 'An exciting 10-day safari experience in Kenya’s national parks.',
                price: 3000,
                duration: 10,
                location: 'Kenya',
                available: true
            },
            {
                name: 'Historical Journey',
                description: 'Step back in time with a 6-day tour of ancient Greek sites.',
                price: 1200,
                duration: 6,
                location: 'Greece',
                available: true
            },
            {
                name: 'Desert Oasis',
                description: 'A unique 4-day trip to experience the beauty of the Sahara desert.',
                price: 1000,
                duration: 4,
                location: 'Sahara Desert',
                available: true
            }
        ];

        await Package.insertMany(packages);
        console.log('Data successfully seeded!');
        process.exit();
    } catch (error) {
        console.error('Error seeding data:', error);
        process.exit(1);
    }
};

seedPackages();
