<?php
//Persalinan
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
        Schema::create('diagnosis_labors', function (Blueprint $table) {
            $table->id();
            $table->foreignId("category_service_id")->constrained()->cascadeOnDelete();
            //screening
            $table->boolean("screening_history_of_caesarean")->nullable();
            $table->boolean("screening_history_of_pervasive_bleeding")->nullable();
            $table->boolean("screening_under_term_labor_less_37week")->nullable();
            $table->boolean("screening_rupture_of_membranes_with_thick_meconium")->nullable();
            $table->boolean("screening_rupture_of_membranes_greater24hours")->nullable();
            $table->boolean("screening_amniotic_rupture_in_less_than_term_labor_less_37week")->nullable();
            $table->boolean("screening_jaundice")->nullable();
            $table->boolean("screening_anemia")->nullable();
            $table->boolean("screening_signs_or_symptoms_of_infection")->nullable();
            $table->boolean("screening_preeclampsia_or_hypertension_in_pregnancy")->nullable();
            $table->boolean("screening_fundus_height_of_40cm_or_more")->nullable();
            $table->boolean("screening_fetal_distress")->nullable();
            $table->boolean("screening_primpipara_in_active_phase_head_still_5_per_5")->nullable();
            $table->boolean("screening_presentation_instead_of_the_back_of_the_head")->nullable();
            $table->boolean("screening_multiple_compound_presentations")->nullable();
            $table->boolean("screening_multiple_or_gammeli_pregnancy")->nullable();
            $table->boolean("screening_umbilical_cord_fall")->nullable();
            $table->boolean("screening_shock")->nullable();
            $table->boolean("screening_tki_pregnant_women")->nullable();
            $table->boolean("screening_shipping_husband")->nullable();
            $table->boolean("screening_tattooed_husband_or_mother")->nullable();
            $table->boolean("screening_hiv_or_aids")->nullable();
            $table->boolean("screening_pms")->nullable();
            $table->boolean("screening_expensive_child")->nullable();

            $table->text("latest_food");
            $table->text("latest_drink");
            $table->text("latest_bak");
            $table->text("latest_bab");
            $table->text("latest_sleep");
            //
            $table->string("oxygen_saturation");
            //
            $table->string("temperature");
            $table->string("respiration");
            $table->string("pulse");
            $table->string("blood_pressure");
            //Face and neck
            $table->boolean("face_and_neck_hiperpigmentasi")->nullable();
            $table->boolean("face_and_neck_edema")->nullable();
            $table->boolean("face_and_neck_pale_face")->nullable();
            $table->boolean("face_and_neck_sclera_jaundice")->nullable();
            $table->boolean("face_and_neck_nose_polyps")->nullable();
            $table->boolean("face_and_neck_there_is_stomatitis_in_the_mouth")->nullable();
            $table->boolean("face_and_neck_moldy_tongue")->nullable();
            $table->boolean("face_and_neck_dental_caries")->nullable();
            $table->boolean("face_and_neck_enlarged_thyroid_gland")->nullable();
            $table->boolean("face_and_neck_lymph_vessels_enlarge")->nullable();
            $table->boolean("face_and_neck_normal_face_neck")->nullable();
            //Dada
            $table->boolean("chest_symetrical_breasts")->nullable();
            $table->boolean("chest_prominent_papilla")->nullable();
            $table->boolean("chest_flat_papilla")->nullable();
            $table->boolean("chest_papilla_sinking")->nullable();
            $table->boolean("chest_colotrum")->nullable();
            $table->boolean("chest_other_liquids")->nullable();
            $table->boolean("chest_retraction")->nullable();
            $table->boolean("chest_dimpling")->nullable();
            $table->boolean("chest_time")->nullable();
            $table->boolean("chest_swollen_glands")->nullable();
            $table->boolean("chest_normal_chest")->nullable();
            //abdomen
            $table->boolean("abdomen_abdominal_inspection")->nullable();
            $table->boolean("abdomen_striae_gravidarum")->nullable();
            $table->boolean("abdomen_linea_nigra_or_alba")->nullable();
            $table->boolean("abdomen_tfu_as_per_UK")->nullable();
            $table->boolean("abdomen_fetal_movement")->nullable();
            //
            $table->string("abdominal_palpation");
            $table->string("leopold_1");
            $table->string("leopold_2");
            $table->string("leopold_3");
            $table->string("leopold_4");

            $table->string("fetal_heartbeat");
            //
            $table->string("fifths");
            //
            $table->string("his");
            $table->string("his_duration");
            //Vulva vagina
            $table->boolean("vulva_vagina_tears_in_the_vulva")->nullable();
            $table->boolean("vulva_vagina_tears_in_the_vagina")->nullable();
            $table->boolean("vulva_vagina_one_of_the_symptomatic_signs_of_an_ims")->nullable();
            $table->boolean("vulva_vagina_one_of_the_symptomatic_signs_of_prp")->nullable();
            $table->boolean("vulva_vagina_abnormal_fluid")->nullable();
            $table->boolean("vulva_vagina_there_abnormal_tissue")->nullable();
            $table->boolean("vulva_vagina_swelling_of_the_bartolini_gland")->nullable();
            $table->boolean("vulva_vagina_swollen_scene_glands")->nullable();
            $table->boolean("vulva_vagina_abnormal_tissue")->nullable();
            $table->boolean("vulva_vagina_no_abnormalities")->nullable();

            //Checks serviks
            $table->boolean("cervix_thin")->nullable();
            $table->boolean("cervix_thick")->nullable();
            $table->boolean("cervix_soft")->nullable();
            $table->boolean("cervix_stiff")->nullable();
            $table->boolean("cervix_cervical_opening")->nullable();
            $table->integer("cervix_cervical_opening_cm");

            //Amniotic
            $table->boolean("amniotic_intact")->nullable();
            $table->boolean("amniotic_clear")->nullable();
            $table->boolean("amniotic_meconium")->nullable();
            $table->boolean("amniotic_blood")->nullable();
            $table->boolean("amniotic_dry")->nullable();

            $table->string("molasses");
            //
            $table->string("hodge");
            //
            $table->string("station");
            //
            $table->boolean("extremities_edema")->nullable();
            $table->boolean("extremities_cyanotic_fingernails")->nullable();
            $table->boolean("extremities_cyanotic_toenails")->nullable();
            $table->boolean("extremities_poor_skin_turgor")->nullable();
            $table->boolean("extremities_varises")->nullable();
            $table->boolean("extremities_normal")->nullable();
            $table->boolean("extremities_right_hand_patellar_reflex")->nullable();
            $table->boolean("extremities_left_hand_patellar_reflex")->nullable();
            $table->boolean("extremities_right_leg_patella_reflex")->nullable();
            $table->boolean("extremities_left_leg_patella_reflex")->nullable();
            //
            $table->string("protein_urine");
            //
            $table->string("hemoglobin");
            //
            $table->string("urine_glucose");
            //
            $table->string("blood_type");
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
        Schema::dropIfExists('diagnosis_labors');
    }
};
