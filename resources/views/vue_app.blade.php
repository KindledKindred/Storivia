<!doctype html>
  <html lang="{{ app()->getLocale() }}">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Raleway:700,400">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
      <link rel="stylesheet" href="{{ mix('css/app.css') }}">
      <script type="text/javascript">
        window.Laravel = window.Laravel || {};
        window.Laravel.csrfToken = "{{csrf_token()}}";
      </script>
      <title>Storivia</title>
    </head>
    <body>
      <div id="app"> <!-- マウント開始 -->
        <router-view></router-view>
        debug mode
      </div>
      <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>