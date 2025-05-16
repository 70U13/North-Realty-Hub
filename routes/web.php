<?php

use Illuminate\Support\Facades\Route;

/* Route::get('/', function () {
    return view('welcome');
});
 */

Route::get('/{path?}', function () {
    return view('app');
})->where('path', '(?!api).*'); //this will exclude 'api' paths from the catch-all

//Route::prefix('api')->group(base_path('routes/api.php'));