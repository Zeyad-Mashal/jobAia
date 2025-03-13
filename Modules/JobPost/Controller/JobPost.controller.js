const JobPost = require("../../../DB/models/JobPost.model");

const ViewJobs =  async (req, res) => {
    try {
        const jopPost = await JobPost.find({}).populate({path:"createdBy", select: "email"});

        return res.status(200).json(jopPost);
    } catch (err) {
        return res.status(500).json({ message: "Something went wrong", error: err.message });
    }
};


const CreateJob =  async (req, res) => {
    try{
        const id = req.params.id;
        const {CompanyName , jobTitle , jobType , country , city , area , salary , jobDescription , jobRequirements , requiredSkills } = req.body;
        if(!req.file){
            return res.status(201).send("file not uploaded");
        }
        const newJopPost = await JobPost.create({
            createdBy: id,
            CompanyName, 
            jobTitle ,
            jobType ,
            country , 
            city , 
            area , 
            salary , 
            jobDescription , 
            jobRequirements , 
            requiredSkills , 
            Document :{
            data: req.file.buffer,
            contentType: req.file.mimetype,
            }
        });
        const jopPost  = await JobPost.findById(newJopPost._id).populate({path:"createdBy", select: "email"});
        return res.status(201).json({massage: "file uploaded successfully", job: jopPost , file:{fileName: req.file.filename , path: req.file.path, size: req.file.size}});

    }catch(err){
        return res.status(401).json({ message: "something went wrong", err: err.message });
    }
}


module.exports = { ViewJobs, CreateJob };