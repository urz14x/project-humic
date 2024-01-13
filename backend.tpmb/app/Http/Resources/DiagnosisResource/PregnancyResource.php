<?php

namespace App\Http\Resources\DiagnosisResource;

use Illuminate\Http\Resources\Json\JsonResource;

class PregnancyResource extends JsonResource
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
            "id" => $this->id,
            "category_service_id" => $this->category_service_id,
            "patient_id" => $this->patient_id,
            "hpht" => $this->hpht,
            "mestruation_time" => $this->mestruation_time,
            "menstruation_cycle" => $this->mestruation_cycle,
            "fetal_movement" => $this->fetal_movement,
            "diseases_are_being_felt" => $this->diseases_are_being_felt,
            "common_complaints" => $this->common_complaints,
            "herbs_consumed" => $this->herbs_consumed,
            "concerns_about_pregnancy" => $this->concerns_about_pregnancy,

        ];
    }
}
