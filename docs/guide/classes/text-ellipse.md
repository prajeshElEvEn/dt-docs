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

**Class**

```css
.text-ellipse-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  word-break: break-all;
  text-overflow: ellipsis;
}
```

**Usage**

```html
<div class="text-ellipse-2">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo ad laborum ducimus architecto. Optio iure ducimus impedit iusto qui, perspiciatis commodi! Repudiandae accusantium quos molestias numquam culpa minima itaque earum quibusdam, temporibus facere adipisci aut assumenda magni quas debitis eum hic, laborum dolor, repellendus doloremque!
</div>
```

## Four Line Ellipse

It wraps lines after displaying four lines.

**Class**

```css
.text-ellipse-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  word-break: break-all;
  text-overflow: ellipsis;
}
```

**Usage**

```html
<div class="text-ellipse-4">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, nulla. Praesentium consectetur ipsa eos velit dolorem esse corporis ducimus accusamus, ex totam reiciendis iusto libero dicta sunt quo cupiditate qui a suscipit maxime perferendis similique. Illo nobis tempora sapiente tempore vero vel rem voluptatum illum, adipisci iusto aut pariatur dolor ipsam velit cumque inventore corporis beatae molestias laboriosam molestiae exercitationem natus! Mollitia qui beatae unde rem rerum. Repudiandae molestias reprehenderit ab ipsa obcaecati quos architecto suscipit dolorum? In suscipit maiores quidem dolorum eos laudantium ea dolore quisquam dolores similique, iusto porro! Veritatis sit sed itaque dolorum voluptate nihil voluptatibus quas.
</div>
```
