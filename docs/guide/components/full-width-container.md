# Container

## Full Width Container

The `FullWidthContainer` component is a container that spans the full width of the screen. It is useful for creating full width sections on a page. It is used inside `body` tag.

```css
.full-width-container {
  height: calc(100vh);
  width: calc(100% - 0px);
  background: var(--secondary-background-color);
  padding-right: 20px;
  padding-left: 20px;
  transition: 0.3s;
  position: relative;
  padding-top: var(--header-height);
  overflow-x: hidden;
}
```

**Usage**

```html
<div class="full-width-container">
    <!-- header -->
    <!-- left-sidebar -->
</div>
```
