import express from "express";
import { fetchNews } from "../controllers/newsController.js";

const router = express.Router();

router.get('/fetchNews',fetchNews);

export default router;
