<?php

namespace App\Models;

use App\Models\PatientHistory\DiagnosisLabor;
use App\Models\PatientHistory\DiagnosisPregnancy;
use App\Models\CategoryService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Laravel\Sanctum\HasApiTokens;

class Patient extends Model
{
    use HasFactory, HasApiTokens;
    protected $table = "patients";
    protected $guarded = [];
    public function midwife()
    {
        return $this->belongsTo(Midwife::class);
    }
    public function patientable(): MorphTo
    {
        return $this->morphTo();
    }
}
