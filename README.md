![alt-text](https://github.com/audreee/ratings-and-reviews/blob/master/reviews.gif)
# Project Catwalk: Ratings & Reviews

## What Is It?
The Ratings & Reviews section of an e-commerce retail website that renders live product data from the "Atelier" API. 

## What's the Tech Stack?
- React
- CSS Modules
- Flexbox, CSS Grid, CSS3
- HTML
- Axios
- Node (Nodemon) / Express
- Webpack, Babel
- Jest, Enzyme, CircleCI, Lighthouse

## How Do Run It?
1. Fork and clone the repo to your local machine
2. Install all dependencies with npm install
3. Create a config.js file in the root directory exporting a valid Atelier API token
4. Run the npm script 'webpack-prod' to build a bundle using webpack
5. Run the server with 'node server/server.js'
6. Open localhost:3000 on your machine

## Features
- Minimalist, clean React front-end optimized with media queries for desktop and mobile devices
- Functional modal built without external libraries (no Boostrap here!) allowing users to write their own reviews
- Dynamic, hoverable stars that allow user to rate current product
- Review list with "Infinite Scroll" to display more reviews first upon clicking "More Reviews" button and subsequent mouse scrolls
- Graphs displaying average star-rating and average rating per characteristic
- Polished button hover effects
- Fade-in transitions with keyframe animations
- Speed, performace, and accessibility for a 95 Lighthouse score
- 67% test coverage with Jest/Enzyme
