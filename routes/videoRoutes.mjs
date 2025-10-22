import { Router } from "express";
import dotenv from 'dotenv';
import Videos from "../models/videoSchema.mjs";

const router = Router();
dotenv.config();

// TEST
// @route: GET /api/videos
// @desc: Test Route
// @access: Public
// router
//     .route("/")
//     .get((req, res) => {
//         res.send("Videos Test")
//     });


// READ: SEARCH -------------------
// @route: GET /api/videos/search
// @desc: Search Videos by Title Query
// @access: Public
router
.route("/search")
.get(async (req, res) => {
    try {
        const { q } = req.query; // Get the search term from the query parameter 'q'

        if (!q) {
            return res.status(400).json({ msg: "Search query 'q' is required" });
        }

        // Case-insensitive search ONLY on the 'title' field
        const videos = await Videos.find({
            title: { $regex: q, $options: 'i' }
        }).limit(10); // Limit results for performance

        res.json(videos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// CREATE-----------------------
// @route: POST /api/videos
// @desc: POST Route
// @access: Public
router
.route("/")
.post(async (req, res) => {
    let newVideo = await Videos.create(req.body);
    res.json(newVideo);

})

// READ-----------------------
// @route: GET /api/videos
// @desc: GET All Videos Route
// @access: Public
.get(async (req, res) => {
    let getVideos = await Videos.find({});
    res.json(getVideos);
});

// @route: GET /api/videos/:id
// @desc: GET Video by id
// @access: Public
router
.route("/:id")
.get(async (req, res) => {
    let video = await Videos.findById(req.params.id);
    if (!video) {
            return res.status(404).json({ msg: "Video not found" });
    }
    res.json(video);
});




// UPDATE------------------
// @route: PUT /api/videos/:id
// @desc: Update Single Video by ID Route (UPDATE)
// @access: Public
router
.route("/:id")
.put(async (req, res) => {
    let updateVideo = await Videos.findByIdAndUpdate(req.params.id, req.body, 
        {new: true}
    );
    res.json(updateVideo);
})

// DELETE ---------------------
// @route: DELETE /api/videos/:id
// @desc: Delete Single Video by ID Route (DELETE)
// @access: Public
.delete(async (req, res) => {
    let deletedVideo = await Videos.findByIdAndDelete(req.params.id);

    if (!deletedVideo){
        res.json({ msg: "err doesnt exist" });
    }else {
        res.json(deletedAvian);
    }
});



export default router;