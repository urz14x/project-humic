<?php

namespace App\Http\Controllers\Patient;

use App\Http\Controllers\Controller;
use App\Http\Resources\DetailSinglePatientResource;
use App\Http\Resources\PatientResource;
use App\Http\Resources\PivotResource;
use App\Models\Patient;
use App\Models\PatientHistory\DiagnosisPregnancy;
use Illuminate\Database\Eloquent\Relations\Pivot;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AllPatientController extends Controller
{
    public function index()
    {
        return PatientResource::collection(Patient::all());
    }
    public function show_pregnancies()
    {
        $patients_pregnancy = DB::table('patients')->join('diagnosis_pregnancies', 'patients.id', '=', 'diagnosis_pregnancies.patient_id')->get();
        return response()->json([
            "pregnancy" => $patients_pregnancy,
            "total" =>  $patients_pregnancy->count(),
        ]);
    }
    public function show_labors()
    {
        $patients_labors = DB::table('patients')->join('diagnosis_labors', 'patients.id', '=', 'diagnosis_labors.patient_id')->get();
        return response()->json([
            "labors" => $patients_labors,
            "total" =>  $patients_labors->count(),
        ]);
    }
}
