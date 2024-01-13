<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Midwife;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $attributes = $request->validate([
            "fullname" => "required|string",
            "username" => "required|string",
            "email" => "required|email|unique:midwives",
            "password" => "required|min:8|confirmed"
        ]);
        $attributes["password"] =  bcrypt($request->password);
        Midwife::create($attributes);

        return response()->json([
            "message" => "Akun bidan berhasil dibuat! Mohon login"
        ]);
    }
}
