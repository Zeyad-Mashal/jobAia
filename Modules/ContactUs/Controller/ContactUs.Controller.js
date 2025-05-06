const ContactUs = require("../../../DB/models/ContactUs.models")

exports.creatContact = async (req, res) => {
    try {
        const { FirtsName, LastName, Email, Message } = req.body;
        const newContact = await ContactUs.create({
            FirtsName,
            LastName,
            Message,
            Email,
        });
        res.status(201).json({
            Message: " Messeage Sent Successfully!!",
            Date: newContact,
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

exports.getAllContacts = async (req, res) => {

    try {
        const contacts = await ContactUs.find();
        res.status(200).json(contacts);

    }
    catch (error) {
        res.status(500).json({
            error: 'Sorry there was an error while sending the message!'
        });
    }
}