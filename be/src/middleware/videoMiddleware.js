const { body } = require("express-validator");

const validate = () => {
    return [
        body("title")
            .notEmpty()
            .withMessage("Title is required"),
        body("thumbnail")
            .notEmpty()
            .withMessage("Thumbnail is required"),
        body("embeddedUrl")
            .notEmpty()
            .withMessage("Embedded URL is required"),
    ];
}

module.exports = {
    validate,
}