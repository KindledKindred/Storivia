<!doctype html>
  <html lang="{{ app()->getLocale() }}">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
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
        failed to be mounted
      </div>
      <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>