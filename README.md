## AS tech test 

## How I thought about the solution

I've tried to examine provided OpenStreetMap API, at the first glance it seems that there isn't a possibility of gathering data from the API by passing exact coordinates(lat, lng) because the OSM `/map` API just returns OSM data if you pass Bounds to it then I've decided to deep dive into OpenStreetMap API to understand how API is working to have a perfect understanding about the header of problem meanwhile I understood there a chance to get data from the `/map` API if I pass the lat and long coordinates of my desired location as `min_lat` and `min_lng`, in this scenario I can pick the latest child of the array and could ensure that this is the closest area to my desired location, then I displayed it inside GeoJson component.

Another solution that came to mind was a trickier solution, If I iterate through the `geometry` object which is a set of coordinates, and find out which features have the nearest coordinates to my desired location then the parent (or parents, it could be more than one location) could be the answer(s), but I've implemented the first solution :).


## Features

1- Pick a location from MapBox by clicking on the location.

2- Sync coordinates with the picked location from the MapBox.

3- Enter any coordinates you want to see a fly to that location on the Map.

4- By updating from Map or Coordinates box you will see GeoJson features of that location of available.

5- Lat, Lon validation is implemented inside Coordinates components.

6- Sort,Filter, Search on the GeoJson data table.

## Notes

1- Redux is needed if the project gets more complex in the future.

2- Tests doesn't implement for the sake of time.

3- But the Project is well tested.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.