<?php

namespace App\Http\Controllers;

use App\Models\Midwife;
use App\Models\Patient;
use App\Models\PatientHistory\DiagnosisLabor;
use App\Models\PatientHistory\DiagnosisPregnancy;
use Illuminate\Http\Request;

class TotalAllCountController extends Controller
{
    public function all_count()
    {
        return response()->json([
            "total_patients" => Patient::count(),
            "total_midwives" => Midwife::count(),
            "total_patient_pregnancies" => DiagnosisPregnancy::count(),
            "total_patient_labors" => DiagnosisLabor::count()
        ]);
    }
}
