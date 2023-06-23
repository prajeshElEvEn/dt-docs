# Left Sidebar

The `left-sidebar` is a component present at the left side of the page. It is a vertical navigation menu that contains links to different pages of the website.

## Left Sidebar Element

```css
left-sidebar {
  transition: 0.3s;
  position: absolute;
  top: var(--header-height);
  left: calc(-1 * var(--left-sidebar-width));
  height: calc(100vh - var(--header-height));
  width: var(--left-sidebar-width);
  background-color: var(--secondary-background-color);
  z-index: 1001;
  overflow: auto;
  cursor: pointer;
}
```

**Usage**

```html
<left-sidebar class="left-sidebar">
    <a href="#">
        <li class="list-group-item">
            <div class="item-icon">
                <i class="bi bi-house"></i>
            </div>
            <div class="item-name">
                Home
            </div>
        </li>
    </a>
    <a href="#">
        <li class="list-group-item">
            <div class="item-icon">
                <i class="bi bi-box-arrow-up-right"></i>
            </div>
            <div class="item-name">
                Link
            </div>
        </li>
    </a>
    <a href="#">
        <li class="list-group-item">
            <div class="item-icon">
                <i class="bi bi-box-arrow-up-right"></i>
            </div>
            <div class="item-name">
                Link
            </div>
        </li>
    </a>
</left-sidebar>
```

:::warning
Remember to include [Bootstrap Web Icon CDN](https://icons.getbootstrap.com/#install) in `head` tag or the icons won't be displayed.
:::

:::tip
Use `svgs` instead of  web icons for custom styling.
:::

## Sub Classes

### List Group Item

The `list-group-item` is used to group `item-icon` (navigation icon) and `item-name` (navigation name) together.

**Class**

```css
left-sidebar li.list-group-item {
  border: none;
  background: 0 0;
  border-radius: 0 !important;
}
```

**Usage**

```html
<a href="#">
    <li class="list-group-item">
        <!-- icon -->
        <!-- name -->
    </li>
</a>
```

### Item Icon

The `item-icon` is used to display the navigation icon.

**Class**

```css
left-sidebar .item-icon {
  width: calc(var(--left-sidebar-width) - 2rem);
  text-align: center;
  display: inline-block;
}
```

**Usage**

```html
<div class="item-icon">
    <i class="bi bi-house"></i>
</div>
```

### Item Name

The `item-name` is used to display the navigation name.

**Class**

```css
left-sidebar .item-name {
  display: none;
  padding-left: 0.7rem;
}
```

**Usage**

```html
<div class="item-name">
    Home
</div>
```

## Left Sidebar Styles

### Links

The `left-sidebar` links are styled using the `a` tag.

```css
left-sidebar a {
  color: var(--tertiary-font-color);
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
}
```

## Left Sidebar Open

This styling comes into effect when the `left-sidebar` is open or is being hovered.

```css
left-sidebar.is-opened,
left-sidebar:hover {
  width: 240px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
  max-width: calc(100% - 16px);
  left: 0;
}
```

This styling comes into effect for `item-name` when the `left-sidebar` is open or is being hovered.

```css
left-sidebar.is-opened .item-name,
left-sidebar:hover .item-name {
  display: inline-block;
}
```

This styling comes into effect for links `a` when the `left-sidebar` is open or is being hovered.

```css
left-sidebar.is-opened a,
left-sidebar:hover a {
  color: var(--primary-font-color);
  font-weight: 600;
}
```

## Toggle Left Sidebar

```css
#toggleLeftSidebar {
  position: fixed;
  left: 10px;
  font-size: 24px;
  cursor: pointer;
  z-index: 1003;
  transform: translate(0, -50%);
  top: calc(var(--header-height) / 2);
  transition: 0.3s;
  display: none;
}
```

## Sidebar Backdrop

```css
#sidebarBackDrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: none;
}
```
