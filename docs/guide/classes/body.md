# Body

There a few classes used along with `body`.

## Debug Mode

This class adds borders around every element and thus helps in debugging.

**Class**

```css
body.debug-mode * {
  outline: 1px solid #0a58ca;
}
```

**Usage**

```html
<body class="debug-mode"></body>
```

## Body Styles

There a few styles defined for the body.

```css
body {
  background-color: var(--secondary-background-color);
  overflow: hidden;
}
```

## Left Sidebar Active

```css
body.has-left-sidebar left-sidebar {
  left: 0;
}
```

## Left Sidebar with Full Width Container

```css
body.has-left-sidebar .full-width-container {
  padding-left: var(--left-sidebar-width);
}
```

## Left Sidebar with Header

```css
body.has-left-sidebar header {
  padding-left: var(--left-sidebar-width);
}
```

## Left Sidebar with Toggle

```css
body.has-left-sidebar #toggleLeftSidebar {
  display: block;
}
```

## Right Sidebar Active

```css
body.has-right-sidebar right-sidebar {
  right: 0;
}
```

## Right Sidebar with Full Width Container

```css
body.has-right-sidebar .full-width-container {
  padding-right: var(--right-sidebar-width);
}
```
