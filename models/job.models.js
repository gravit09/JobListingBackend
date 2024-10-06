import mongoose from "mongoose";

const jobListingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    founded: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    industry: {
      type: String,
      required: true,
    },
    sector: {
      type: String,
      required: true,
    },
    revenue: {
      type: String,
      required: true,
    },
  },
  location: {
    type: String,
    required: true,
    default: "Remote",
  },
  requirements: {
    experience: {
      type: String,
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    qualifications: {
      type: String,
      required: true,
    },
  },
  responsibilities: {
    type: [String],
    required: true,
  },
  applyLink: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Job = mongoose.model("Job", jobListingSchema);
