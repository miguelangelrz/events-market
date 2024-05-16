# Events market

This is a technical assessment for Iridian

## How to run

You will require `node` (`npm`) to run the project. Then you need to install 
dependencies and run the project as developer

```
npm install
npm run dev
```

If you want to run the Cypress test you could use while running the dev 
application

```
npm run test
```

## Decision-making

### Why React?

While Angular is another good alternative to developing this application in 
this opportunity the choose was React taking in account my experience in the 
library

### Why MUI?

The decision of using a library was made thinking about the initial mock 
passed as requirement for the project, following the recommendation of the 
same problem and also because it will help to ease the development of the UI

### Why Redux

As a state handler I decide to use Redux since we have a state that is 
replicated in different parts of my application. The alternative could be 
Context API, but with Redux was easier to structure and also could be 
escalated in the future. 

### Why keep hierarchical data

In this case I choose to keep the data without normalizing it because I 
don't see any improvement in the way I was handling the data so far. And 
since the data comes from a mocked API it's not possible to have more 
freedom that justify another structure. Doing in that way only will 
complicate the frontend processing