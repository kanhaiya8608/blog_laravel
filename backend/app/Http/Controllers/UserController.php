<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;

class UserController extends Controller
{
    function register(Request $req){
        $user= new User;
        $user->name=$req->input('name');
        $user->email=$req->input('email');
        $user->password=Hash::make($req->input('password'));
        $user->save();
        return $user;
    }
    function login(Request $req){
        $user= User::where('email',$req->email)->first();
        if(!$user || !Hash::check($req->password, $user->password))
        {
            return response([
                'error'=>["Email or password is not matched"]
            ]);
        }
        return $user;
    }
}
