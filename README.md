# CompostApp
Crowd Sourced Composting

After cloning a fork of the project you will need to perform following steps to setup your Meteor installation:

1. Change into your cloned working directory
2. Run following to initialize your meteor app (a '.meteor' folder will be created):
   $ meteor create .
3. Review files in the client folder. If these files hadn't been present, Meteor would have created files supporting Blaze:

   main.html:
   
    <head>
      <title>Meteor 1.3x + React 15 + Flow Router</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
      <div id="render-target"></div>
    </body>
    
   main.js:
   
   import '/imports/startup/client'
   
   main.css: nothing to change here for now.
   
   For React we're shifting work to files under 'imports/startup/client'. The main.html provide the one DOM element 'render-target' that React will use.
   
4. Installing React with npm (we'll need to keep Blaze around for accounts package support):
   $ meteor npm install [npm modules we're installing are listed in the project dependencies block in packages.json]
5. Add react-meteor-data, flow-router, and accounts / login packages:
   $ meteor add react-meteor-data
   $ meteor add kadira:flow-router
   $ meteor add accounts-ui accounts-password [these packages required blaze-html-templates and give us Meteor.user]
6. Run meteor and confirm the app is available when you point your browser to http://localhost:3000/ 
   $ meteor 
7. Kill the meteor process CTRL+C on Mac


