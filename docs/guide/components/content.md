# Content

This is the content component. It contains all the components other than `header`, `left-sidebar` and `right-sidebar`. It is an `id` and not a `class`. It is used inside `body` tag.

```css
#content {
  height: 100%;
  width: 100%;
  overflow: auto;
  background: var(--quaternary-foreground-color);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding: 16px;
}
```

**Usage**

```html
<div id="content">
    <!-- content -->
</div>
```
