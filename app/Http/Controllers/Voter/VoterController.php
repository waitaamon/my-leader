<?php

namespace App\Http\Controllers\Voter;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class VoterController extends Controller
{


    public function postVoterDetails(Request $request){

        return response()->json([

            'data' => $request
        ]);
    }
}
