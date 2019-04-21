Zcss 0.5
---

Css framework cloned from [BEMskel](http://bemskel.com/) created for Znounce web application

# Getting Started

## Using CDN
> https://gl.githack.com/znounce/zcss/raw/master/public/zcss.css

## For development

1. Make sure docker is installed
2. run `docker-compose up`
3. website will be available at `localhost:8000`


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