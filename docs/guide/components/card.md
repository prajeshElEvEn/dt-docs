# Card

This is the card component. It is used to display content in a card like format. It modifies the default styles of [Bootstrap cards](https://getbootstrap.com/docs/5.3/components/card/).

## Card Element

```css
.card {
  border-radius: 10px;
}
```

## Single Item card

```css
.single-item-card {
  border-radius: 10px;
  min-height: 192px;
}
```

## User Card

```css
.user-card {
  background: var(--quaternary-foreground-color);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 400px;
  position: fixed;
  z-index: 1000;
  color: initial;
}
```

**User Card Avatar**

```css
.user-card-avatar {
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  max-width: 50px;
  max-height: 50px;
}
```

**User Card Avatar img**

```css
.user-card-avatar img {
  max-width: 100%;
  border-radius: 50%;
  -o-object-fit: cover;
  object-fit: cover;
}
```

**User Card Username**

```css
.user-card-username {
  font-size: 14px;
}
```

**User Card Info Item**

```css
.user-card-info-item {
  border: 1px solid var(--primary-foreground-color);
  width: 30%;
  border-radius: 5px;
  word-wrap: break-word;
  padding: 5px;
}
```

**User Card Info Item Value**

```css
.user-card-info-item-value {
  font-size: 22px;
  line-height: 1;
  font-weight: 500;
}
```

**User Card Links**

```css
.user-card-name a {
  font-size: 22px;
  line-height: 1;
  font-weight: 500;
  text-decoration: none;
}
```

## Session Card

```css
.session-card {
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
  color: var(--grey-scale-2);
  --session-font-size: 14px;
  font-size: var(--session-font-size);
}
```
