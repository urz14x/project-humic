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
            "Riwayat Bedah Cesar" => $this->when($this->screening_history_of_caesarean === 0, function ($q) {
                if ($this->screening_history_of_caesarean === 0) {
                    return $this->screening_history_of_caesarean = "Tidak";
                } else {
                    return $this->screening_history_of_caesarean = "Ya";
                }
            }),
            "Riwayat pendarahan pervagina" => $this->when($this->screening_history_of_pervasive_bleeding === 0, function ($q) {
                if ($this->screening_history_of_pervasive_bleeding === 0) {
                    return $this->screening_history_of_pervasive_bleeding = "Tidak";
                } else {
                    return $this->screening_history_of_pervasive_bleeding = "Ya";
                }
            }),

            "Ketuban pecah selama (>24 jam)" => $this->when($this->screening_rupture_of_membranes_greater24hours === 0, function ($q) {
                if ($this->screening_rupture_of_membranes_greater24hours === 0) {
                    return $this->screening_rupture_of_membranes_greater24hours = "Tidak";
                } else {
                    return $this->screening_rupture_of_membranes_greater24hours = "Ya";
                }
            }),
            "Ketuban pecah pada persalinan kurang bulan (<37 minggu)" => $this->when($this->screening_amniotic_rupture_in_less_than_term_labor_less_37week === 0, function ($q) {
                if ($this->screening_amniotic_rupture_in_less_than_term_labor_less_37week === 0) {
                    return $this->screening_amniotic_rupture_in_less_than_term_labor_less_37week = "Tidak";
                } else {
                    return $this->screening_amniotic_rupture_in_less_than_term_labor_less_37week = "Ya";
                }
            }),
            "Ikterus" => $this->when($this->screening_jaundice === 0, function ($q) {
                if ($this->screening_jaundice === 0) {
                    return $this->screening_jaundice = "Tidak";
                } else {
                    return $this->screening_jaundice = "Ya";
                }
            }),
            "Ketuban pecah dengan mekonium kental" => $this->when($this->screening_rupture_of_membranes_with_thick_meconium === 0, function ($q) {
                if ($this->screening_rupture_of_membranes_with_thick_meconium === 0) {
                    return $this->screening_rupture_of_membranes_with_thick_meconium = "Tidak";
                } else {
                    return $this->screening_rupture_of_membranes_with_thick_meconium = "Ya";
                }
            }),
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
