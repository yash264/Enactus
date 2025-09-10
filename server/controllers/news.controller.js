import fetch from "node-fetch";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const API_URL = `https://newsapi.org/v2/everything?q="Enactus India" OR "NGO" OR "social work"&apiKey=${process.env.API_KEY}`;


export const fetchNews = async (req, res) => {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            return res.status(200).json("Failed to fetch news");
        }
        const data = await response.json();

        return res.status(200).json({
            success: true,
            message: data,
        });
    } catch (error) {
        console.log(error);
    }
};
