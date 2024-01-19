<?php

namespace App\Http\Resources\DiagnosisResource;

use Illuminate\Http\Resources\Json\JsonResource;

class LaborResource extends JsonResource
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
            "patient _id" => $this->patient_id,
            "screening_history_of_caesarean" => $this->screening_history_of_caesarean,
            "latest_food" => $this->latest_food,
            "latest_drink" => $this->latest_drink,
            "latest_bab" => $this->latest_bab,
            "latest_sleep" => $this->latest_sleep,

        ];
    }
}
