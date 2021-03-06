# Stardew Forum Website

## Overview  

Our application is intended to allow a user to create or login
to a profile on our forum, and 

then either create new topics within
the given categories, or create new posts under a listed topic. This
will let they communicate about the 

game with other users on the 
website. They can also place tags on their topics or posts 
for sorting them, or to clarify their purpose.
<br></br>

## Table of Contents
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used](#technologies-used)
- [Future Project Direction and Development](#future-project-direction-and-development)
- [Link to Deployed Application and GitHub repository](#link-to-deployed-application-and-github-repository)
- [Contributing](#contributing)
- [Screenshots](#screenshots)

## User Story 

    AS a fan of the 'Stardew Valley' game
    I WANT to have a forum to make or respond to questions and comments about it
    SO THAT I can help others enjoy the game too

<br></br>

## Acceptance Criteria 

    GIVEN I open the forum website
    WHEN I select a category from the list
    THEN I see a list of topics under that category
    WHEN I hit the 'create' button on the topic page
    THEN I am taken to a page to create a new topic
    WHEN I submit my new topic
    THEN I am taken back to the original category and see my new topic
    WHEN I select a topic
    THEN I see a list of posts made under that topic
    WHEN I hit the 'create' button on the post page
    THEN I am take to a page to create a new post
    WHEN I submit my new post
    THEN I am taken back to the original topic and see my new post

    WHEN I click on a username next to either a topic or post
    THEN I am taken to a profile page to see the user's profile image and biography

    WHEN I click on the signup button
    THEN I am taken to a page to add an account username and password to the website
    WHEN I submit a username and password
    THEN I am taken to a page to submit a new image and biography for the website

    WHEN I have created an account and am not logged in
    THEN I can hit the login button be taken taken to a new page to sign in to my account
    WHEN I am logged in
    THEN I see my profile name in the button in the header
    WHEN I hit that button
    THEN I am taken to my profile page, which now displays an 'edit profile' button
    WHEN I hit the 'edit profile' button
    THEN I can upload a new image or submit a new biography for my account
    WHEN I return to my profile page after submitting new information
    THEN I see the new image and biography under my account

    WHEN I hit the 'logout' button after I've signed in
    THEN I am logged out of my account, and can no longer post new items or alter my profile
        until I am signed in again

<br></br>

## Technologies Used 

Our website uses the Cloudinary widget to store images uploaded by the 
user on a 

server, where they can be accessed and displayed in the
user profile.

<br></br>

## Future Project Direction and Development

There are many ways we could add functionality to the forum in the future.
We could add many additional 

fields to the user profile, possibly including 
elements of the user's in-game character. We could also 

expand the number of 
categories, as well as add functionality for users to remove their topics or posts.

In addition to expanding on our application's functionality, we would also
have to address some bugs which currently exist. 

Notably these are:

* On the page to display a profile, the user's name does not display on the button in the header.
* In either pages to display topics or posts, you can read other usernames, but they do not currently link so that other users can see their profile.
* On all pages to either make a post, make a topic, or edit a profile, the buttons default to displaying 'login' and 'signup' instead of the username and 'logout'.
* On the page to edit a profile, submitting an image takes you back to the original page, without submitting either the biography or username fields.
* It is currently possible to submit an empty username or biography. 

<br></br>

## Link to Deployed Application and GitHub repository

* GitHub repository: https://github.com/NJscc/stardew_forum

* Deployed link: https://stardew-forum-project.herokuapp.com/

<br></br>

## Contributing 

Contributors: Ally Nostrand (Project Manager), Nicholas Jones (GitHub Manager), Seval Cakir, Aidan Hamann

 <br></br>   
 ## Screenshots

A screenshot of our deployed application is shown below.

!["Our website screenshot."](./assets/images/forum_image.png)

Here is a screenshot of a user's profile page 

<img src="./assets/images/stardew-forum-sc-1.png">