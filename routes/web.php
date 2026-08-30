<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:web', 'verified'])->group(function () {

    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

});

require __DIR__.'/auth.php';
