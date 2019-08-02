Zcss 0.5
---

Css framework cloned from [BEMskel](http://bemskel.com/) created for Znounce web application

# Getting Started

## Using CDN
> https://gl.githack.com/znounce/zcss/raw/master/public/zcss.css

## For development

1. Run `npm install`
2. Run `npm run live`


## Folder Structure

Only edit the JS and SCSS code inside src folder. Npm will generate compiled code into dist folder automatically when `npm run live` running.

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