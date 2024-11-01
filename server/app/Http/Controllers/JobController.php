<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index()
    {
        return response()->json([
            'jobs' => [
                [
                    'id' => 1,
                    'title' => 'Software Engineer',
                    'company' => 'Tech Corp',
                    'location' => 'Remote',
                    'salary' => '100000 USD',
                ],
                [
                    'id' => 2,
                    'title' => 'Data Scientist',
                    'company' => 'Data Inc',
                    'location' => 'New York, NY',
                    'salary' => '120000 USD',
                ],
                // Add more jobs as needed
            ]
        ]);
    }
}
