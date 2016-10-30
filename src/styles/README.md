# SASS Project Documentation

The app's shared sass component (mixins, variables, etc.) are available in `src/styles/`.

In order to utilize a particular sass component, be sure to import the necessary scss partial.

Example:

```scss
// inside of App.scss
@import './styles/colors';

.someClass {
  background-color: palette("darkgray");
  
  &:hover {
    background-color: palette("darkgray", -10);
  }
}
```

## Colors

Use the `palette` function to retrieve a color from the preset color scheme.

```scss
.someClass {
  color: palette("accent-pink");
  background-color: palette("darkgray");
}
```

The available base colors are:

```
white
gray
darkgray
accent-pink
accent-blue
```

**NOTE: When using the palette function, be sure to surround the color names with `""` so that the standard HTML color names (like `white`, `gray`, `darkgray`) do not get interprolated into Hex values.**

In addition, the `palette` function accepts a positive or negative integer as the second argument.

```scss
palette("accent-blue", 10); // @returns "accent-blue" at 10% lighter
palette("accent-blue", -10); // @returns "accent-blue" at -10% lighter
```
