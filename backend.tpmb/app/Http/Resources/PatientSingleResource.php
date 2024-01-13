<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PatientSingleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "fullname" => $this->fullname,
            "place_of_birth" => $this->place_of_birth,
            "date_of_birth" => $this->date_of_birth,
            "address" => $this->address,
            "status" => $this->status,
            "nik" => $this->nik,
            "no_rm" => $this->no_rm,
            "midwife" => $this->midwife,
            "diagnosis" => $this->patientable
        ];
    }
}
