# PostQL
[![Build Status](https://travis-ci.com/oslabs-beta/PostQL.svg?branch=dev)](https://travis-ci.com/oslabs-beta/PostQL)

PostQL is a web application that specializes in providing metrics for your GraphQL endpoint and then utilizing that data further to provide detailed, historic analytical data. We help you implement structured automatic testing on your GraphQL endpoint as well as giving you all the data you need to make your application more performant.

Try it live on our website: https://postql.io.com

## How to use:

1. After logging in or registering, you'll be brought to a GraphQL Playground page. You can enter in your specific GraphQL endpoint URL to begin writing queries.

For any valid query written, Playground will display detailed resolver data on the specific timings of each relevant subquery. These metrics are then logged for future use. 

*note for metrics to appear, your GraphQL implemention will need to have Apollo tracing enabled.*

2. Click on the `Analytics` tab on the top. This screen will show you all previous queries you've run organized by the last runtime. The searchbar gives you a quick way to navigate thorugh your queries.

3. Click on `More Details` to see all the details about every time you've ran this particular query.

4. On this page, you'll see time stamps for every query runtime along with total duration. This lets you see how well you've optmized this query over time.

5. Click on `Resolver Breakdown` to see a Gantt Chart showing time in nanoseconds for each subresolver request.

## Upcoming functionality

1. Automated testing: PostQL has the functionality of automatically sending a query that includes all non-parameterized query types. This will populate the `Analytics` page with all the relevant information to see the performance of your GraphQL endpoint at a glance.  *Coming soon.*

2. Automated querying for parametized queries. These query types will be first displayed to the user in our GUI so they can enter in a valid parameter.

3. CRUD functionality test: PostQL will ask what order your mutations should run in order to test full CRUD functionality. Any necessary paramters will be requested from the user.

## Installation

To run this locally, pull down from this repo and you can run in development mode. 

```
npm install
```

- Make sure Docker is running.
- Plug in your own ENV variables for a MongoDB and PostgreSQL DBs.

## Credits

[@jason-heinowitz](https://github.com/jason-heinowitz), [@hjjinnie](https://github.com/hjjinnie), [@davidzhang8828](https://github.com/davidzhang8828), [@mariodandrea](https://github.com/mariodandrea), [@paganjoshua](https://github.com/paganjoshua)
