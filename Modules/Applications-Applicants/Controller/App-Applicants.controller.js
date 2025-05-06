
const Application = require("../../../DB/models/Application.model");


const ViewApplication = async (req, res) => {
    try {
        const applications = await Application.find();
        return res.status(200).json(applications);
    } catch (err) {
        return res.status(500).json({ message: "Something went wrong", error: err.message });
    }
}

const CreateApplication = async (req, res) => {
    try {
        const userId = req.params.userId;
        const JobId = req.params.JobId;
        const { firstName,
            lastName,
            mandatoryAddress,
            optionalAddress,
            city,
            state,
            zipCode,
            phoneNabmer,
            alternateNumber,
            jobNeeded,
            otherJob,
            WorkingPeriod,
            workedUs,
            workedUsWhen_month,
            workedUsWhen_day,
            workedUsWhen_year,
            CV } = req.body;

        const newApplication = await Application.create({
            createdBy: userId,
            createdFor: JobId,
            firstName,
            lastName,
            mandatoryAddress,
            optionalAddress,
            city,
            state,
            zipCode,
            phoneNabmer,
            alternateNumber,
            jobNeeded,
            otherJob,
            WorkingPeriod,
            workedUs,
            workedUsWhen_month,
            workedUsWhen_day,
            workedUsWhen_year,
            CV
        });
        const applications = await Application.findById(JobId).populate([{ path: "createdBy", select: "_id" }, { path: "createdFor", select: "_id" }]);
        return res.status(201).json({ massage: "file uploaded successfully", Data: newApplication });
    } catch (err) {
        return res.status(401).json({ message: "something went wrong", err: err.message });
    }
}

// ================= get user applications using createdBy => hussien =================  
const getUserApplications = async (req, res) => {
    try {
        const id = req.params.id
        if (!id) {
            return res.status(400).json({ message: "Please provide the user ID" })
        }


        const applications = await Application.find({ createdBy: id })

        if (!applications || applications.length === 0) {
            return res.status(404).json({ message: "No applications found for this user" })
        }

        return res.status(200).json({
            apiStatus: true,
            data: applications,
            message: "Applications retrieved successfully"

        });
    } catch (e) {
        return res.status(500).json({ apiStatus: false, data: e.message, message: "Something went wrong" })
    }
}

// ================= get applicants createdFor => hussien =================  

const getUserApplicants = async (req, res) => {
    try {
        const jobPostId = req.params.jobPostId; // Use the correct parameter name
        if (!jobPostId) {
            return res.status(400).json({ message: "Please provide the job post ID" });
        }

        const applicants = await Application.find({ createdFor: jobPostId });

        if (!applicants || applicants.length === 0) {
            return res.status(404).json({ message: "No applications found for this job post" });
        }

        return res.status(200).json({
            apiStatus: true,
            data: applicants,
            message: "Applications retrieved successfully",
        });
    } catch (e) {
        return res.status(500).json({ apiStatus: false, data: e.message, message: "Something went wrong" });
    }
};




module.exports = {
    ViewApplication,
    CreateApplication,
    getUserApplicants,
    getUserApplications
}


