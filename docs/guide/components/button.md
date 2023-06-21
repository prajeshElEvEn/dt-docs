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

**Usage**

```html
<button class="button-primary">
    Click
</button>
```

### Secondary Button

**Class**

```css
button.button-secondary {
  background: var(--secondary-button-background-color);
  color: var(--secondary-button-text-color);
  border: 3px var(--primary-button-background-color) solid;
}
```

**Usage**

```html
<button class="button-secondary">
    Click
</button>
```

### Tertiary Button

**Class**

```css
button.button-tertiary {
  background: var(--tertiary-button-background-color);
  color: var(--tertiary-button-text-color);
  width: 56px;
  height: 56px;
  border-radius: 50%;
}
```

**Usage**

```html
<button class="button-tertiary">
    Click
</button>
```

### Primary Button Disabled

**Class**

```css
button.button-primary.disabled,
button.button-primary:disabled {
  background: var(--button-disabled-background);
  border: 3px solid var(--button-disabled-background);
  box-shadow: none;
  color: #000;
}
```

**Usage**

```html
<button class="button-primary disabled">
    Click
</button>
```

### Secondary Button Disabled

**Class**

```css
button.button-secondary.disabled,
button.button-secondary:disabled {
  background: var(--button-disabled-background);
  border: 3px solid var(--secondary-button-disabled-border-color);
  box-shadow: none;
  color: var(--secondary-button-disabled-color);
}
```

**Usage**

```html
<button class="button-secondary disabled">
    Click
</button>
```

### Tertiary Button Disabled

**Class**

```css
button.button-tertiary.disabled,
button.button-tertiary:disabled {
  background: var(--button-disabled-background);
  box-shadow: none;
}
```

**Usage**

```html
<button class="button-tertiary disabled">
    Click
</button>
```

## Button Styles

### Primary Button Hover

```css
button.button-primary.hover,
button.button-primary:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
```

### Primary Button Active

```css
button.button-primary.active,
button.button-primary:active {
  box-shadow: inset -2px 4px 10px rgba(78, 76, 76, 0.4);
  border: 3px rgba(78, 76, 76, 0.26) solid;
}
```

### Secondary Button Hover

```css
button.button-secondary.hover,
button.button-secondary:hover {
  background: rgba(0, 41, 255, 0.11);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
```

### Secondary Button Active

```css
button.button-secondary.active,
button.button-secondary:active {
  box-shadow: inset -2px 4px 10px rgba(78, 76, 76, 0.4);
  background: rgba(0, 41, 255, 0.11);
}
```

### Tertiary Button Hover

```css
button.button-tertiary.hover,
button.button-tertiary:hover {
  background: rgba(0, 41, 255, 0.15);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
}
```

### Tertiary Button Active

```css
button.button-tertiary.active,
button.button-tertiary:active {
  background: rgba(0, 41, 255, 0.15);
  box-shadow: inset -2px 4px 10px rgba(78, 76, 76, 0.25);
}
```
