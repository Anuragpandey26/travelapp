import Package from '../models/packageModel.js';
export const getPackages = async (req, res) => {
    try {
        const { sortBy, order } = req.query;
        

        const sortOptions = {};
        if (sortBy) {
            sortOptions[sortBy] = order === 'desc' ? -1 : 1;
        }

        const packages = await Package.find().sort(sortOptions);
        res.json(packages);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};


export const bookPackage = (req, res) => {
    const packageId = req.params.id;

    res.json({ message: `Package ${packageId} booked successfully` });
};
