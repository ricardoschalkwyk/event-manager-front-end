# HOW TO INSTALL

To use this app your must clone the app from the github repo.

Navigate to the repo on github and then press the green code button.

You can download it or you could use the github cli method and put it in your terminal.

To setup the app use one of these commands

## Setup= npm install \or\ yarn install

To test the app use one of these commands(`Make sure you are in the file inside your terminal`)

## Test = npm test \or\ yarn test

To run the app use one of these commands

## Development = npm run dev \or\ yarn dev

# Third-party api

I use no third party apis

# Security

This app will have password protection like the kind of protection provided by Bcrypt
which will allow a user's password to be encrypted which will keep them safe.

` bcrypt package`:`https://www.npmjs.com/package/bcrypt`
` JWT auth`:`https://jwt.io/`

There will also be some other protection middleware implemented into the back-end
of this web app.

All keys and tokens are stored in a .env file so that they are hidden from the public.

# Front-end

Your will need to structure Front-end .env file like this.

If You would like to enter your own input you only need to add them to there assigned points

VITE_GOOGLE_CLIENT_ID= `Client_id`
VITE_GOOGLE_REDIRECT_URI= `Redirect_uri`

VITE_FACEBOOK_CLIENT_ID= `Client_id`
VITE_FACEBOOK_REDIRECT_URI= `Redirect_uri`

VITE_API_URL= `Back-end Api_url`

# Back-end

JWT_TOKEN= `Jwt_token`
GOOGLE_CLIENT_ID= `Client_id`
GOOGLE_CLIENT_SECRET= `Client_secret`
GOOGLE_REDIRECT_URI= `Redirect_uri`

FACEBOOK_CLIENT_ID= `Client_id`
FACEBOOK_CLIENT_SECRET= `Client_secret`
FACEBOOK_REDIRECT_URI= `Redirect_uri`

# Deployed

The front-end and back-end was deployed separately, this is due to not being able to deploy the
back-end on netlify.

The front-end was deployed on netlify

## front-end = https://event-managing.netlify.app

The back-end was deployed on heroku

## back-end = https://event-managing-back-end.herokuapp.com/

The back-end will show a not found on the browser, there is no cause for concern,
the tab just needs to stay open so that the rest api can be turned on.

# Design and initial build

This is the user design.

Web App || User

This is what a user will bbe able to do and see as well as interact with.

Web App || Admin

An admin will also have an account just like a user but and admin will be
able to switch over to the Admin section.

To see the flow just open this link in the browser and sign-in to figma, Then on the right you will
see 3 tabs: Design - Prototype - Inspect.

Press the ProtoType option and it will switch over to giving you the flow and show the connections.

To start the flow you just press the flow 1 button on the left of the first page and it will switch
into a prototype mode where you can test what the functionality and flow will be.

https://www.figma.com/file/7pk36M0kAwy4sex3yGEJ1V/Event-Web-App?node-id=0%3A1

<!-- PART 2 OF THE CAPSTONE -->

# HOW TO USE

This app is fairly simple to use and understand, the sign-in can be done with `Google`, `Facebook`
or just with a created user when navigation to the sign-up page.

Once you are signed in you can navigate to the create page where you can create your first
event, when it is created it will show be rendered in the My-Events page and the Home page.

You can view the details of your event on the Home page by clicking on it or when on the My-Events
page you can click update.

You are also able to remove an event on both pages.

Their is also a members list if you wanted to join someone else's events or your own.

# ADMIN USE

The adminAccess.txt file holds the logins to test admin control

The admin will be a user that has has an option exclusive to them on their dropdown when pressing the
profile button.

An admin is able to Update, Read and delete user data.

whether it is update a user's details or events.

<!-- PART 1 OF THE CAPSTONE -->

# Web Stack

I will be using the `MERN` stack.

`MongoDb`:`https://www.mongodb.com/`

`Express.js`:`https://expressjs.com/`

`React.js`:`https://beta.reactjs.org/`

`Node.js`:`https://nodejs.org/en/`

## Framework = React.js

I'll a

I have chosen to use `Vite` for my front-end scaffolding tool.

Vite doesn't need to bundle the entire app or transpile the
modules and code before starting a dev server; transpiring
is done on-demand, this makes it significantly faster than CRA. (`Quoted from the blog below.`)

`Blog`:
`https://blog.logrocket.com/vite-3-vs-create-react-app-comparison-migration-guide/#:~:text=Vite%20doesn't%20need%20to,it%20significantly%20faster%20than%20CRA.`

This blog explain in great detail the deference between `CRA` and `Vite`

It is stated that `Vite` provides a significant increase in speed for
building and developing a web app, when updating code for the app it
targets only the updated component there for saving resources because
it does not force a full refresh across the entire app like `CRA` does.

## Inspiration and competitor

The page that is currently doing what I am trying to create is Event-Create (`https://www.eventcreate.com/`), They are more focus on giving a built website specific to the user but with my app I will be providing an already built app that provides easy to use functionality so that a person can make an event in less that a minute from once they are signed in.

## MongoDb

I will be using `MongoDb` for the database, the reason for
this is because I am most comfortable with using this
no-SQL database.

It is also flexible enough so that I will not necessarily
be restricted by a strict structure.

## Express.js

For my `back-end`, I will be using `Express.js` for creating my
`CRUD` operations, it is also the framework that I am most
comfortable using within my `back-end` application.

## React.js

For the `front-end` of my application, I will be using `React.js`,
the reason for this is because of the structure `React.js` provides,
for instance, using `components` are very easy to route.

The `component` structure it provides means that I can make very
`reusable` code and functions that can be easily `propped` and `imported` into
different files.

## Node.js

My runtime environment will be `Node.js`, it will be running my running my `back-end`
server. I will also be using the `node package manager(npm)` for installing
my `frameworks` and `libraries`, it will also be used for running my `terminal` commands.

# `Styling my app`

## Tailwind

I have only worked with a few different styling libraries but so far `tailwind` has
given me the most for the least amount of code, its `class structure` has made styling much
easier as well as more directed to the elements I wish to style.

For instance with normal css I would have to make different files and switch between files and create
`classes` on my element which I can then style within my `style.css` file.

When using `tailwind` I can find the exact element I want to style and then apply the styles directly on
the element, an example would be as follows:

### Tailwind

<div className="bg-grey">
<h1 className="text-white">Hello world</h1>
</div>

### Normal CSS

<div class="div1">
<h1>Hello world</h1>
</div>

<style>
  .div1 {
    background-color: grey
  }

  .div1, h1{
    color: white
  }
</style>

############################################################################################################

# `FUNCTIONAL REQUIREMENTS`

## NAVIGATION

This app will have a navigation bar which will clearly show where you are on the page.

There will also be buttons on some components for quick navigation.

## DATA FETCHING

The data of users will be safely stored within MongoDB when signing up to the app,
All creation and updating will have their own buttons for performing these actions.

## ADMIN CONTROL

I will be implementing a user with the role of an admin, this admin will be able to monitor a
user's account.

An admin will be able to do multiple actions such as update a user's events, delete events and
if necessary an admin could even delete and edit a user's account.

# `NON-FUNCTIONAL REQUIREMENTS`

# USABILITY

This app will provide reusability by giving a user a platform for creating events at anytime.

These events can be given dates and times so that a user could even plan their entire year
if they wanted to, the design is simple and professional with easy to understand navigation.

The easy to use creation makes it quick and simple for someone to create an event and if they
wanted to they could update or delete it.

# RELIABILITY

This app will have various error handling for the front and back-end of the app.

Making sure that a user has a calm and reliable work-flow when creating their events.
