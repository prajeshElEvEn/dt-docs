# Media Styles

```css
@media screen and (max-width: 576px) {
  :root {
    --header-height: 60px;
  }
  left-sidebar,
  right-sidebar {
    top: var(--header-height);
    height: calc(100vh - var(--header-height));
    width: 0;
  }
  body.has-left-sidebar .full-width-container {
    padding-left: 0;
  }
  body.has-right-sidebar .full-width-container {
    padding-right: 0;
  }
  #rightSideBarContainer .widgets-header {
    height: var(--header-height);
  }
  #rightSideBarContainer .widgets-body {
    height: calc(100% - var(--header-height));
  }
  header,
  userbar {
    height: var(--header-height);
  }
  .full-width-container {
    padding-top: var(--header-height);
    padding-left: 0;
    padding-right: 0;
  }
  #toggleLeftSidebar {
    top: 30px;
  }
  #toggleRightSidebar {
    display: flex;
  }
  body.right-sidebar-opened .full-width-container {
    width: calc(100%);
  }
}
```

## Other Media Styles

```css
@media (hover: none) {
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
  }
}
```
