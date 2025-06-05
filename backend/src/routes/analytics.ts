import express from "express";
import { getAnalyticsData } from "../controllers/analyticsController";

export const analyticsRoutes = express.Router();

// Get analytics data with optional AI-powered query
analyticsRoutes.get("/", getAnalyticsData);
