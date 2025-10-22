# Capstone Completion
Version 1.0, 08/14/23
Click here to open in a separate window.

## Introduction
This document will remind you of the requirements of the course Capstone Project (CP), and give you final tasks to work towards for its completion.
Capstone Objective
Create a full-stack web application using MongoDB, Express, React, and Node (MERN).



🧾 Project Requirements Checklist
| Task Description                                                                           | Status | Notes |
| ------------------------------------------------------------------------------------------ | ------ | ----- |
| Project is organized into appropriate files and directories, following best practices      | [ ]    | 2%    |
| Project contains an appropriate level of comments                                          | [ ]    | 2%    |
| Project is pushed to GitHub and contains a README file with an overall project description | [ ]    | 5%    |
| Standard naming conventions are used throughout the project                                | [ ]    | 2%    |
| Ensure the program runs without errors (if not, explain blockers)                          | [ ]    | 4%    |
| Display a strong level of effort in creativity, presentation, and user experience          | [ ]    | 5%    |


💛 Core JavaScript (12%)
| Task Description                                         | Status | Notes |
| -------------------------------------------------------- | ------ | ----- |
| Demonstrate proper usage of ES6 syntax and tools         | [ ]    | 2%    |
| Use functions and classes to adhere to the DRY principle | [ ]    | 2%    |
| Use Promises and async/await where appropriate           | [ ]    | 2%    |
| Use Axios or Fetch to retrieve data from an API          | [ ]    | 2%    |
| Use sound programming logic throughout the application   | [ ]    | 2%    |
| Use appropriate exception handling                       | [ ]    | 2%    |

🗄️ Database (9%)
| Task Description                                                                  | Status | Notes |
| --------------------------------------------------------------------------------- | ------ | ----- |
| Use MongoDB to create a database for your application                             | `🟡`     | 5%    |
| Apply appropriate indexes to your database collections                            | `🟡`     | 2%    |
| Create reasonable schemas for your data by following data modeling best practices | `🟡`    | 2%    |


🧾 Project Requirements Checklist
🖥️ Server (19%)
| Task Description                                                                      | Status | Notes |
| ------------------------------------------------------------------------------------- | ------ | ----- |
| Create a RESTful API using Node and Express *(HATEOAS may be omitted)*                | [ ]    | 7%    |
| Include API routes for all four CRUD operations                                       | [ ]    | 5%    |
| Utilize the native MongoDB driver or Mongoose to interface with your database         | [ ]    | 5%    |
| Include at least one form of user authentication/authorization within the application | [ ]    | 2%    |

💻 Front-End Development (35%)
| Task Description                                                          | Status | Notes |
| ------------------------------------------------------------------------- | ------ | ----- |
| Use React to create the application’s front-end                           | [ ]    | 10%   |
| Use CSS to style the application                                          | [ ]    | 5%    |
| Create at least four different views or pages for the application         | [ ]    | 5%    |
| Create navigation included across pages (React Router for page rendering) | [ ]    | 5%    |
| Use React Hooks or Redux for application state management                 | [ ]    | 5%    |
| Interface directly with the server and API that you created               | [ ]    | 5%    |

🎤 Presentation (6%)
| Task Description                                                      | Status | Notes |
| --------------------------------------------------------------------- | ------ | ----- |
| Create a short overview of your application                           | [ ]    | 1%    |
| Highlight the use cases of your application                           | [ ]    | 1%    |
| Highlight the technical functionality of the application (high-level) | [ ]    | 1%    |
| Discuss what you have learned through development                     | [ ]    | 1%    |
| Discuss additional features that could be added in the future         | [ ]    | 1%    |


| Meaning                 | Emoji | Markdown Example |
| ----------------------- | ----- | ---------------- |
| Complete / Done         | ✅     | `✅`              |
| In Progress             | 🟡    | `🟡`             |
| Not Started / Pending   | ⬜     | `⬜`              |
| Blocked / Issue Found   | ❌     | `❌`              |
| Needs Review            | 🔍    | `🔍`             |
| Optional / Nice to Have | ✴️    | `✴️`             |


# Schemas
```js
const userSchema {
_id
Username: String,
isParent: boolean,
child: String {
[ account, account, …]
},
}

const videoSchema {
title: String,
*playlist: [],
*watched: boolean,
*viewed: boolean,
url: String,
userId: String
}
```

## References
Models Documentation - https://mongoosejs.com/docs/models.html
