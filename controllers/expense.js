const User = require('../model/expenses'); 

const AddUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ where: { email } });

        if (existingUser) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        const newUser = await User.create({
            name,
            email,
            password
        });
        res.status(201).json({ success: true, message: 'User signed up successfully', user: newUser });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error occurred' });
    }
};

module.exports = AddUser;
