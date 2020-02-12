# typefeel.com

typefeel.com is a web application for keyboard enthusiasts to share and get involved in projects.

Prerequisites: [https://github.com/rsbear/type-api](https://github.com/rsbear/type-api)
You will need to have the back end up and running in order to start development for the client.

## Start

In terminal
```
git clone https://github.com/rsbear/typefeel.git
cd typefeel-master
yarn && yarn install && yarn dev
```

### To generate new useQuery or useMutation hook
Make a new .graphql file
```
cd graphql
touch newMutation.graphql
yarn generate
```
please note newMutation is just a substitute; please name your file accordingly

### About using graphql codegen and generating custom queries and mutations
Codegen introspects the GraphQL schema of the API. In order to generate the query or mutation
for the frontend it must first exist in the schema.