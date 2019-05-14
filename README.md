# Movie UI React App

## Project Background

To continue strengthening my skills, I wanted to create a functional application that was similar to interfaces seen on various streaming sites, with content provided by The Movie Database (TMDB) API.

As this project is ongoing, I will be layering on new features and content over time. Currently, the application displays the top 5 most popular recent movies, and basic details with TMDB reviews.

## Features

### Initial Mockup - 5/11/2019

Mocked up layout of the movies front page.

### v1.0 - 5/13/2019

Rendered React components to drive the following features:

- Main page lists top 5 movies.
- #1 Movie is featured in the hero banner.
- #2-4 Movies featured in a grid below.
- Movie detail display with backdrop image, poster, overview, and reviews list.

### v1.1 - 5/14/2019

Added in additional React components:

- Handling Poster display for loading initial data vs. loading movie details.
- Added recommended movies to movie details screen, click to view details of a recommended movie.

## Tech Stack

### Back End

The back end is served using Node/Express with a basic internal API that can be used to make the necessary to TMDB API, and tweak the data returned for use within the Movie UI React App.

### Front End

The UI is developed using React 16 with Sass preprocessing built in. No other CSS frameworks are used—the UI is being coded entirely from scratch with the React components in mind.

## Link

https://r-moviesui.herokuapp.com
