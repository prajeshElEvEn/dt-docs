# Header

It is a component present at the top of the page. It contains `logo`, `user-img` and a dropdown menu.

## Header Element

```css
header {
  height: var(--header-height);
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100%);
  z-index: 1002;
  background-color: var(--secondary-background-color);
  padding-left: 20px;
  display: flex;
  align-items: center;
  transition: 0.3s;
}
```

**Usage**

```html
<header class="justify-content-between">
    <a href="#" class="logo">
        <img src="https://sdlms.deepthought.education/assets/uploads/files/system/site-logo.svg" alt="">
    </a>
    <div class="d-flex align-items-center gap-3 flex-wrap me-lg-5">
        <a href="#">
            <img src="https://s3-alpha-sig.figma.com/img/9e74/217c/f84e61edf17f42d2cc27d8f94e013608?Expires=1688342400&Signature=ieC8LyrZsXv4v6DNatFfI9lNLpyde445GGC1bJRWDEFWZb-pJdp6iNMBoohHyJlqr9ZDcY~26MIgg7rrZvnp5~CiiEMh21a49ecqSdLXbJ54TWq4SrJ91hfgrxHPtySWw9BK-lPvacPKbmOUee8Tu9fo~YGSXmJ1yFUj9q1Wwwig52risQipltsWH2m4-o5RrUMyLE3b3TpzL5wrwXl7sXSuFXRJ40RTkjSybqOleHNTGJEGTj-PBwp7gD58CWEsnZYtKGGxRie7THpuVK1bHvOOlgZPVqL6DUm6BjosBsTWKG7-ToGuqDau7Igx4k~yZcEdGVDpZVs34x6cC0iqhw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" class="user-img">
        </a>
        <a href="#">
            <i class="bi bi-three-dots-vertical"></i>
        </a>
    </div>
</header>
```

:::warning
Remember to include [Bootstrap Web Icon CDN](https://icons.getbootstrap.com/#install) in `head` tag or the icons won't be displayed.
:::

## Sub Classes

### Logo

The `logo` class specifies the styles of brand logo of DeepThought.

**Class**

```css
header .logo {
  width: 225px;
}
```

**Usage**

```html
<a href="#" class="logo">
    <img src="./assets/brand-logo.img" alt="">
</a>
```

### User Image

The `user-img` class specifies the styles of user avatar in the `header`.

**Class**

```css
.user-img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
```

**Usage**

```html
<a href="#">
    <img src="./assets/user-image.jpg" alt="" class="user-img">
</a>
```
