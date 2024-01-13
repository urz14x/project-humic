<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diagnosis_post_parta', function (Blueprint $table) {
            $table->id();
            $table->foreignId("category_service_id")->constrained()->cascadeOnDelete();
            $table->string("helper_name");
            $table->string("delivery_date");
            $table->string("complications_during_childbirth");
            //
            $table->string("type_of_birth");
            //
            $table->integer("eating_frequency");
            //
            $table->string("type_of_food_consumed");
            //
            $table->string("eating_problem_no_appetite");
            $table->string("eating_problem_nauseous");
            $table->string("eating_problem_vomit");
            //
            $table->string("consuming_medication_fe");
            $table->string("consuming_medication_folic_acid");
            $table->string("consuming_medication_calcium");
            $table->string("consuming_medication_vitamin_a");
            $table->string("consuming_medication_vitamin_neurotropik");
            $table->string("consuming_medication_vitamin_antibiotic");
            $table->string("consuming_medication_vitamin_other_drugs");
            //
            $table->integer("frequency_of_breastfeeding");
            $table->string("long_breastfeeding");
            //
            $table->boolean("postpartum_danger_fatigue");
            $table->boolean("postpartum_danger_hard_to_sleep");
            $table->boolean("postpartum_danger_pain_or_burning_sensation_when_urinating");
            $table->boolean("postpartum_danger_constipation");
            $table->boolean("postpartum_danger_haemorhoid");
            $table->boolean("postpartum_danger_long_migrain");
            $table->boolean("postpartum_danger_epigastric_pain");
            $table->boolean("postpartum_danger_edema");
            $table->boolean("postpartum_danger_adomen_pain");
            $table->boolean("postpartum_danger_many_lochea");
            $table->boolean("postpartum_danger_foul_smelling_lochea");
            $table->boolean("postpartum_danger_mammae_are_swollen_and_heavy");
            $table->boolean("postpartum_danger_papilla_is_scratched");
            $table->boolean("postpartum_danger_difficulty_breastfeeding");
            $table->boolean("postpartum_danger_feeling_very_sad_hopeless");
            $table->boolean("postpartum_danger_feel_unable_to_care_for_the_child");
            $table->boolean("postpartum_danger_impaired_vision_or_night_blindness");

            //
            $table->string("oxygen_saturation_measurement_results");
            //
            $table->string("temperature_measurement_results");
            //
            $table->string("respiration_measurement_results");
            //
            $table->string("measuring_patients_pulse_results");
            //
            $table->string("measuring_systole_and_diastole_results");
            //
            $table->string("breast_examination_results");
            //
            $table->string("bladder_examination_results");
            //
            $table->string("tfu_examination_results");
            //
            $table->string("examination_of_uterine_contractions_or_involution");
            //
            $table->boolean("results_of_abdominal_palpation_surgial_scar");
            $table->boolean("results_of_abdominal_palpation_abdominis_recti");
            $table->boolean("results_of_abdominal_palpation_time");
            //
            $table->string("operative_wound_conditions");
            //
            $table->boolean("foot_examination_results_red_in_calf");
            $table->boolean("foot_examination_results_edema_in_foot");
            $table->boolean("foot_examination_results_varises_in_foot");
            $table->boolean("foot_examination_results_homman");

            //
            $table->string("perineal_wound_examination_results");
            $table->string("the_consistency_and_smell_of_lochea");
            //
            $table->boolean("education_of_postpartum_mothers_masase_uterus");
            $table->boolean("education_of_postpartum_mothers_bonding_baby_mother");
            $table->boolean("education_of_postpartum_mothers_husband_support_in_breastfeeding");
            $table->boolean("education_of_postpartum_mothers_breast_care");
            $table->boolean("education_of_postpartum_mothers_mobilization");
            $table->boolean("education_of_postpartum_mothers_nutrition");
            $table->boolean("education_of_postpartum_mothers_kb");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('diagnosis_post_parta');
    }
};
