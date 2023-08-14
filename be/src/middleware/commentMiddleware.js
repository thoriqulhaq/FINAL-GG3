const { body } = require("express-validator");

const validate = () => {
    return [
        body("videoId")
            .notEmpty()
            .withMessage("videoId is required"),
        body("username")
            .notEmpty()
            .withMessage("Username is required"),
        body("message")
            .notEmpty()
            .withMessage("Message is required"),
    ];
}

module.exports = {
    validate,
}