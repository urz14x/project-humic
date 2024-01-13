<?php

namespace App\Http\Controllers\Patient;

use App\Models\Patient;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\PatientHistory\DiagnosisLabor;

class LaborController extends Controller
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
            "screening_history_of_caesarean" => "required|boolean",
            "screening_history_of_pervasive_bleeding" => "required|boolean",
            "screening_under_term_labor_less_37week" => "required|boolean",
            "screening_rupture_of_membranes_with_thick_meconium" => "required|boolean",
            "screening_rupture_of_membranes_greater24hours" => "required|boolean",
            "screening_amniotic_rupture_in_less_than_term_labor_less_37week" => "required|boolean",
            "screening_jaundice" => "required|boolean",
            "screening_anemia" => "required|boolean",
            "screening_signs_or_symptoms_of_infection" => "required|boolean",
            "screening_preeclampsia_or_hypertension_in_pregnancy" => "required|boolean",
            "screening_fundus_height_of_40cm_or_more" => "required|boolean",
            "screening_fetal_distress" => "required|boolean",
            "screening_primpipara_in_active_phase_head_still_5_per_5" => "required|boolean",
            "screening_presentation_instead_of_the_back_of_the_head" => "required|boolean",
            "screening_multiple_compound_presentations" => "required|boolean",
            "screening_multiple_or_gammeli_pregnancy" => "required|boolean",
            "screening_umbilical_cord_fall" => "required|boolean",
            "screening_shock" => "required|boolean",
            "screening_tki_pregnant_women" => "required|boolean",
            "screening_shipping_husband" => "required|boolean",
            "screening_tattooed_husband_or_mother" => "required|boolean",
            "screening_hiv_or_aids" => "required|boolean",
            "screening_pms" => "required|boolean",
            "screening_expensive_child" => "required|boolean",

            "latest_food" => "required|string",
            "latest_drink" => "required|string",
            "latest_bak" => "required|string",
            "latest_bab" => "required|string",
            "latest_sleep" => "required|string",
            //
            "oxygen_saturation" => "required|string",
            //
            "temperature" => "required|string",
            "respiration" => "required|string",
            "pulse" => "required|string",
            "blood_pressure" => "required|string",
            //
            "face_and_neck_hiperpigmentasi" => "required|boolean",
            "face_and_neck_edema" => "required|boolean",
            "face_and_neck_pale_face" => "required|boolean",
            "face_and_neck_sclera_jaundice" => "required|boolean",
            "face_and_neck_nose_polyps" => "required|boolean",
            "face_and_neck_there_is_stomatitis_in_the_mouth" => "required|boolean",
            "face_and_neck_moldy_tongue" => "required|boolean",
            "face_and_neck_dental_caries" => "required|boolean",
            "face_and_neck_enlarged_thyroid_gland" => "required|boolean",
            "face_and_neck_lymph_vessels_enlarge" => "required|boolean",
            "face_and_neck_normal_face_neck" => "required|boolean",


            "chest_symetrical_breasts" => "required|boolean",
            "chest_prominent_papilla" => "required|boolean",
            "chest_flat_papilla" => "required|boolean",
            "chest_papilla_sinking" => "required|boolean",
            "chest_colotrum" => "required|boolean",
            "chest_other_liquids" => "required|boolean",
            "chest_retraction" => "required|boolean",
            "chest_dimpling" => "required|boolean",
            "chest_time" => "required|boolean",
            "chest_swollen_glands" => "required|boolean",
            "chest_normal_chest" => "required|boolean",

            "abdomen_abdominal_inspection" => "required|boolean",
            "abdomen_striae_gravidarum" => "required|boolean",
            "abdomen_linea_nigra_or_alba" => "required|boolean",
            "abdomen_tfu_as_per_UK" => "required|boolean",
            "abdomen_fetal_movement" => "required|boolean",

            "abdominal_palpation" => "required|string",
            "leopold_1" => "required|string",
            "leopold_2" => "required|string",
            "leopold_3" => "required|string",
            "leopold_4" => "required|string",

            "fetal_heartbeat" => "required|string",
            "fifths" => "required|string",
            "his" => "required|string",
            "his_duration" => "required|string",

            "vulva_vagina_tears_in_the_vulva" => "required|boolean",
            "vulva_vagina_tears_in_the_vagina" => "required|boolean",
            "vulva_vagina_one_of_the_symptomatic_signs_of_an_ims" => "required|boolean",
            "vulva_vagina_one_of_the_symptomatic_signs_of_prp" => "required|boolean",
            "vulva_vagina_abnormal_fluid" => "required|boolean",
            "vulva_vagina_there_abnormal_tissue" => "required|boolean",
            "vulva_vagina_swelling_of_the_bartolini_gland" => "required|boolean",
            "vulva_vagina_swollen_scene_glands" => "required|boolean",
            "vulva_vagina_abnormal_tissue" => "required|boolean",
            "vulva_vagina_no_abnormalities" => "required|boolean",

            "cervix_thin" => "required|boolean",
            "cervix_thick" => "required|boolean",
            "cervix_soft" => "required|boolean",
            "cervix_stiff" => "required|boolean",
            "cervix_cervical_opening" => "required|boolean",
            "cervix_cervical_opening_cm" => "required|integer",

            "amniotic_intact" => "required|boolean",
            "amniotic_clear" => "required|boolean",
            "amniotic_meconium" => "required|boolean",
            "amniotic_blood" => "required|boolean",
            "amniotic_dry" => "required|boolean",

            "molasses" => "required|string",
            "hodge" => "required|string",
            "station" => "required|string",

            "extremities_edema" => "required|boolean",
            "extremities_cyanotic_fingernails" => "required|boolean",
            "extremities_cyanotic_toenails" => "required|boolean",
            "extremities_varises" => "required|boolean",
            "extremities_poor_skin_turgor" => "required|boolean",
            "extremities_normal" => "required|boolean",
            "extremities_right_hand_patellar_reflex" => "required|boolean",
            "extremities_left_hand_patellar_reflex" => "required|boolean",
            "extremities_right_leg_patella_reflex" => "required|boolean",
            "extremities_left_leg_patella_reflex" => "required|boolean",

            "protein_urine" => "required|string",
            "hemoglobin" => "required|string",
            "urine_glucose" => "required|string",
            "blood_type" => "required|string",
        ]);

        $data = $attributes;
        unset($data['patient_id']);

        $diagnosis = DiagnosisLabor::create($data);

        Patient::where('id', $attributes['patient_id'])->update([
            'patientable_type' => DiagnosisLabor::class,
            'patientable_id' => $diagnosis->id
        ]);

        return response()->json([
            "message" => "Berhasil membuat data persalinan"
        ]);
    }
}
