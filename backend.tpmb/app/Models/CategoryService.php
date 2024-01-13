<?php

namespace App\Models;

use App\Models\PatientHistory\DiagnosisLabor;
use App\Models\PatientHistory\DiagnosisPregnancy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryService extends Model
{
    use HasFactory;
    public function pregnancies()
    {
        return $this->hasMany(DiagnosisPregnancy::class);
    }
    public function labors()
    {
        return $this->hasMany(DiagnosisLabor::class);
    }
}
