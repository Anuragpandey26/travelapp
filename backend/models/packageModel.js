
import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true }, 
    location: { type: String, required: true },
    available: { type: Boolean, default: true }
});

const Package = mongoose.model('Package', packageSchema);

export default Package;
