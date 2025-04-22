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
        // استخراج رقم الصفحة من استعلام الـ URL (أو استخدام 1 كقيمة افتراضية)
        let page = parseInt(req.query.page) || 1;
        let limit = 10; // تعيين حد ثابت للـ limit

        // استدعاء دالة paginate من السكيمة
        const result = await JobPost.paginate(page, limit);

        // إرجاع البيانات مع تفاصيل التمرير (pagination)
        return res.status(200).json({
            success: true,
            count: result.jobs.length,  // عدد العناصر في الصفحة
            data: result.jobs,  // البيانات نفسها
            pagination: {
                currentPage: result.currentPage,
                totalPages: result.totalPages,
                totalJobs: result.totalJobs,
                hasNextPage: result.hasNextPage,
                hasPrevPage: result.hasPrevPage
            }
        });
    } catch (e) {
        console.error("Error while fetching paginated job posts:", e);  // تسجيل الخطأ في السيرفر
        return res.status(500).json({
            success: false,
            message: "Service unavailable",
            error: e.message // إرجاع رسالة الخطأ
        });
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

const getJobById = async (req, res) => {
    try {
        const id = req.params.id;
        const job = await JobPost.findById(id).populate({ path: "createdBy", select: "email" });
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        return res.status(200).json(job);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong", error: error.message });
    }
}

const newestJobs = async (req, res) => {
    try {
        const jobs = await JobPost.find().sort({ createdAt: -1 }).limit(8).populate({ path: "createdBy", select: "email" });
        return res.status(200).json(jobs);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong", error: error.message });
    }
}


module.exports = { ViewJobs, CreateJob, ViewPaginatedJobs, getJobById, newestJobs };