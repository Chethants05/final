const Contact = require('./../models/contact');
const contactUsTemplate = require('../mail/templates/contactUsTemplate');
const mailSender = require('../utils/mailSender');
exports.contact = async(req, res) => {
    try {
        // extract data 
        const { firstname, lastname, email, message, phoneNo, countrycode } = req.body;

        if (!firstname || !lastname || !email || !message || !phoneNo || !countrycode) {
            return res.status(401).json({
                success: false,
                message: 'All fields are required..!'
            });
        }

        const createdContact = await Contact.create({
            firstname, lastname, email, message, phoneNo: countrycode+phoneNo
        });

        await mailSender(email, 'Thank You for Contacting Us!', contactUsTemplate(firstname, lastname));

        return res.status(200).json({
            success: true,
            message: 'Success!'
        });
    }
    catch(error) {
        console.log('Error while capturing enquiry');
        console.log(error)
        return res.status(401).json({
            success: false,
            error: error.message,
            messgae: 'Error while capturing enquiry , Please try again..!'
        })
    }
}