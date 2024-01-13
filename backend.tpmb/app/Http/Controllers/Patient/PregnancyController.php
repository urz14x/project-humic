<?php

namespace App\Http\Controllers\Patient;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use App\Models\PatientHistory\DiagnosisPregnancy;
use Illuminate\Http\Request;

class PregnancyController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $attributes = $request->validate([
            "category_service_id" => "required|integer",
            "patient_id" => "required|integer",
            "hpht" => "required|string",
            "mestruation_time" => "required|string",
            "mestruation_cycle" => "required|string",
            "fetal_movement" => "required|string",
            "diseases_are_being_felt" => "required|string",
            "common_complaints" => "required|string",
            "herbs_consumed" => "required|string",
            "concerns_about_pregnancy" => "required|string"
        ]);

        $data = $attributes;
        unset($data['patient_id']);

        $diagnosis = DiagnosisPregnancy::create($data);

        Patient::where('id', $attributes['patient_id'])->update([
            'patientable_type' => DiagnosisPregnancy::class,
            'patientable_id' => $diagnosis->id
        ]);

        return response()->json([
            "message" => "Berhasil membuat data kehamilan"
        ]);
    }
}
