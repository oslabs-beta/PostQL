# PostQL
[![Build Status](https://travis-ci.com/oslabs-beta/PostQL.svg?branch=dev)](https://travis-ci.com/oslabs-beta/PostQL)

PostQL is a web application tool that helps you optimize the performance of your GraphQL endpoints and desgin efficient resolvers by providing detailed performance metrics for your queries.


Try it live


on our website: https://postql.io

## How to use:

![](images/Login.png)

1. After logging in or registering, you'll be brought to a GraphQL Playground page. You can enter in your specific GraphQL endpoint URL to begin writing queries.

  For any valid query written, Playground will display detailed resolver data on the specific timings of each relevant subquery. These metrics are then logged for future use. 

  *Note: for metrics to appear, your GraphQL implementation will need to have Apollo tracing enabled.*

2. Click on the `Analytics` tab on the top. This screen will show you all previous queries you've run organized by the last runtime. The searchbar gives you a quick way to navigate through your queries.

3. Click on `More Details` to see all the details about every time you've ran this particular query.

![](images/PostQL-queries.png)
4. On this page, you'll see time stamps for every query runtime along with total duration. This lets you see how well you've optimized this query over time.

![](images/GoogleCharts.png)
5. Click on `Resolver Breakdown` to see a Gantt Chart showing time in nanoseconds for each subresolver request.

## Upcoming functionality

1. Automated testing: PostQL has the functionality of automatically sending a query that includes all non-parameterized query types. This will populate the `Analytics` page with all the relevant information to see the performance of your GraphQL endpoint at a glance.  *Coming soon.*

2. Automated querying for parameterized queries. These query types will be first displayed to the user in our GUI so they can enter in a valid parameter.

3. CRUD functionality test: PostQL will ask what order your mutations should run in order to test full CRUD functionality. Any necessary parameters will be requested from the user.

## Installation

To run this locally, pull down from this repo and you can run in development mode. 

```
npm install
```

1. After installing dependencies, make sure Docker is running.
2. For the local server to work, you'll need your own *.env* file and plug in the following variables:

```properties
USER_DATABASE="PostgreSQL URI"
JWT_SECRET="JWT secret"
LOGS_DATABASE="MongoDB URI"
```

3. Project will run on your localhost/Docker IP. 

*Note: testing will automatically install an instance of MongoDB for mock DB testing purposes.*

## Credits

Jason H. [@jason-heinowitz](https://github.com/jason-heinowitz), Lisa H.[@hjjinnie](https://github.com/hjjinnie), David Z. [@davidzhang8828](https://github.com/davidzhang8828), Mario D.[@mariodandrea](https://github.com/mariodandrea), Joshua P.[@paganjoshua](https://github.com/paganjoshua)
