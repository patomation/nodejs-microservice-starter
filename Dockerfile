# BASE NODE
FROM node:16-slim AS base
WORKDIR /app
COPY package*.json ./

# DEPENDENCIES
FROM base AS dependencies
# Install only production modules  --ignore-scripts will skip running prepare after install
RUN npm install --only=production --ignore-scripts
# Copy prod modules into a different directory
RUN cp -R node_modules prod_node_modules
# Now install everything... that is needed for dev
RUN npm install

# TEST
FROM dependencies AS test
COPY . .
RUN npm run test

# Build
FROM dependencies AS build
COPY . .
RUN npx tsc

# RELEASE
FROM base AS release
COPY --from=dependencies /app/prod_node_modules ./node_modules
COPY --from=build /app/build ./build
EXPOSE 80
CMD [ "node", "./build/index.js" ]
