<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class Midwife extends Model
{
    use HasFactory, HasApiTokens, Notifiable;
    protected $guarded = [];

    public function toArray()
    {
        return [
            "fullname" => $this->fullname,
            "username" => $this->username,
            "email" => $this->email
        ];
    }
    public function patients()
    {
        return $this->belongsTo(Patient::class);
    }
}
