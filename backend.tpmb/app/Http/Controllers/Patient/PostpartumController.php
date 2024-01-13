<?php

namespace App\Http\Controllers\Patient;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use App\Models\PatientHistory\DiagnosisPostPartum;
use Illuminate\Http\Request;

class PostpartumController extends Controller
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
            "helper_name" => "required|string",
            "delivery_date" => "required|string",
            "complications_during_childbirth" => "required|string",
            //
            "type_of_birth"  => "required|string",
            //
            "eating_frequency" => "required|integer",
            //
            "type_of_food_consumed" => "required|integer",
            //
            "eating_problem_no_appetite" => "required|boolean",
            "eating_problem_nauseous" => "required|boolean",
            "eating_problem_vomit" => "required|boolean",
            //
            "consuming_medication_fe" => "required|boolean",
            "consuming_medication_folic_acid" => "required|boolean",
            "consuming_medication_calcium" => "required|boolean",
            "consuming_medication_vitamin_a" => "required|boolean",
            "consuming_medication_vitamin_neurotropik" => "required|boolean",
            "consuming_medication_vitamin_antibiotic" => "required|boolean",
            "consuming_medication_vitamin_other_drugs" => "required|boolean",
            //
            "frequency_of_breastfeeding" => "required|integer",
            "long_breastfeeding" => "required|string",
            //
            "postpartum_danger_fatigue"  => "required|boolean",
            "postpartum_danger_hard_to_sleep" => "required|boolean",
            "postpartum_danger_pain_or_burning_sensation_when_urinating" => "required|boolean",
            "postpartum_danger_constipation" => "required|boolean",
            "postpartum_danger_haemorhoid" => "required|boolean",
            "postpartum_danger_long_migrain" => "required|boolean",
            "postpartum_danger_epigastric_pain" => "required|boolean",
            "postpartum_danger_edema" => "required|boolean",
            "postpartum_danger_adomen_pain" => "required|boolean",
            "postpartum_danger_many_lochea" => "required|boolean",
            "postpartum_danger_foul_smelling_lochea" => "required|boolean",
            "postpartum_danger_mammae_are_swollen_and_heavy" => "required|boolean",
            "postpartum_danger_papilla_is_scratched" => "required|boolean",
            "postpartum_danger_difficulty_breastfeeding" => "required|boolean",
            "postpartum_danger_feeling_very_sad_hopeless" => "required|boolean",
            "postpartum_danger_feel_unable_to_care_for_the_child" => "required|boolean",
            "postpartum_danger_impaired_vision_or_night_blindness" => "required|boolean",
            //
            "oxygen_saturation_measurement_results" => "required|string",
            //
            "temperature_measurement_results" => "required|string",
            //
            "respiration_measurement_results" => "required|string",
            //
            "measuring_patients_pulse_results" => "required|string",
            //
            "measuring_systole_and_diastole_results" => "required|string",
            //
            "breast_examination_results" => "required|string",
            //
            "bladder_examination_results" => "required|string",
            //
            "tfu_examination_results" => "required|string",
            //
            "examination_of_uterine_contractions_or_involution" => "required|string",
            //
            "results_of_abdominal_palpation_surgial_scar" => "required|boolean",
            "results_of_abdominal_palpation_abdominis_recti" => "required|boolean",
            "results_of_abdominal_palpation_time" => "required|boolean",
            //
            "operative_wound_conditions" => "required|string",
            //
            "foot_examination_results_red_in_calf" => "required|boolean",
            "foot_examination_results_edema_in_foot" => "required|boolean",
            "foot_examination_results_varises_in_foot" => "required|boolean",
            "foot_examination_results_homman" => "required|boolean",
            //
            "perineal_wound_examination_results" => "required|string",
            "the_consistency_and_smell_of_lochea" => "required|string",
            //
            "education_of_postpartum_mothers_masase_uterus" => "required|boolean",
            "education_of_postpartum_mothers_bonding_baby_mother" => "required|boolean",
            "education_of_postpartum_mothers_husband_support_in_breastfeeding" => "required|boolean",
            "education_of_postpartum_mothers_breast_care" => "required|boolean",
            "education_of_postpartum_mothers_mobilization" => "required|boolean",
            "education_of_postpartum_mothers_nutrition" => "required|boolean",
            "education_of_postpartum_mothers_kb" => "required|boolean",
        ]);
        $data = $attributes;
        unset($data['patient_id']);

        $diagnosis = DiagnosisPostPartum::create($data);

        Patient::where('id', $attributes['patient_id'])->update([
            'patientable_type' => DiagnosisPostPartum::class,
            'patientable_id' => $diagnosis->id
        ]);
        return response()->json([
            "message" => "Berhasil membuat data Nifas"
        ]);
    }
}
