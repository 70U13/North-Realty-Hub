<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Faq;

class FaqController extends Controller
{
    public function getAllFaqs()
    {
        return response()->json(Faq::all());
    }
}
