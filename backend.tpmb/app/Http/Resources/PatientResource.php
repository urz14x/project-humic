<?php

namespace App\Http\Resources;


use App\Http\Resources\DiagnosisResource\PregnancyResource;
use App\Models\PatientHistory\DiagnosisPregnancy;
use Illuminate\Http\Resources\Json\JsonResource;

class PatientResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return  [
            "id" => $this->id,
            "fullname" => $this->fullname,
            "date_of_birth" => $this->date_of_birth,
            "place_of_birth" => $this->place_of_birth,
            "address" => $this->address,
            "status" => $this->status,
            "nik" => $this->nik,
            "no_rm" => $this->no_rm,
            // "created_at" => $this->created_at->format("d/m/Y"),
            "midwife" => $this->midwife,
            "diagnosis" => $this->patientable

        ];
    }
}
