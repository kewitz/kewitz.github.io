export default body => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Leonardo Kewitz</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="description" content="Simple livin', simple codin'.">
      <meta name="author" content="Leonardo Kewitz">
      <meta name="keywords" content="Leonardo Kewitz, Software Engineer, JavaScript">
      <meta property="og:description" content="Simple livin', simple codin'.">
      <meta property="og:title" content="Leonardo Kewitz">
      <link href="/static/style.css" rel="stylesheet">
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    </head>
    <body>
      ${body}
    </body>
  </html>
`
