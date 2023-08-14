const { body } = require("express-validator");

const validate = () => {
    return [
        body("videoId")
            .notEmpty()
            .withMessage("videoId is required"),
        body("name")
            .notEmpty()
            .withMessage("Name is required"),
        body("price")
            .notEmpty()
            .withMessage("Price is required"),
        body("link")
            .notEmpty()
            .withMessage("Link is required"),
    ];
}

module.exports = {
    validate,
}