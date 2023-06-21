# Template

Use this to create a page with basic elements like `header`, `left-sidebar`, `content`.

## Template Code

Use this code in `index.html` to create a page with basic elements like `header`, `left-sidebar`, `content`.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://app.deepthought.education/assets/styles.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <title>Template</title>
</head>

<body class="has-left-sidebar">
    <div class="full-width-container">
        <div id="content">
            <!-- header -->
            <header>
                Header
            </header>
            <!-- left-sidebar -->
            <left-sidebar>
                Left Sidebar
            </left-sidebar>
            <!-- content -->
            <div id="content">
                Content
            </div>
        </div>
    </div>

</body>

</html>
```

:::info
This code shows the structure of a page with `header`, `left-sidebar`, `content`.
:::

:::tip
To know more about the elements, checkout [header](../guide/header), [left-sidebar](../guide/left-sidebar) and [content](../guide/content).
:::

## Icons

You can use [Bootstrap Icon Svgs](https://icons.getbootstrap.com/).

But in case you want to use web font. Include the CDN link in `index.html` `head` tag.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
```
