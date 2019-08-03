Zcss 0.5
---

Zcss is a Css framework that I cloned from [BEMskel](http://bemskel.com/).

# Getting Started

## Using CDN

Include this inside the `<head>` tag https://gl.githack.com/znounce/zcss/raw/master/public/zcss.css` in your index file. (Pretty obvious)

## For development

Run the command below to start coding. All code changes inside `src` folder will be automatically generated into `dist` folder. (read Folder Structure)

1. Run `npm install`
2. Run `npm run live`


## Folder Structure

Only edit the JS and SCSS code inside `src` folder. Npm will generate compiled code into dist folder automatically when `npm run live` running.

# BEM (Block Element & Modifier)

```scss
/* Block component */
.btn {}

/* Element that depends upon the block */ 
.btn__price {}

/* Modifier that changes the style of the block */
.btn--orange {} 
.btn--big {}
```