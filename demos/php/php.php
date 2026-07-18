<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\User;
use App\Http\Resources\UserResource;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class UserController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        return UserResource::collection(User::all());
    }

    public function getAdminReport(): string
    {
        return (string) json_encode([
            'status' => 'success',
            'report' => 'Admin report generated successfully.'
        ]);
    }
}
