zcss
---
CSS boilerplate inspired from [skeleton](http://getskeleton.com/) and [milligram](https://milligram.io/) css framework.

> This framework is already include jQuery code
## Contributor
### Getting started

Clone this project into your local folder using SSH (much easier) or HTTPS and install all dependencies needed (example below)

```
git clone git@github.com:kaitoAckerman/zcss.git && cd zcss && npm install && gulp
```

#### Understanding workflow

This project using grunt to compile all source code into its destination folder `dist`.

To working with this project, only edit inside `src` folder. Either `sass` folder for CSS or `script` folder for javascript (jQuery).

View `index.html` file for debugging your frontend code.

#### Understanding grunt (gulpfile.js)

Npm install will install all dependencies for example `gulp-connect`, `gulp-sass` and all plugin from `Grunt` to make all code automate and compile it into minify version into `dist` folder.