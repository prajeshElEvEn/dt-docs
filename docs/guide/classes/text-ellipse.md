# Text Ellipse

It wraps the extra text with an ellipse. There are three classes that can be used to add text ellipses to elements. They vary from each other in the number of lines they can wrap.

## Single Line Ellipse

It wraps lines after displaying one line.

**Class**

```css
.text-ellipse {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
}
```

**Usage**

```html
<div class="text-ellipse">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nam? Nisi velit culpa neque quisquam voluptatum ab esse ullam doloribus expedita consectetur facere aliquid dolore assumenda mollitia eligendi fuga ipsum ipsam atque quae, officia animi debitis sint consequatur voluptas. At obcaecati asperiores quod culpa voluptatum?
</div>
```

## Two Line Ellipse

It wraps lines after displaying two lines.
