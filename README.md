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

## Routes

## User Routes (Second if possible)
`POST /api/auth/register/` - Register parent account <br>
    - be able to add account <br>
    - see if user exist if it doesn't create new user <br>
`POST /api/auth/login` - Login <br>
`GET /api/videos/search?` - Search YouTube <br>
<!-- `POST /api/children` - Create child account(For Future Upgrade)<br> -->

## Video Routes (First)
`POST /api/videos` - Add video to playlist <br>
`GET /api/videos/child/` - Get approved videos <br>
`DELETE /api/videos/:videoId` - Remove video <br>
`PUT /api/videos/:videoId`- Update approved videos titles <br>
<!-- `GET /api/videos/child/:childId` - Get approved videos (For Future Upgrade)<br> -->
<!-- `PATCH /api/children/:childId` - Update child info (For Future Upgrade)<br> -->




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


🧾 Project Requirements Checklist
| Task Description                                                                           | Status | Notes |
| ------------------------------------------------------------------------------------------ | ------ | ----- |
| Project is organized into appropriate files and directories, following best practices      | `✅`    | 2%    |
| Project contains an appropriate level of comments                                          | `✅`    | 2%    |
| Project is pushed to GitHub and contains a README file with an overall project description | `✅`    | 5%    |
| Standard naming conventions are used throughout the project                                | `✅`    | 2%    |
| Ensure the program runs without errors (if not, explain blockers)                          | `🟡`    | 4%    |
| Display a strong level of effort in creativity, presentation, and user experience          | `🟡`    | 5%    |


💛 Core JavaScript (12%)
| Task Description                                         | Status | Notes |
| -------------------------------------------------------- | ------ | ----- |
| Demonstrate proper usage of ES6 syntax and tools         | ✅`    | 2%    |
| Use functions and classes to adhere to the DRY principle | ✅`    | 2%    |
| Use Promises and async/await where appropriate           | ✅`    | 2%    |
| Use Axios or Fetch to retrieve data from an API          | ✅`    | 2%    |
| Use sound programming logic throughout the application   | ✅`    | 2%    |
| Use appropriate exception handling                       | ✅`    | 2%    |

🗄️ Database (9%)
| Task Description                                                                  | Status | Notes |
| --------------------------------------------------------------------------------- | ------ | ----- |
| Use MongoDB to create a database for your application                             | `✅`     | 5%    |
| Apply appropriate indexes to your database collections                            | `✅`     | 2%    |
| Create reasonable schemas for your data by following data modeling best practices | `✅`    | 2%    |


🧾 Project Requirements Checklist
🖥️ Server (19%)
| Task Description                                                                      | Status | Notes |
| ------------------------------------------------------------------------------------- | ------ | ----- |
| Create a RESTful API using Node and Express *(HATEOAS may be omitted)*                | ✅`      | 7%    |
| Include API routes for all four CRUD operations                                       | ✅`      | 5%    |
| Utilize the native MongoDB driver or Mongoose to interface with your database         | ✅`      | 5%    |
| Include at least one form of user authentication/authorization within the application | `✴️`      | 2%    |

💻 Front-End Development (35%)
| Task Description                                                          | Status | Notes |
| ------------------------------------------------------------------------- | ------ | ----- |
| Use React to create the application’s front-end                           | ✅`    | 10%   |
| Use CSS to style the application                                          | ✅`    | 5%    |
| Create at least four different views or pages for the application         | ✅`    | 5%    |
| Create navigation included across pages (React Router for page rendering) | ✅`    | 5%    |
| Use React Hooks or Redux for application state management                 | ✅`    | 5%    |
| Interface directly with the server and API that you created               | ✅`    | 5%    |

🎤 Presentation (6%)
| Task Description                                                      | Status | Notes |
| --------------------------------------------------------------------- | ------ | ----- |
| Create a short overview of your application                           | `🟡`    | 1%    |
| Highlight the use cases of your application                           | `🟡`    | 1%    |
| Highlight the technical functionality of the application (high-level) | `🟡`    | 1%    |
| Discuss what you have learned through development                     | `🟡`    | 1%    |
| Discuss additional features that could be added in the future         | `🟡`    | 1%    |


| Meaning                 | Emoji | Markdown Example |
| ----------------------- | ----- | ---------------- |
| Complete / Done         | ✅     | `✅`              |
| In Progress             | 🟡    | `🟡`             |
| Not Started / Pending   | ⬜     | `⬜`              |
| Blocked / Issue Found   | ❌     | `❌`              |
| Needs Review            | 🔍    | `🔍`             |
| Optional / Nice to Have | ✴️    | `✴️`             |




## Capstone Completion
Version 1.0, 08/14/23
Click here to open in a separate window.

## Assignment Introduction
This document will remind you of the requirements of the course Capstone Project (CP), and give you final tasks to work towards for its completion.
Capstone Objective
Create a full-stack web application using MongoDB, Express, React, and Node (MERN).


## References
Models Documentation - https://mongoosejs.com/docs/models.html