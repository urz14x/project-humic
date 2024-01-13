<?php

namespace App\Http\Controllers\Midwife;

use App\Http\Controllers\Controller;
use App\Models\Midwife;
use Illuminate\Http\Request;

class TotalMidwifeController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $count = Midwife::count();
         return response()->json([
            "total" =>  $count
         ]);
    }
}
