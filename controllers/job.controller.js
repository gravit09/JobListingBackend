import { Job } from "../models/job.models.js";

//To List an Job
const listJobHandler = async (req, res) => {
  try {
    const data = req.body;

    const newJob = await Job.create(data);

    return res.status(201).json({
      message: "Job listed successfully",
      job: newJob,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      message: "Something went wrong while listing the job",
      error: err.message,
    });
  }
};

//To get all the Jobs
const getAllJobHandler = async (req, res) => {
  try {
    const allJobs = await Job.find();

    if (!allJobs) {
      return res.status(200).json("No Job Listed Yet");
    }

    return res.status(200).json({
      message: "job Fetch succesfull",
      allJobs,
    });
  } catch (err) {
    return res.status(500).json("Something went wrong while fetching Jobs");
  }
};

export { listJobHandler, getAllJobHandler };
