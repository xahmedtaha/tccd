<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $data = $request->validate([
            'email' => 'required|string',
            'password' => 'required|string',
            'device_name' => 'required|string',
        ]);

        $user = User::where('email', $data['email'])->where('password', Hash::make($data['password']))->first();

        if ($user) {
            return [
                'user' => $user,
                'token' => $user->createToken($data['device_name'])->plainTextToken
            ];
        }
        return response(status: 422)->json([
            'message' => 'Incorrect email or password.',
        ]);
    }
}
