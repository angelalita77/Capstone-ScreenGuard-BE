import { Router } from "express";
import dotenv from 'dotenv';

const router = Router();
dotenv.config();


// READ: SEARCH -------------------
// @route: GET /api/videos/search
// @desc: Search Videos by Title Query
// @access: Public
router
.route("/search")
.get(async(req, res) => {
    try{
        const {q} = req.query;

        if(!q){
            return res.status(400).json({
                msg: "Query is requred"
            })
        }

        const url = new URL("https://www.googleapis.com/youtube/v3/search");

        url.search = new URLSearchParams({
            part: "snippet",
            q,
            type: "video",
            maxResults: 3,
            key: process.env.GOOGLE_API_KEY
        });
        const response = await fetch(url);
        const data = await response.json();
        
        const videos = data.items?.filter(
            (item) => item.id.kind === "youtube#video"
        );

        res.json({ videos });

    } catch (err) {
        console.error("Error fetching YouTube data:", err);
        res.status(500).json({ msg: err.message})
    }

});

export default router;