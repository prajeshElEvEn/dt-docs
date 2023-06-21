# Button

The `button` class makes a few changes in the default button styles of [Bootstrap buttons](https://getbootstrap.com/docs/5.3/components/buttons/).

## Button Element

```css
button {
  padding: 6px 16px;
  font-size: 14px;
  border-radius: 10px;
  border: none;
  outline: 0;
  text-align: center;
  font-family: var(--sdlms-font-family-poppins);
  font-weight: 600;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

**Usage**

```html
<button>
    Click
</button>
```

## Button Sizes

### Medium Size Button

**Class**

```css
button.button-md {
  padding: 8px 20px;
  font-size: 15px;
}
```

**Usage**

```html
<button class="button-md">
    Click
</button>
```

### Large Size Button

**Class**

```css
button.button-lg {
  padding: 10px 24px;
  font-size: 16px;
}
```

**Usage**

```html
<button class="button-lg">
    Click
</button>
```

## Button Variants

### Primary Button

**Class**

```css
button.button-primary {
  background: var(--primary-button-background-color);
  color: var(--primary-button-text-color);
  border: 3px var(--primary-button-background-color) solid;
}
```
