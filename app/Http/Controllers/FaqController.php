<?php

namespace App\Http\Controllers;
    
use App\Http\Controllers\Controller;
use App\Models\Faq;
use Illuminate\Http\Request;

class FaqController extends Controller
{
    public function getAllFaqs()
    {
        try {
            $faqs = Faq::all();  // Fetch all FAQs from the database
            return response()->json($faqs);  // Return them as JSON
        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to fetch FAQs'], 500);
        }
    }

    public function index()
    {
        $faqs = Faq::all();  // Or any other query to get your FAQ data
        return response()->json($faqs);  // Return JSON response
    }
}
