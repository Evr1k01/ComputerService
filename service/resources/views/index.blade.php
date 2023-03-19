<!doctype html>
<html lang="{{str_replace('_','-',app()->getLocale())}}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta name="csrf-token" content="{{csrf_token()}}">
    @if(Auth::user())
        <meta name="auth-token" content="{{\Illuminate\Support\Facades\Session::get('access_token')[0]}}">
    @endif
    <title>Service @yield('title')</title>

    @vite(['resources/js/app.js','resources/css/app.css'])
</head>
<body>
    <div id="app"></div>
</body>
</html>
