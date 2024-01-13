<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\MidwifeResource;
use App\Models\Midwife;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $request->validate([
            "email" => "required",
            "password" => "required"
        ]);

        $midwife = Midwife::whereEmail($request->email)->first();
        if (!$midwife || !Hash::check($request->password, $midwife->password)) {
            throw ValidationException::withMessages([
                "email" => ["Email Atau password salah!"]
            ]);
        }
        $midwife->tokens()->delete();
        $token = $midwife->createToken("web-token")->plainTextToken;

        return (new MidwifeResource($midwife))->additional(compact("token"));
    }
}
