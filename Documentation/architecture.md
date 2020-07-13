# Zowe File Transfer Application

File Transfer Application is written in [Typescript](http://www.typescriptlang.org/), The node server as well as the client application.
Client Appplication is written from Angular 6 Framework and the proxy server is written from Node.JS

## Root files & directories

At the root of an App's directory, the following content is found.

### pluginDefinition.json

- This file describes the Plugin to the App server.

- A `Plugin` is the unit of extensibility for the App server, where documentation viwer app is a `Plugin` of type `Application`, the most common and visible to the end-user.

- Definition file of the app tells the server whether the App has server-side [Dataservices](https://github.com/zowe/ZLUX/wiki/ZLUX-Dataservices), client-side web content, or both.

- The attributes of this file are described in the [Plugin Definition article](https://github.com/zowe/ZLUX/wiki/ZLUX-Plugin-Definition-&-Structure).


### nodeServer

- File Transfer App has Dataservices of the type "router", these are interpreted by the App Server by attaching them as ExpressJS routers. 

- Use of Typescript results in build steps as the pre-transpilation Typescript content is not to be consumed by NodeJS. Therefore, within **nodeServer**, server-side source code is present. At runtime, the server loads **router dataservices** from the lib directory.

### webClient

- File tansferapp app serves static content for a client.  

- Use of Typescript and Webpack both result in build steps as the pre-transpilation Typescript and the pre-webpack content are not to be consumed by the browser. Therefore, the client side source code is separated from the served content by placing within webClient.

## Runtime content

At runtime, a different set of directories are used by the server & client rather than those described for use in the dev environment.

### lib

- The lib directory is where router-type Dataservices are loaded by use in the App Server. 

### web

- The web directory is where the server serve static content for the app.

- Typically this directory contains the output of a webpack build. Anything put in this folder can be accessed by a client, so only put content here that is intended to be consumed by clients.

### api mediation layer

- The files and the data sets are served from the api mediation layer which was written from C. 


