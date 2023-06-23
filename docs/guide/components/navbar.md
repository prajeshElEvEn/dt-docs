# Navbar

**Nav Menu Item**

```css
.nav-menu-item {
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--tertiary-background-color);
  color: var(--secondary-font-color);
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
}
```

**Nav Menu Item Extra**

```css
.nav-menu-item-extra {
  font-size: 20px;
  cursor: pointer;
}
```

## Hamburger

```css
.hamburger-menu-button {
  display: block;
  position: relative;
  box-sizing: content-box;
  border-radius: 50%;
  cursor: pointer;
  width: 40px;
  height: 40px;
  overflow: hidden;
}
```

## Hamburger Open

```css
.hamburger-menu-button-open {
  top: 50%;
  margin-top: -1px;
  left: 50%;
  margin-left: -12px;
}
```

## Hamburger Before After

```css
.hamburger-menu-button-open,
.hamburger-menu-button-open::after,
.hamburger-menu-button-open::before {
  position: absolute;
  width: 24px;
  height: 2px;
  background: var(--secondary-foreground-color);
  border-radius: 4px;
  transition: all 0.3s;
}
```

```css
.hamburger-menu-button-open::after,
.hamburger-menu-button-open::before {
  left: 0;
  content: "";
}
```

```css
.hamburger-menu-button-open::before {
  top: 6px;
}
```

```css
.hamburger-menu-button-open::after {
  bottom: 6px;
}
```

```css
.hamburger-menu-button-close {
  background: 0 0;
  transform: rotate(180deg);
}
```

```css
.hamburger-menu-button-close::before {
  transform: translateY(-6px) rotate(45deg);
}
```

```css
.hamburger-menu-button-close::after {
  transform: translateY(6px) rotate(-45deg);
}
```
