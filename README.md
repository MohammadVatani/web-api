### my first web-API BACKEND project.

### web-api routes

#### Routes
```
- /api/comments/:id ---> comments of article. can use by articleId
- /api/posts ---> CRUD on posts
- /api/posts/:id ---> single post by articleId
- /api/images/(image-address) ---> CRUD images by path
- /api/users/profile/:id ---> all data related to profile. get data by userId
- /api/users/profileSetting/:id ---> all data in setting page. can use by userId
- /api/users/savedMessages/:id ---> bookmarks. can use by userId
```
#### QueryString
```
- limit: set limit for results
- offset: set offset to return data from i'th result
- userid: used just in posts to return posts from specific userid
```
