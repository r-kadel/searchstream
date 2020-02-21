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

