<?php

namespace App\Models\PatientHistory;

use App\Models\CategoryService;
use App\Models\Patient;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class DiagnosisPostPartum extends Model
{
    use HasFactory;
    public function patient(): MorphOne
    {
        return $this->morphOne(Patient::class, 'patientable');
    }
    public function category_service()
    {
        return $this->belongsTo(CategoryService::class);
    }
}
