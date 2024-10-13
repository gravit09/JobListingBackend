import { Job } from "../models/job.models.js";
import { z } from "zod";
import { Organization } from "../models/org.models.js";

//Data validation
const jobSchema = z.object({
  title: z.string().min(1, "Title is required"),
  organization: z.string().min(1, "Organization ID is required"),
  location: z.string().optional().default("Remote"),
  requirements: z.object({
    experience: z.string().min(1, "Experience is required"),
    skills: z.array(z.string()).nonempty("Skills are required"),
    qualifications: z.string().min(1, "Qualifications are required"),
  }),
  responsibilities: z
    .array(z.string())
    .nonempty("Responsibilities are required"),
  applyLink: z.string().url("Invalid URL format for apply link"),
  createdAt: z.string().datetime(),
});

const listJobHandler = async (req, res) => {
  try {
    const data = req.body;
    const isValidData = jobSchema.safeParse(data);
    if (!isValidData.success) {
      return res.status(401).json({
        error: "Invalid Data Sent",
        details: isValidData.error.errors,
      });
    }
    const newJob = await Job.create(isValidData.data);

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

const getOrgJobListings = async (req, res) => {
  const orgId = req.query.orgId.trim();
  try {
    const jobsListedByThisOrg = await Job.find({ organization: orgId });
    if (jobsListedByThisOrg.length === 0) {
      return res.status(200).json({
        message: "No job is currently listed by this organization.",
        jobsListedByThisOrg,
      });
    }
    return res.status(200).json({
      message: "All jobs fetched successfully.",
      jobsListedByThisOrg,
    });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Something went wrong while fetching jobs." });
  }
};

export { listJobHandler, getAllJobHandler, getOrgJobListings };
