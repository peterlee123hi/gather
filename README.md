# Gather
Platform for students to find classmates and organize study groups.

## File Structure
| File                                  | Purpose                                             |
|---------------------------------------|-----------------------------------------------------|
| client/head.html                      | Contains HTML header.                               |
| client/main.css                       | Imports CSS files.                                  |
| client/main.js                        | Client entry point.                                 |
| server/main.js                        | Server entry point.                                 |
| import/startup/client/index.js        | Imports client code.                                |
| import/startup/client/routes.js       | Configures URL routes.                              |
| import/startup/server/index.js        | Imports server code.                                |
| import/startup/server/register-api.js | Imports API code.                                   |
| import/startup/server/security.js     | Provides server security.                           |
| import/api/study-groups/...           | API collection of study group data.                 |
| import/ui/layouts/app-body...         | Layout for home page of logged in users.            |
| import/ui/layouts/login-body...       | Layout for login page.                              |
| import/ui/layouts/edit-body...        | Layout for new student additional information page. |
| import/ui/pages/edit-page...          | Edit my information page. (home layout)             |
| import/ui/pages/users-page...         | Display classmates page. (home layout)              |
| import/ui/pages/user-page...          | Display a single classmate page. (home layout)      |
| import/ui/pages/study-groups-page...  | Display my study groups page. (home layout)         |
| import/ui/pages/create-page...        | Create study group page. (home layout)              |