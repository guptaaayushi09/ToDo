const UserServices = require('../services/user.services');
exports.register = async (req, res, next) => {

    try {
        const { email, password } = req.body;
        const successrate = await UserServices.registerUser(email, password);
        res.json({ status: true, success: "User Registration Successfully" });
    }
    catch (error) {
        throw error;
    }

}