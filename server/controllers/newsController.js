import fetch from "node-fetch";

const API_KEY = "01a6212535b44da88726239ec4b81844"; // Replace with your actual API key
const API_URL = `https://newsapi.org/v2/everything?q="Enactus India" OR "NGO" OR "social work"&apiKey=${API_KEY}`;

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
