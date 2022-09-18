# Walk through of the Project

This is a React Project called as React-Pro-LandingPage which typically deals with the responsive landing page for the fruits business. The project contains various sections such as About, Deals, Blogs, Contact, etc. The other details of the project are as follows:

## Code Splitting

Code Splitting is done at Routes

## React Component Type

Functional Component with various hooks like useState(), useEffect(), useRef() and useContext() along with some custom hooks such as useIntersectionObserver().

## Data Fetching

Easily fetched data using own github hosted REST API.

## State Management

Used ContextAPI for State Management.

## Styling

Vanilla CSS

## Best Practices

1. Files are well-organised.

2. Components, Context, images, styles are in separate folders making app structure clear to understand and scalable in nature.

3. Beautifully applied Code Splitting which boosts the performance of the app and shows the minified content to the users initially and only loads other contents if the user is interested to have a glance at them.

4. Dynamically rendered all the images, which implies images are optimised by webpack.

5. Intersection Observer has been introduced.

6. DOM Attributes such as children, firstElementChild, etc. have been injected while dealing with Intersection Observer.

7. Used .env.development and .env.production files for the Code Reusablility and environment determination.
