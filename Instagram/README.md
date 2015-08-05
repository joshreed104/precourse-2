#Instagram Clone Challenge!

Today you're going to be building Instagram, one of the top 5 most popular apps in the world. Instagram reached 100m users in 1 year with just 13 engineers and now presents billions of pictures a day

You are going to bulid Instagram in 3 days (recommended)

This will test:

- HTML
- CSS
- JavaScript (for dynamic features)

##You will build

#### A User Login page

![](https://www.dropbox.com/s/792mx2tz0k5sset/Screenshot%202015-05-26%2019.18.54_shrink.png?dl=1)

###### The User Login Page should:

- let a user login (not include server-side authentication)
- use javascript to check that the user's username and password *matches* some pre-approved usernames and passwords
- send the user to the user's feed once they've entered a correct username and password
- use CSS and HTML to achieve a consistent Instagram style

#### A User Feed page

![](https://www.dropbox.com/s/gs2fn45pjl6z0v0/instagram-feed_shrink.png?dl=1)

###### The User Feed Page should:

- display all the users pictures from their feed (to access these pictures you'll need to make a GET request)
  - Look at these links for more information on making GET request: ["jQuery"](http://www.w3schools.com/jquery/jquery_ajax_intro.asp) and ["AJAX"](http://www.w3schools.com/jquery/jquery_ajax_get_post.asp)
- should have a header with your user information (profile picture and name)
- should have the ability to like a picture by double clicking on it
- should have the ability to comment on a picture
- use CSS and HTML to achieve a consistent Instagram style

#### Do's And Don'ts

We will only be modifying the "client" folder. There are two files already set up for you inside the "client" folder: "index.html" and "feed.html". Your work for the login page should be done in "index.html" and work for the feed page should be done in "feed.html". You may write your CSS and Javascript codes inside the html files or you may create separate files and link them to the html files. You can also create and add more files if you need to. DO NOT modify any other files or folders. You can take a look at the original instagram page for structural information.

## DOM

For this challenge, you will need to perform DOM Manipulation. The following links will provide you with a better idea about the document object model.

#### Read
- <http://www.w3schools.com/js/js_htmldom.asp>
- <http://callmenick.com/post/basics-javascript-dom-manipulation>

## Some Gotchas To Look Out For

- Beware CORS
  - <http://www.html5rocks.com/en/tutorials/cors/>
  - <https://www.youtube.com/watch?v=rlnhiwN8AnU>
- Adding click handlers to dynamically added content
  - <http://stackoverflow.com/questions/203198/event-binding-on-dynamically-created-elements>
