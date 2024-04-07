const userService = require('../service/user-service');

exports.registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        await userService.registerUser({ username, password });
        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const token = await userService.loginUser(username, password);
        res.status(200).send({ token });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};
