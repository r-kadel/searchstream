## SearchStream - Content Search by platform

### Available at https://searchstream.r-kadel.now.sh/
### Back end repo is available at https://github.com/r-kadel/searchstream-api


Tired of searching through hundreds of videos through your tens of video streaming services? SearchStream was designed for you to quickly locate the content you want, withought all the clutter and wasted time in a traditional google search.

![ScreenShot](./public/screenshots/searchstream_landing.png)
![ScreenShot](./public/screenshots/searchstream.png)
![ScreenShot](./public/screenshots/searchstream_search.png)

A user logs in to their account and is immediately able to search for any TV show or movie they can think of. If we can't find it we will let you know, otherwise you get a list of possible streaming service providers that you can use to watch your favorite movies or shows!

This is a full stack web application that uses React and custom vanilla CSS on the front end to deliver a fast and accessible user experience.
On the back end node.js using an express server handle the routing and API and and a postgresql database stores the users log in information. 
JWT is used to authenticate and validate users to ensure the security of our users personal information.

The API is powered by Heroku and is set up to take POST requests from the client and validate them against the user data stored in the postgresql database. If the request is sucessful and validated by the server a JWT token is sent to the client allowing them to access the main app and the search endpoint. 

The API is built in node.js and is an express server. It uses knex to work with the postgresql database. bcryptjs is used to hash passwords and compare them on certain requests for user protection, and jsonwebtoken is used for authentication on the client end.


### API End Points Docs

## /api/search/:searchterm
  The search end point recieves a get request from the client with the term to search for included in the end point url, that term is then used to make another request to the utelly API and return the results back to the client

  inputs
```
  method: 'GET',
    url:
      'https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup',
    headers: {
      'content-type': 'application/octet-stream',
      'x-rapidapi-host':
        'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com',
      'x-rapidapi-key': API_KEY
    },
    params: {
      term: searchTerm,
      country: [two character country code]
    }
```
    outputs a json response(200) which is sent to the client to be stored as an array of movie/show objects

  /api/auth

  This is the authentication route with only one endpoint, a user post request with credentials that are validated against the username and password stored on the server. If sucessful the server sends a 200 response code and a JWT to the client to validate access to the search endpoint
  
    post('/login')
        validates that the request has both a username and password sent in body
        then uses the bcryptjs compare functionality to compare the encrypted password stored on the database

        if the passwords match a JWT is created and returned to the client for access to the search end point 

        valid auth/login post example headers and body would look like:
              headers: {
                "Content-Type": "application/json",
                "Authorization": "bearer TOKEN_KEY"
              },
              body: {
                      "username": "user",
                      "password": "password"
              }


  /api/users

  The users end point is used internally to set up, edit, and get data from the database and is not for public use. It allows for adding users to the database, editing their information, deleting or viewing all of the stored users

  /api/users

   .route('/')
    .get('returns all users in the database)

    .post 
      requires a username password and email, verifies them, and then checks to make sure that the username isnt taken, encrypts the password with bcrypt.js and stores it to the database and returns(201)

      headers required include the bearer token and the content type
      example: 
      {
        "Content-Type": "application/json",
        "Authorization": "bearer sometoken"
      }
      example post request body would  look like 
      {
	      "username": "admin",
	      "password": "1234",
	      "email": "cooldood@hotmail.com"
      }

  /api/users/:userId
  
    .route('/:user_id')
        .get(id) 
          gets the data for the user with the specified id from the requested ID in the endpoint and returns it

        .delete('/:userId') 
          deletes the user with the specified id from the requested ID in the endpoint
          and returns (204)

        .patch('/userId') 
          requires atleast the username, password or email of the user and if valid updates the field in the database and returns (204)
        example request:
        .patch('/5')
            {
	            "email": "newEmail@hotmail.com"
            }
          