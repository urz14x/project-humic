<?php

namespace App\Models\PatientHistory;

use App\Models\CategoryService;
use App\Models\Patient;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class DiagnosisPregnancy extends Model
{
    use HasFactory;
    // protected $fillable = ["category_service_id", "patient_id", "hpht", "mestruation_time", "mestruation_cycle", "fetal_movement", "diseases_are_being_felt", "common_complaints", "herbs_consumed", "concerns_about_pregnancy"];
    protected $guarded = [];
    public function toArray()
    {
        return [
            "Jenis layanan" => $this->category_service->service_name,
            "Hari Pertama Haid Terakhir" => $this->hpht,
            "Lama dan banyak menstruasi" => $this->mestruation_time,
            "Siklus Menstruasi" => $this->mestruation_cycle,
            "Gerakan janin dalam sehari" => $this->fetal_movement,
            "Tanda-tanda bahaya atau penyulit yang dirasakan ibu saat ini" => $this->diseases_are_being_felt,
            "Keluhan umum" => $this->common_complaints,
            "Obat/jamu yang dikonsumsi Ketika merasakan keluhan " => $this->herbs_consumed,
            "Kekhawatiran – kekhawatiran khusus terhadap kehamilan ini" => $this->concerns_about_pregnancy
        ];
    }
    public function patient(): MorphOne
    {
        return $this->morphOne(Patient::class, 'patientable');
    }
    public function category_service()
    {
        return $this->belongsTo(CategoryService::class);
    }
}
