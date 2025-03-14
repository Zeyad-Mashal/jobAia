const JobPost = require("../../../DB/models/JobPost.model");

const ViewJobs = async (req, res) => {
    try {
        const jopPost = await JobPost.find({}).populate({ path: "createdBy", select: "email" });

        return res.status(200).json(jopPost);
    } catch (err) {
        return res.status(500).json({ message: "Something went wrong", error: err.message });
    }
};

const ViewPaginatedJobs = async (req, res) => {
    try {


        const page = parseInt(req.query.page) || 1;


        const limit = 10;


        const result = await JobPost.paginate(page, limit);
        if (page === result.totalPages) {
            return res.status(200).json({
                success: true,
                count: result.jobs.length,
                data: result.jobs,
                pagination: {
                    currentPage: result.currentPage,
                    totalPages: result.totalPages,
                    totalJobs: result.totalJobs,
                    hasNextPage: result.hasNextPage,
                    hasPrevPage: result.hasPrevPage
                }
            });
        }
        else {
            return res.status(404).send({ success: false, data: "There is no more pages" })
        }


    }
    catch (e) {
        res.status(500).send({ success: false, data: e.message, message: "service unavalibale" });
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


module.exports = { ViewJobs, CreateJob, ViewPaginatedJobs };