# ScreenGuard - BackEnd
### Description:
ScreenGuard is a web application designed to help parents curate safe YouTube content for their children. Due to time constraints, the current implementation focuses on core video management functionality without full authentication.

## Link to my Front-End Repo
### [ScreenGuard Front-End](https://github.com/angelalita77/Capstone-ScreenGuard-FE)<br/><br/>


## Technologies Used:
- Runtime: Node.js with ES Modules
- Framework: Express.js
- Database: MongoDB with Mongoose ODM

### Key Dependencies:
- cors - Cross-Origin Resource Sharing
- dotenv - Environment variable management
- express-validator - Input validation


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
```json
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
