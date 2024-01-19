<?php

namespace App\Http\Controllers\Patient;

use App\Http\Controllers\Controller;
use App\Http\Resources\PatientResource;
use App\Http\Resources\PatientSingleResource;
use App\Models\Patient;
use Illuminate\Http\Request;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $patients = PatientResource::collection(Patient::orderBy("id", "DESC")->paginate(3));
        return $patients;
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $patient = $request->validate([
            "midwife_id" => "required:unique",
            "fullname" => "required|string",
            "place_of_birth" => "required|string",
            "date_of_birth" => "required|string",
            "address" => "required|string",
            "status" => "required|string",
            "nik" => "required|unique:patients",
            "no_rm" => "required|unique:patients",
            "total_payment" => "nullable|string"
        ]);
        Patient::create($patient);
        return response()->json([
            "message" => "Berhasil membuat pasien baru!",
            "patient" => $patient
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function show(Patient $patient)
    {
        return new PatientSingleResource($patient);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Patient $patient)
    {
        $request->validate([
            "total_payment" => "nullable|string"
        ]);;
        $patient->find($patient->id);
        if ($patient) {
            // $patient->midwife_id = $request->midwife_id;
            // $patient->fullname = $request->fullname;
            // $patient->place_of_birth = $request->place_of_birth;
            // $patient->date_of_birth = $request->date_of_birth;
            // $patient->address = $request->address;
            // $patient->status = $request->status;
            $patient->total_payment = $request->total_payment;

            $patient->update();
            return $patient;
        } else {
            return response()->json([
                "pesan" => "Pasien tidak ditemukan"
            ]);
        }
        // $patient = Patient::where("total_payment", null)->update(["total_payment" => "10000"]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function destroy(Patient $patient)
    {
        $patient->delete();
        return response()->json([
            "message" => "Berhasil menghapus pasien!",
            "patient" => $patient
        ]);
    }
}
