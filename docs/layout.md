# Layout

## Grid

<div class="demo">
    <div class="row">
        <div class="col col--2">col col--2</div>
        <div class="col col--10">col col--10</div>
    </div>
    <div class="row">
        <div class="col col--3">col col--3</div>
        <div class="col col--9">col col--9</div>
    </div>
    <div class="row">
        <div class="col col--6">col col--1</div>
        <div class="col col--6">col col--1</div>
    </div>
</div>

```html
<div class="row">
	<div class="col col--2">col col--2</div>
	<div class="col col--10">col col--10</div>
</div>
<div class="row">
	<div class="col col--3">col col--3</div>
	<div class="col col--9">col col--9</div>
</div>
<div class="row">
	<div class="col col--6">col col--1</div>
	<div class="col col--6">col col--1</div>
</div>
```

## Flexbox Grid

<div class="demo">
    <div class="flex-grid">
        <div class="flex-grid__col">Auto</div>
        <div class="flex-grid__col">Auto</div>
        <div class="flex-grid__col">Auto</div>
        <div class="flex-grid__col">Auto</div>
    </div>
    <div class="flex-grid flex-grid--md">
        <div class="flex-grid__col flex-grid__col--sm">
            flex-grow: 2
        </div>
        <div class="flex-grid__col">flex-grow: 4</div>
    </div>
    <div class="flex-grid flex-grid--md">
        <div class="flex-grid__col flex-grid__col--fixed-width">
            fixed-width: 200px
        </div>
        <div class="flex-grid__col">flex-grow: 4</div>
    </div>
    <div class="flex-grid flex-grid--lg">
        <div class="flex-grid__col flex-grid__col--lg">
            flex-grow: large
        </div>
        <div class="flex-grid__col">flex-grow: default</div>
    </div>
</div>

```html
<div class="flex-grid">
	<div class="flex-grid__col">Auto</div>
	<div class="flex-grid__col">Auto</div>
	<div class="flex-grid__col">Auto</div>
	<div class="flex-grid__col">Auto</div>
</div>
<div class="flex-grid flex-grid--md">
	<div class="flex-grid__col flex-grid__col--sm">
		flex-grow: 2
	</div>
	<div class="flex-grid__col">flex-grow: 4</div>
</div>
<div class="flex-grid flex-grid--md">
	<div class="flex-grid__col flex-grid__col--fixed-width">
		fixed-width: 200px
	</div>
	<div class="flex-grid__col">flex-grow: 4</div>
</div>
<div class="flex-grid flex-grid--lg">
	<div class="flex-grid__col flex-grid__col--lg">
		flex-grow: large
	</div>
	<div class="flex-grid__col">flex-grow: default</div>
</div>
```

## Media

This queries are mobile first. Which mean we are going to use `min-width`

```css
/* "min-width: 400px" !default; */
@media (#{$bp-larger-than-mobile}) {
}

/* "min-width: 1000px" !default; */
@media (#{$bp-larger-than-desktop}) {
}
```

## Animate

This code I stole from [animate.css](https://daneden.github.io/animate.css/). Call `animate` class followed by animate modifier with `--` for example `anime--shake`.

<div class="notify animate animate--shake notify--warning">
    notify animate animate--shake notify--warning
</div>

```html
<div class="notify animate animate--shake notify--warning">
	notify animate animate--shake notify--warning
</div>
```
