<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FaqController;

Route::get('/faqs', [FaqController::class, 'getAllFaqs']); 