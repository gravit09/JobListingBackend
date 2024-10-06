import { Job } from "../models/job.models.js";

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

export { listJobHandler };
