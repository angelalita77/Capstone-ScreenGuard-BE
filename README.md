# 🛡️ ScreenGuard Backend API
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Description:
RESTful API backend for ScreenGuard - a parent-controlled YouTube video curation platform. This server handles video management.
Future Development: user authentication, and database operations.

### 📋 Overview
The ScreenGuard backend provides a secure API for managing approved YouTube videos and user accounts. It connects to MongoDB for data persistence and includes middleware for error handling, logging, and CORS support.<br>


## Link to my Front-End Repo
### [ScreenGuard Front-End](https://github.com/angelalita77/Capstone-ScreenGuard-FE)<br/><br/>

### ✨ Features
- RESTful API - Complete CRUD operations for video management
- MongoDB Integration - Persistent data storage with Mongoose ODM
- Video Search - Search approved videos by title with regex matching
- User Management - User registration and authentication routes
- `Validation` - Input validation using express-validator
- `Error Handling` - Global error handling middleware
- CORS Support - Cross-origin resource sharing enabled
- Database Seeding - Quick setup with sample data
- Request Logging - Track all incoming requests

### 🛠️ Tech Stack
- Runtime: Node.js
- Framework: Express.js 5.1.0
- Database: MongoDB with Mongoose 8.19.2
- Validation: express-validator 7.2.1
- Environment: dotenv 17.2.3
- CORS: cors 2.8.5
- Dev Tools: nodemon 3.1.10

### ⚙️ Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm

## 📁 Project Structure
```
screenguard_be/
├── db/
│   └── conn.mjs              # MongoDB connection configuration
├── middleware/
│   └── middleware.mjs        # Global error handler & logging
├── models/
│   ├── userSchema.mjs        # User data model
│   └── videoSchema.mjs       # Video data model
├── routes/
│   ├── authRoutes.mjs        # Authentication routes (in development)
│   ├── userRoutes.mjs        # User registration routes (in development)
│   └── videoRoutes.mjs       # Video CRUD routes
├── data/
│   └── videoSnippets.mjs     # Seed data for videos
├── .env                      # Environment variables (not committed)
├── server.mjs                # Main server file
└── package.json
```

# Video Model
```js
{
  videoId: String (required) // YouTube video ID
  title: String (required)
  description: String (optional, defaults to "")
  thumbnail: [String] (required) // Array of thumbnail URLs
  channel: String (required) // Channel name
  timestamp: Boolean (auto-generated)
}
```

## 🔌 API Endpoints

### Videos
- **GET** `/api/videos` - Get all approved videos *(Public)*
- **GET** `/api/videos/:id` - Get single video by ID *(Public)*
- **GET** `/api/videos/search?q=query` - Search videos by title *(Public)*
- **POST** `/api/videos` - Add new video *(Public)*
- **PUT** `/api/videos/:id` - Update video by ID *(Public)*
- **DELETE** `/api/videos/:id` - Delete video by ID *(Public)*
- **GET** `/api/videos/seed` - Seed database with sample data *(Public)*



### Example of the Youtube API snippet
```js
{
    videoId: "Fwv2gnCFDOc",
    title: "Nujabes - Luv(sic.) pt3 (feat. Shing02) [Official Audio]",
    description: "Nujabes - Luv(sic.) pt3 (feat. Shing02) from Modal Soul. All rights belong to Hydeout Productions.",
    thumbnail: [
      "https://i.ytimg.com/vi/Fwv2gnCFDOc/hqdefault.jpg",
      "https://i.ytimg.com/vi/Fwv2gnCFDOc/mqdefault.jpg",
      "https://i.ytimg.com/vi/Fwv2gnCFDOc/sddefault.jpg"
    ],
    channel: "Nujabes"
  }

```

🚧 Future Enhancements
 - Complete authentication system (JWT tokens)
 - Password hashing with bcrypt
 - Parent-child account relationships
 - Video approval workflow
 - Rate limiting middleware
 - Request validation on all routes
 - Video view tracking
 - API documentation
 - Unit and integration tests



### 📦 Installation

*Clone the repository*<br>
`git clone <your-repo-url>`<br>
`cd screenguard_be`

*Install dependencies*<br>
`npm install`

*Create a .env file in the root directory*<br>
`envPORT=3000`<br>
`mongoURI=your_mongodb_connection_string`

*Start MongoDB*

*Start the development server*<br>
`npm run dev` <br>
The server will run on http://localhost:3000 (or your specified PORT)

## Contributing
## This is a Perscholas Capstone
Version 1.0, 08/14/23

## Introduction
This document will remind you of the requirements of the course Capstone Project (CP), and give you final tasks to work towards for its completion.
Capstone Objective
Create a full-stack web application using MongoDB, Express, React, and Node (MERN).

#### License
All Rights Reserved

#### Author
Created with ❤️ for parents who want safer YouTube experiences for their children.

## 🙏 Acknowledgments
Perscholas Instructor: https://github.com/comeaudc <br>
Perscholas Assitant Instructor: https://github.com/NConstance <br>
YouTube Data API for video search functionality <br>
React community for excellent documentation and tools <br>



## References
[YouTube API Reference](https://developers.google.com/youtube/v3/docs/?apix=true) <br>
Models Documentation - https://mongoosejs.com/docs/models.html
