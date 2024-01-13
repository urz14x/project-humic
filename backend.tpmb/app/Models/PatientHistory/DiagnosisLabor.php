<?php

namespace App\Models\PatientHistory;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use App\Models\CategoryService;
use App\Models\Patient;

class DiagnosisLabor extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function toArray()
    {
        return [
            "Jenis layanan" => $this->category_service->service_name,
            "Screening" => $this->screening,
            "Waktu terakhir Makan" => $this->latest_food,
            "Waktu terakhir Minum" => $this->latest_drink,
            "WaKtu terakhir BAK" => $this->latest_bak,
            "Waktu terahkir BAB" => $this->latest_bab,
            "Waktu terakhir Tidur" => $this->latest_sleep,

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
