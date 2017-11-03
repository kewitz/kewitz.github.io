date: 2017-06-21
title: New domain and can I haz markdown?

I just got a slick new domain from dns.JS.org and now you can access this website through kewitz.js.org.
It looks awesome.

Also, I decided to do things the right way stop using **pug** for article files.
Now these article files have just markdown and a header with meta data.

The general structure is pretty simple, it looks like this:

```md
date: 2017-06-21
title: Yeaahhhh boooooy

This is the first paragraph.
```

This way I can stop using folders to order articles and implement a sorting function to use dates.

```js
const byDate = (a, b) => (a.date > b.date ? -1 : 1)
```