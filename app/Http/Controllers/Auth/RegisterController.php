<?php

declare(strict_types=1);

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class RegisterController extends Controller
{
    public function __invoke(RegisterRequest $request): RedirectResponse
    {
        DB::transaction(function () use ($request) {
            $user = User::create($request->safe([
                'name',
                'email',
                'password',
            ]));

            event(new Registered($user));

            Auth::login($user);
        });

        return to_route('dashboard');
    }
}
