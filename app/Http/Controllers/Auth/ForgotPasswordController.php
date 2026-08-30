<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\ForgotPasswordRequest;
use Illuminate\Support\Facades\Password;
use Inertia\Inertia;

class ForgotPasswordController extends Controller
{
    public function create()
    {
        return Inertia::render('ForgotPasswordView');
    }

    public function store(ForgotPasswordRequest $request)
    {
        Password::sendResetLink($request->safe(['email']));

        return back();
    }
}
