const JobPost = require("../../../DB/models/JobPost.model");

const ViewJobs = async (req, res) => {
    try {
        const jopPost = await JobPost.find({}).populate({ path: "createdBy", select: "email" });

        return res.status(200).json(jopPost);
    } catch (err) {
        return res.status(500).json({ message: "Something went wrong", error: err.message });
    }
};


const CreateJob = async (req, res) => {
    try {
        const id = req.params.id;
        const { CompanyName, jobTitle, jobType, country, city, area, salary, jobDescription, jobRequirements, requiredSkills, Document } = req.body;
        const newJopPost = await JobPost.create({
            createdBy: id,
            CompanyName,
            jobTitle,
            jobType,
            country,
            city,
            area,
            salary,
            jobDescription,
            jobRequirements,
            requiredSkills,
            Document
        });
        const jopPost = await JobPost.findById(newJopPost._id).populate({ path: "createdBy", select: "email" });
        return res.status(201).json({ massage: "file uploaded successfully", job: jopPost });

    } catch (err) {
        return res.status(401).json({ message: "something went wrong", err: err.message });
    }
}


module.exports = { ViewJobs, CreateJob };