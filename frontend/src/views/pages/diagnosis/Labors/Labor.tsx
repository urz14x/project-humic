import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
export default function Labor() {
  const redirect = useNavigate();
  const { id } = useParams();
  //   console.log(id);
  const [errors, setErrors] = useState<string>("");
  const [values, setValues] = useState<string | number | boolean | any>({
    category_service_id: 2,
    patient_id: id,
    screening_history_of_caesarean: 0,
    screening_history_of_pervasive_bleeding: 0,
    screening_under_term_labor_less_37week: 0,
    screening_rupture_of_membranes_with_thick_meconium: 0,
    screening_rupture_of_membranes_greater24hours: 0,
    screening_amniotic_rupture_in_less_than_term_labor_less_37week: 0,
    screening_jaundice: 0,
    screening_anemia: 0,
    screening_signs_or_symptoms_of_infection: 0,
    screening_preeclampsia_or_hypertension_in_pregnancy: 0,
    screening_fundus_height_of_40cm_or_more: 0,
    screening_fetal_distress: 0,
    screening_primpipara_in_active_phase_head_still_5_per_5: 0,
    screening_presentation_instead_of_the_back_of_the_head: 0,
    screening_multiple_compound_presentations: 0,
    screening_multiple_or_gammeli_pregnancy: 0,
    screening_umbilical_cord_fall: 0,
    screening_shock: 0,
    screening_tki_pregnant_women: 0,
    screening_shipping_husband: 0,
    screening_tattooed_husband_or_mother: 0,
    screening_hiv_or_aids: 0,
    screening_pms: 0,
    screening_expensive_child: 0,

    latest_drink: "",
    latest_bak: "",
    latest_bab: "",
    latest_sleep: "",
    latest_food: "",

    oxygen_saturation: "",
    temperature: "",
    respiration: "",
    pulse: "",
    blood_pressure: "",

    face_and_neck_hiperpigmentasi: false,
    face_and_neck_edema: false,
    face_and_neck_pale_face: false,
    face_and_neck_sclera_jaundice: false,
    face_and_neck_nose_polyps: false,
    face_and_neck_there_is_stomatitis_in_the_mouth: false,
    face_and_neck_moldy_tongue: false,
    face_and_neck_dental_caries: false,
    face_and_neck_enlarged_thyroid_gland: false,
    face_and_neck_lymph_vessels_enlarge: false,
    face_and_neck_normal_face_neck: false,

    chest_symetrical_breasts: 0,
    chest_prominent_papilla: 0,
    chest_flat_papilla: 0,
    chest_papilla_sinking: 0,
    chest_colotrum: 0,
    chest_other_liquids: 0,
    chest_retraction: 0,
    chest_dimpling: 0,
    chest_time: 0,
    chest_swollen_glands: 0,
    chest_normal_chest: 0,

    abdomen_abdominal_inspection: false,
    abdomen_striae_gravidarum: false,
    abdomen_linea_nigra_or_alba: false,
    abdomen_tfu_as_per_UK: false,
    abdomen_fetal_movement: false,

    abdominal_palpation: "",
    leopold_1: "",
    leopold_2: "",
    leopold_3: "",
    leopold_4: "",

    fetal_heartbeat: "",
    fifths: "",
    his: "",
    his_duration: "",

    vulva_vagina_tears_in_the_vulva: 0,
    vulva_vagina_tears_in_the_vagina: 0,
    vulva_vagina_one_of_the_symptomatic_signs_of_an_ims: 0,
    vulva_vagina_one_of_the_symptomatic_signs_of_prp: 0,
    vulva_vagina_abnormal_fluid: 0,
    vulva_vagina_there_abnormal_tissue: 0,
    vulva_vagina_swelling_of_the_bartolini_gland: 0,
    vulva_vagina_swollen_scene_glands: 0,
    vulva_vagina_abnormal_tissue: 0,
    vulva_vagina_no_abnormalities: 0,

    cervix_thin: 0,
    cervix_thick: 0,
    cervix_soft: 0,
    cervix_stiff: 0,
    cervix_cervical_opening: 0,
    cervix_cervical_opening_cm: 0,

    amniotic_intact: 0,
    amniotic_clear: 0,
    amniotic_meconium: 0,
    amniotic_blood: 0,
    amniotic_dry: 0,

    molasses: "",
    hodge: "",
    station: "",

    extremities_edema: 0,
    extremities_cyanotic_fingernails: 0,
    extremities_cyanotic_toenails: 0,
    extremities_varises: 0,
    extremities_poor_skin_turgor: 0,
    extremities_normal: 0,
    extremities_right_hand_patellar_reflex: 0,
    extremities_left_hand_patellar_reflex: 0,
    extremities_right_leg_patella_reflex: 0,
    extremities_left_leg_patella_reflex: 0,

    protein_urine: "",
    hemoglobin: "",
    urine_glucose: "",
    blood_type: "",
  });
  console.log(values.fifths);
  console.log(values.cervix_thin);
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await toast.promise(
        axios.post("/patients/labor", values),
        {
          pending: "Sedang Mencatat riwayat pasien",
          success: "Berhasil Mencatat riwayat pasien 👌",
          error: "Error mencatat riwayat pasien",
        }
      );
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      //   setValues({
      //     category_service_id: 2
      //     patient_id: id,
      //     latest_drink: "",
      //     latest_bak: "",
      //     latest_bab: "",
      //     latest_sleep: "",
      //   });
      redirect("/pasien/laporan");
      console.log(response);
    } catch (error) {
      console.log(error);
      setErrors(error.response.data?.errors);
    }
  };
  return (
    <section className="w-full mx-auto">
      <h1 className="text-3xl text-center font-tiempos_regular mb-10 text-colors_smooth_black">
        Riwayat Pelayanan Persalinan
      </h1>
      <form
        onSubmit={submitHandler}
        className="mt-2 bg-white p-3 rounded-md shadow-sm"
      >
        <div className="flex flex-col space-y-2 mb-3">
          <table className="w-full text-sm text-left text-colors_primary_low bg-colors_primary font-sofia rounded-md">
            <thead className="text-xs  uppercase font-sofia">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Penapisan
                </th>
                <th scope="col" className="px-6 py-3">
                  Ya
                </th>
                <th scope="col" className="px-6 py-3">
                  Tidak
                </th>
              </tr>
            </thead>
            <tbody className="text-colors_primary_low">
              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Riwayat Bedah Caesar
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_history_of_caesarean"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_history_of_caesarean: e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_history_of_caesarean"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_history_of_caesarean: e.target.value,
                      })
                    }
                  />
                </th>
              </tr>

              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Riwayat Perdarahan pervagina
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_history_of_pervasive_bleeding"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_history_of_pervasive_bleeding: e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_history_of_pervasive_bleeding"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_history_of_pervasive_bleeding: e.target.value,
                      })
                    }
                  />
                </th>
              </tr>

              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Persalinan Kurang bulan ( &lt; 37 minggu )
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_under_term_labor_less_37week"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_under_term_labor_less_37week: e.target.value,
                      })
                    }
                    id="yes"
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_under_term_labor_less_37week"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_under_term_labor_less_37week: e.target.value,
                      })
                    }
                  />
                </th>
              </tr>

              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Ketuban pecah dengan mekonium kental
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_rupture_of_membranes_with_thick_meconium"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_rupture_of_membranes_with_thick_meconium:
                          e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_rupture_of_membranes_with_thick_meconium"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_rupture_of_membranes_with_thick_meconium:
                          e.target.value,
                      })
                    }
                  />
                </th>
              </tr>

              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  ketuban pecah ( &gt; 24 jam )
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_rupture_of_membranes_greater24hours"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_rupture_of_membranes_greater24hours:
                          e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_rupture_of_membranes_greater24hours"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_rupture_of_membranes_greater24hours:
                          e.target.value,
                      })
                    }
                  />
                </th>
              </tr>
              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Ketuban pecah pada persalinan kurang bulan (&lt; 37 minggu)
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_amniotic_rupture_in_less_than_term_labor_less_37week"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_amniotic_rupture_in_less_than_term_labor_less_37week:
                          e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_amniotic_rupture_in_less_than_term_labor_less_37week"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_amniotic_rupture_in_less_than_term_labor_less_37week:
                          e.target.value,
                      })
                    }
                  />
                </th>
              </tr>
              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Ikterus
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_jaundice"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_jaundice: e.target.value,
                      })
                    }
                    id="yes"
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_jaundice"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_jaundice: e.target.value,
                      })
                    }
                    id="no"
                  />
                </th>
              </tr>
              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Anemia
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_anemia"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_anemia: e.target.value,
                      })
                    }
                    id="yes"
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_anemia"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_anemia: e.target.value,
                      })
                    }
                    id="no"
                  />
                </th>
              </tr>
              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Tanda atau gejala infeksi
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_signs_or_symptoms_of_infection"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_signs_or_symptoms_of_infection:
                          e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_signs_or_symptoms_of_infection"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_signs_or_symptoms_of_infection:
                          e.target.value,
                      })
                    }
                  />
                </th>
              </tr>
              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Preeklamsia / Hipertensi dalam kehamilan
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_preeclampsia_or_hypertension_in_pregnancy"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_preeclampsia_or_hypertension_in_pregnancy:
                          e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_preeclampsia_or_hypertension_in_pregnancy"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_preeclampsia_or_hypertension_in_pregnancy:
                          e.target.value,
                      })
                    }
                  />
                </th>
              </tr>
              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Tinggi fundus 40cm atau lebih
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_fundus_height_of_40cm_or_more"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_fundus_height_of_40cm_or_more: e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_fundus_height_of_40cm_or_more"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_fundus_height_of_40cm_or_more: e.target.value,
                      })
                    }
                  />
                </th>
              </tr>
              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Gawat janin
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_fetal_distress"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_fetal_distress: e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_fetal_distress"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_fetal_distress: e.target.value,
                      })
                    }
                    id="no"
                  />
                </th>
              </tr>
              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Primpipara dalam fase aktif kepala masih 5/5
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_primpipara_in_active_phase_head_still_5_per_5"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_primpipara_in_active_phase_head_still_5_per_5:
                          e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_primpipara_in_active_phase_head_still_5_per_5"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_primpipara_in_active_phase_head_still_5_per_5:
                          e.target.value,
                      })
                    }
                  />
                </th>
              </tr>
              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Presentasi bukan belakang kepala
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_presentation_instead_of_the_back_of_the_head"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_presentation_instead_of_the_back_of_the_head:
                          e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_presentation_instead_of_the_back_of_the_head"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_presentation_instead_of_the_back_of_the_head:
                          e.target.value,
                      })
                    }
                  />
                </th>
              </tr>
              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Presentasi ganda (majemuk)
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_multiple_compound_presentations"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_multiple_compound_presentations:
                          e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_multiple_compound_presentations"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_multiple_compound_presentations:
                          e.target.value,
                      })
                    }
                  />
                </th>
              </tr>
              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Kehamilan ganda atau gammeli
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_multiple_or_gammeli_pregnancy"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_multiple_or_gammeli_pregnancy: e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_multiple_or_gammeli_pregnancy"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_multiple_or_gammeli_pregnancy: e.target.value,
                      })
                    }
                  />
                </th>
              </tr>
              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Tali pusar menumbung
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_umbilical_cord_fall"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_umbilical_cord_fall: e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_umbilical_cord_fall"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_umbilical_cord_fall: e.target.value,
                      })
                    }
                  />
                </th>
              </tr>
              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Syok
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_shock"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_shock: e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_shock"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_shock: e.target.value,
                      })
                    }
                  />
                </th>
              </tr>
              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Bumil TKI
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_tki_pregnant_women"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_tki_pregnant_women: e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_tki_pregnant_women"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_tki_pregnant_women: e.target.value,
                      })
                    }
                  />
                </th>
              </tr>
              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Suami Pelayaran
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_shipping_husband"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_shipping_husband: e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_shipping_husband"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_shipping_husband: e.target.value,
                      })
                    }
                  />
                </th>
              </tr>
              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Suami atau bumil bertato
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_tattooed_husband_or_mother"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_tattooed_husband_or_mother: e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_tattooed_husband_or_mother"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_tattooed_husband_or_mother: e.target.value,
                      })
                    }
                  />
                </th>
              </tr>
              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  HIV / AIDS
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_hiv_or_aids"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_hiv_or_aids: e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_hiv_or_aids"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_hiv_or_aids: e.target.value,
                      })
                    }
                  />
                </th>
              </tr>
              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  PMS
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_pms"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_pms: e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_pms"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_pms: e.target.value,
                      })
                    }
                  />
                </th>
              </tr>
              <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  Anak mahal
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_expensive_child"
                    id="yes"
                    value={1}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_expensive_child: e.target.value,
                      })
                    }
                  />
                </th>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                  <input
                    type="radio"
                    name="screening_expensive_child"
                    id="no"
                    value={0}
                    onChange={(e) =>
                      setValues({
                        ...values,
                        screening_expensive_child: e.target.value,
                      })
                    }
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex lg:flex-row flex-col items-center space-x-0 lg:space-x-5">
          <div className="flex flex-col space-y-2 mb-3 w-full lg:w-1/2">
            <label htmlFor="latest_food" className="font-sofia text-sm">
              Waktu terakhir makan
            </label>
            <input
              type="text"
              className="py-1 px-3 border-2 border-colors_primary focus:outline-none rounded-md font-sofia"
              id="latest_food"
              placeholder="Masukan waktu terakhir makan"
              onChange={(e) =>
                setValues({
                  ...values,
                  latest_food: e.target.value,
                })
              }
              value={values.latest_food}
            />
          </div>
          <div className="flex flex-col space-y-2 mb-3 w-full lg:w-1/2">
            <label htmlFor="latest_drink" className="font-sofia text-sm">
              Waktu Terakhir Minum
            </label>
            <input
              type="text"
              className="py-1 px-3 border-2 border-colors_primary focus:outline-none rounded-md font-sofia"
              id="latest_drink"
              placeholder="Masukan Waktu Terakhir Minum"
              onChange={(e) =>
                setValues({
                  ...values,
                  latest_drink: e.target.value,
                })
              }
              value={values.latest_drink}
            />
          </div>
        </div>
        {/* Pembatas */}
        <div className="flex lg:flex-row flex-col items-center space-x-0 lg:space-x-5">
          <div className="flex flex-col space-y-2 mb-3 w-full lg:w-1/2">
            <label htmlFor="latest_bak" className="font-sofia text-sm">
              Waktu Terakhir Buang Air Kecil
            </label>
            <input
              type="text"
              className="py-1 px-3 border-2 border-colors_primary focus:outline-none rounded-md font-sofia"
              id="latest_bak"
              onChange={(e) =>
                setValues({ ...values, latest_bak: e.target.value })
              }
              value={values.latest_bak}
              placeholder="Waktu Terakhir Buang Air Kecil"
            />
          </div>
          <div className="flex flex-col space-y-2 mb-3 w-full lg:w-1/2">
            <label htmlFor="latest_bab" className="font-sofia text-sm">
              Waktu Terakhir Buang Air Besar
            </label>
            <input
              type="text"
              className="py-1 px-3 border-2 border-colors_primary focus:outline-none rounded-md font-sofia"
              id="latest_bab"
              onChange={(e) =>
                setValues({ ...values, latest_bab: e.target.value })
              }
              value={values.latest_bab}
              placeholder="Waktu Terakhir Buang Air Besar"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2 mb-3">
          <label htmlFor="latest_sleep" className="font-sofia text-sm">
            Waktu Terakhir Tidur
          </label>
          <textarea
            className="py-1 px-3 border-2 border-colors_primary focus:outline-none rounded-md font-sofia"
            id="latest_sleep"
            placeholder="Waktu Terakhir Tidur"
            onChange={(e) =>
              setValues({ ...values, latest_sleep: e.target.value })
            }
            value={values.latest_sleep}
          />
        </div>
        <div>
          <h2 className="font-tiempos_regular text-slate-500 text-xl border-b-2 border-slate-300 mb-4">
            Tanda Tanda Vital
          </h2>
        </div>

        <div className="flex flex-col mb-3">
          <label
            htmlFor="oxygen_saturation"
            className="font-sofia text-base text-slate-700 font-bold"
          >
            Saturasi Oksigen
          </label>
          <div>
            <input
              type="radio"
              name="oxygen_saturation"
              id="oxygen_saturation_a"
              onChange={(e) =>
                setValues({ ...values, oxygen_saturation: e.target.value })
              }
              value="95-100%"
            />
            <label htmlFor="oxygen_saturation_a">95-100%</label>
          </div>
          <div>
            <input
              type="radio"
              name="oxygen_saturation"
              id="oxygen_saturation_b"
              onChange={(e) =>
                setValues({ ...values, oxygen_saturation: e.target.value })
              }
              value="< 95%"
            />
            <label htmlFor="oxygen_saturation_b">&lt; 95%</label>
          </div>
        </div>

        <div className="flex flex-col mb-3">
          {errors.temperature ? (
            <p className="text-sm text-red-600 font-sofia">Wajib di isi</p>
          ) : (
            ""
          )}
          <label
            htmlFor="temperature"
            className="font-sofia text-base text-slate-700 font-bold"
          >
            Pengukuran suhu
          </label>
          <div>
            <input
              type="radio"
              name="temperature"
              id="temperature_hipotermi"
              onChange={(e) =>
                setValues({ ...values, temperature: e.target.value })
              }
              value="Hipotermi"
            />
            <label htmlFor="temperature_hipotermi">Hipotermi</label>
          </div>
          <div>
            <input
              type="radio"
              name="temperature"
              id="temperature_normal"
              onChange={(e) =>
                setValues({ ...values, temperature: e.target.value })
              }
              value="Normal"
            />
            <label htmlFor="temperature_normal">Normal</label>
          </div>
          <div>
            <input
              type="radio"
              name="temperature"
              id="temperature_febris"
              onChange={(e) =>
                setValues({ ...values, temperature: e.target.value })
              }
              value="Febris"
            />
            <label htmlFor="temperature_febris">Febris</label>
          </div>
        </div>

        <div className="flex flex-col mb-3">
          {errors.respiration ? (
            <p className="text-sm text-red-600 font-sofia">Wajib di isi</p>
          ) : (
            ""
          )}
          <label
            htmlFor="Respirasi"
            className="font-sofia text-base text-slate-700 font-bold"
          >
            Respirasi
          </label>
          <div>
            <input
              type="radio"
              name="respirasi"
              id="respirasi_normal"
              onChange={(e) =>
                setValues({ ...values, respiration: e.target.value })
              }
              value="Normal 12-24 kali/menit"
            />
            <label htmlFor="respirasi_normal">Normal 12-24 kali/menit</label>
          </div>
          <div>
            <input
              type="radio"
              name="respirasi"
              id="respirasi_abnormal"
              onChange={(e) =>
                setValues({ ...values, respiration: e.target.value })
              }
              value="Abnormal < 12 atau > 24Kali/Menit"
            />
            <label htmlFor="respirasi_abnormal">
              Abnormal &lt; 12 atau &gt; 24 kali /menit
            </label>
          </div>
        </div>

        <div className="flex flex-col mb-3">
          {errors.pulse ? (
            <p className="text-sm text-red-600 font-sofia">Wajib di isi</p>
          ) : (
            ""
          )}
          <label
            htmlFor="pulse"
            className="font-sofia text-base text-slate-700 font-bold"
          >
            Nadi
          </label>
          <div>
            <input
              type="radio"
              name="pulse"
              id="pulse_bradikardi"
              onChange={(e) => setValues({ ...values, pulse: e.target.value })}
              value="Bradikardi"
            />
            <label htmlFor="pulse_bradikardi">Bradikardi</label>
          </div>
          <div>
            <input
              type="radio"
              name="pulse"
              id="pulse_normal"
              onChange={(e) => setValues({ ...values, pulse: e.target.value })}
              value="Normal"
            />
            <label htmlFor="pulse_normal">Normal</label>
          </div>
          <div>
            <input
              type="radio"
              name="pulse"
              id="pulse_takhikardi"
              onChange={(e) => setValues({ ...values, pulse: e.target.value })}
              value="Takhikardi"
            />
            <label htmlFor="pulse_takhikardi">Takhikardi</label>
          </div>
        </div>

        <div className="flex flex-col mb-3">
          {errors.blood_pressure ? (
            <p className="text-sm text-red-600 font-sofia">Wajib di isi</p>
          ) : (
            ""
          )}
          <label
            htmlFor="blood_pressure"
            className="font-sofia text-base text-slate-700 font-bold"
          >
            Tekanan darah
          </label>
          <div>
            <input
              type="radio"
              name="blood_pressure"
              id="blood_pressure_hipotensi"
              onChange={(e) =>
                setValues({ ...values, blood_pressure: e.target.value })
              }
              value="Hipotensi"
            />
            <label htmlFor="blood_pressure_hipotensi">Hipotensi</label>
          </div>
          <div>
            <input
              type="radio"
              name="blood_pressure"
              id="blood_pressure_normal"
              onChange={(e) =>
                setValues({ ...values, blood_pressure: e.target.value })
              }
              value="Normal"
            />
            <label htmlFor="blood_pressure_normal">Normal</label>
          </div>
          <div>
            <input
              type="radio"
              name="blood_pressure"
              id="blood_pressure_hipertensi"
              onChange={(e) =>
                setValues({ ...values, blood_pressure: e.target.value })
              }
              value="Hipertensi"
            />
            <label htmlFor="blood_pressure_hipertensi">Hipertensi</label>
          </div>
        </div>

        {/* Wajah dan leher */}

        <table className="w-full text-sm text-left text-colors_primary_low bg-colors_primary font-sofia rounded-md">
          <thead className="text-xs  uppercase font-sofia">
            <tr>
              <th scope="col" className="px-6 py-3">
                Wajah Dan Leher
              </th>
              <th scope="col" className="px-6 py-3">
                Ya
              </th>
            </tr>
          </thead>
          <tbody className="text-colors_primary_low">
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Hiperpigmentasi
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.face_and_neck_hiperpigmentasi}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      face_and_neck_hiperpigmentasi: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Edema
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.face_and_neck_edema}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      face_and_neck_edema: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Wajah Pucat
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.face_and_neck_pale_face}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      face_and_neck_pale_face: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Sklera jaundice
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.face_and_neck_sclera_jaundice}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      face_and_neck_sclera_jaundice: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                hidung ada polip
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.face_and_neck_nose_polyps}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      face_and_neck_nose_polyps: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Mulut ada stomatitis
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={
                    values.face_and_neck_there_is_stomatitis_in_the_mouth
                  }
                  onChange={(e) =>
                    setValues({
                      ...values,
                      face_and_neck_there_is_stomatitis_in_the_mouth: e.target
                        .checked
                        ? 1
                        : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Lidah berjamur
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.face_and_neck_moldy_tongue}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      face_and_neck_moldy_tongue: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Gigi caries
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.face_and_neck_dental_caries}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      face_and_neck_dental_caries: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Kelenjar tiroid membesar
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.face_and_neck_enlarged_thyroid_gland}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      face_and_neck_enlarged_thyroid_gland: e.target.checked
                        ? 1
                        : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Pembuluh darah limfe membesar
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.face_and_neck_lymph_vessels_enlarge}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      face_and_neck_lymph_vessels_enlarge: e.target.checked
                        ? 1
                        : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Normal
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.face_and_neck_normal_face_neck}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      face_and_neck_normal_face_neck: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
          </tbody>
        </table>

        <table className="w-full text-sm text-left text-colors_primary_low bg-colors_primary font-sofia rounded-md">
          <thead className="text-xs  uppercase font-sofia">
            <tr>
              <th scope="col" className="px-6 py-3">
                Dada
              </th>
              <th scope="col" className="px-6 py-3">
                Ya
              </th>
            </tr>
          </thead>
          <tbody className="text-colors_primary_low">
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Payudara simetris
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.chest_symetrical_breasts}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      chest_symetrical_breasts: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Papilla menonjol
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.chest_prominent_papilla}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      chest_prominent_papilla: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Papilla datar
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.chest_flat_papilla}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      chest_flat_papilla: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Papilla tengelam
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.chest_papilla_sinking}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      chest_papilla_sinking: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Kolostrum ada
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.chest_colotrum}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      chest_colotrum: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Ada cairan lain
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.chest_other_liquids}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      chest_other_liquids: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Ada Retraksi
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.chest_retraction}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      chest_retraction: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Ada dimpling
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.chest_dimpling}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      chest_dimpling: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Ada masa
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.chest_time}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      chest_time: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Ada pembengkakan kelenjar
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.chest_swollen_glands}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      chest_swollen_glands: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Normal
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.chest_normal_chest}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      chest_normal_chest: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
          </tbody>
        </table>

        <table className="w-full text-sm text-left text-colors_primary_low bg-colors_primary font-sofia rounded-md">
          <thead className="text-xs  uppercase font-sofia">
            <tr>
              <th scope="col" className="px-6 py-3">
                Abdomen
              </th>
              <th scope="col" className="px-6 py-3">
                Ya
              </th>
            </tr>
          </thead>
          <tbody className="text-colors_primary_low">
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Ada bekas luka operasi
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.abdomen_abdominal_inspection}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      abdomen_abdominal_inspection: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Ada strie gravidarum
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.abdomen_striae_gravidarum}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      abdomen_striae_gravidarum: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Ada linea nigra/alba
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.abdomen_linea_nigra_or_alba}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      abdomen_linea_nigra_or_alba: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                TFU sesuai UK
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.abdomen_tfu_as_per_UK}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      abdomen_tfu_as_per_UK: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Ada gerakan janin
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.abdomen_fetal_movement}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      abdomen_fetal_movement: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-col space-y-2 mb-3 w-full">
          <label htmlFor="latest_food" className="font-sofia text-sm">
            Palpasi Abdomen
          </label>
          <input
            type="text"
            className="py-1 px-3 border-2 border-colors_primary focus:outline-none rounded-md font-sofia"
            id="latest_food"
            placeholder="Input hasil pengukuran abdomen dan menilai kesesuaian antara umur kehamilan dengan besar uterus"
            onChange={(e) =>
              setValues({
                ...values,
                abdominal_palpation: e.target.value,
              })
            }
            value={values.abdominal_palpation}
          />
        </div>

        <div className="flex lg:flex-row flex-col items-center space-x-0 lg:space-x-5">
          <div className="flex flex-col space-y-2 mb-3 w-full lg:w-1/2">
            {errors.leopold_1 ||
            errors.leopold_2 ||
            errors.leopold_3 ||
            errors.leopold_4 ? (
              <p className="text-sm text-red-600 font-sofia">
                Semua kolom wajib di isi
              </p>
            ) : (
              ""
            )}
            <label htmlFor="latest_food" className="font-sofia text-sm">
              Leopold I
            </label>
            <input
              type="text"
              className="py-1 px-3 border-2 border-colors_primary focus:outline-none rounded-md font-sofia"
              id="latest_food"
              placeholder="Input hasil pemeriksaan Leopold I"
              onChange={(e) =>
                setValues({
                  ...values,
                  leopold_1: e.target.value,
                })
              }
              value={values.leopold_1}
            />
          </div>
          <div className="flex flex-col space-y-2 mb-3 w-full lg:w-1/2">
            <label htmlFor="leopold_2" className="font-sofia text-sm">
              Leopold II
            </label>
            <input
              type="text"
              className="py-1 px-3 border-2 border-colors_primary focus:outline-none rounded-md font-sofia"
              id="leopold_2"
              placeholder="Input hasil pemeriksaan Leopold II"
              onChange={(e) =>
                setValues({
                  ...values,
                  leopold_2: e.target.value,
                })
              }
              value={values.leopold_2}
            />
          </div>
        </div>
        <div className="flex lg:flex-row flex-col items-center space-x-0 lg:space-x-5">
          <div className="flex flex-col space-y-2 mb-3 w-full lg:w-1/2">
            <label htmlFor="leopold_3" className="font-sofia text-sm">
              Leopold III
            </label>
            <input
              type="text"
              className="py-1 px-3 border-2 border-colors_primary focus:outline-none rounded-md font-sofia"
              id="leopold_3"
              placeholder="Input hasil pemeriksaan Leopold III"
              onChange={(e) =>
                setValues({
                  ...values,
                  leopold_3: e.target.value,
                })
              }
              value={values.leopold_3}
            />
          </div>
          <div className="flex flex-col space-y-2 mb-3 w-full lg:w-1/2">
            <label htmlFor="leopold_4" className="font-sofia text-sm">
              Leopold IV
            </label>
            <input
              type="text"
              className="py-1 px-3 border-2 border-colors_primary focus:outline-none rounded-md font-sofia"
              id="leopold_4"
              placeholder="Input hasil pemeriksaan Leopold IV"
              onChange={(e) =>
                setValues({
                  ...values,
                  leopold_4: e.target.value,
                })
              }
              value={values.leopold_4}
            />
          </div>
        </div>
        <div className="flex flex-col mb-3">
          {errors.fetal_heartbeat ? (
            <p className="text-sm text-red-600 font-sofia">Wajib di isi</p>
          ) : (
            ""
          )}
          <label
            htmlFor="fetal_heartbeat"
            className="font-sofia text-base text-slate-700 font-bold"
          >
            Detak jantung janin DJJ
          </label>
          <div>
            <input
              type="radio"
              name="fetal_heartbeat"
              id="fetal_heartbeat_normal"
              onChange={(e) =>
                setValues({ ...values, fetal_heartbeat: e.target.value })
              }
              value="Normal"
            />
            <label htmlFor="fetal_heartbeat_normal">Normal</label>
          </div>
          <div>
            <input
              type="radio"
              name="fetal_heartbeat"
              id="fetal_heartbeat_abnormal"
              onChange={(e) =>
                setValues({ ...values, fetal_heartbeat: e.target.value })
              }
              value="Abnormal"
            />
            <label htmlFor="fetal_heartbeat_abnormal">Abnormal</label>
          </div>
        </div>
        <div className="flex flex-col mb-3">
          {errors.fifths ? (
            <p className="text-sm text-red-600 font-sofia">Wajib di isi</p>
          ) : (
            ""
          )}
          <label
            htmlFor="fifths"
            className="font-sofia text-base text-slate-700 font-bold"
          >
            Perlimaan
          </label>
          <div>
            <input
              type="radio"
              name="fifths"
              id="fifths_1"
              onChange={(e) => setValues({ ...values, fifths: e.target.value })}
              value="1/5"
            />
            <label htmlFor="fifths_1">1/5</label>
          </div>
          <div>
            <input
              type="radio"
              name="fifths"
              id="fifths_2"
              onChange={(e) => setValues({ ...values, fifths: e.target.value })}
              value="2/5"
            />
            <label htmlFor="fifths_2">2/5</label>
          </div>
          <div>
            <input
              type="radio"
              name="fifths"
              id="fifths_3"
              onChange={(e) => setValues({ ...values, fifths: e.target.value })}
              value="3/5"
            />
            <label htmlFor="fifths_3">3/5</label>
          </div>
          <div>
            <input
              type="radio"
              name="fifths"
              id="fifths_4"
              onChange={(e) => setValues({ ...values, fifths: e.target.value })}
              value="4/5"
            />
            <label htmlFor="fifths_4">4/5</label>
          </div>
          <div>
            <input
              type="radio"
              name="fifths"
              id="fifths_5"
              onChange={(e) => setValues({ ...values, fifths: e.target.value })}
              value="5/5"
            />
            <label htmlFor="fifths_5">5/5</label>
          </div>
        </div>
        <div className="flex flex-col mb-3">
          {errors.his ? (
            <p className="text-sm text-red-600 font-sofia">Wajib di isi</p>
          ) : (
            ""
          )}
          <label
            htmlFor="frequency_his"
            className="font-sofia text-base text-slate-700 font-bold"
          >
            Frekuensi HIS Dalam 10 menit
          </label>
          <div>
            <input
              type="radio"
              name="frequency_his"
              id="frequency_his_1"
              onChange={(e) => setValues({ ...values, his: e.target.value })}
              value="< 1 kali"
            />
            <label htmlFor="frequency_his_1">&lt; 1 kali</label>
          </div>
          <div>
            <input
              type="radio"
              name="frequency_his"
              id="frequency_his_2"
              onChange={(e) => setValues({ ...values, his: e.target.value })}
              value="1 Kali"
            />
            <label htmlFor="frequency_his_2">1 kali</label>
          </div>
          <div>
            <input
              type="radio"
              name="frequency_his"
              id="frequency_his_3"
              onChange={(e) => setValues({ ...values, his: e.target.value })}
              value="2 Kali"
            />
            <label htmlFor="frequency_his_3">2 kali</label>
          </div>
          <div>
            <input
              type="radio"
              name="frequency_his"
              id="frequency_his_4"
              onChange={(e) => setValues({ ...values, his: e.target.value })}
              value="3 Kali"
            />
            <label htmlFor="frequency_his_4">3 kali</label>
          </div>
          <div>
            <input
              type="radio"
              name="frequency_his"
              id="frequency_his_5"
              onChange={(e) => setValues({ ...values, his: e.target.value })}
              value="4 Kali"
            />
            <label htmlFor="frequency_his_5">4 kali</label>
          </div>
          <div>
            <input
              type="radio"
              name="frequency_his"
              id="frequency_his_6"
              onChange={(e) => setValues({ ...values, his: e.target.value })}
              value="> 5 Kali"
            />
            <label htmlFor="frequency_his_6">&gt; 5 kali</label>
          </div>
        </div>
        <div className="flex flex-col mb-3">
          {errors.his_duration ? (
            <p className="text-sm text-red-600 font-sofia">Wajib di isi</p>
          ) : (
            ""
          )}
          <label
            htmlFor="his_duration"
            className="font-sofia text-base text-slate-700 font-bold"
          >
            Durasi His
          </label>
          <div>
            <input
              type="radio"
              name="his"
              id="his_duration_1"
              onChange={(e) =>
                setValues({ ...values, his_duration: e.target.value })
              }
              value="< 20 Detik"
            />
            <label htmlFor="his_duration_1">&lt; 20 Detik</label>
          </div>
          <div>
            <input
              type="radio"
              name="his"
              id="his_duration_2"
              onChange={(e) =>
                setValues({ ...values, his_duration: e.target.value })
              }
              value="20 - 40 Detik"
            />
            <label htmlFor="his_duration_2">20-40 detik</label>
          </div>
          <div>
            <input
              type="radio"
              name="his"
              id="his_duration_3"
              onChange={(e) =>
                setValues({ ...values, his_duration: e.target.value })
              }
              value="> 40 Detik"
            />
            <label htmlFor="his_duration_3">&gt; 40 Detik</label>
          </div>
        </div>

        <table className="w-full text-sm text-left text-colors_primary_low bg-colors_primary font-sofia rounded-md">
          <thead className="text-xs  uppercase font-sofia">
            <tr>
              <th scope="col" className="px-6 py-3">
                Vulva Vagina
              </th>
              <th scope="col" className="px-6 py-3">
                Ada
              </th>
            </tr>
          </thead>
          <tbody className="text-colors_primary_low">
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Ada Robekan di vulva
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.vulva_vagina_tears_in_the_vulva}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      vulva_vagina_tears_in_the_vulva: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Ada Robekan di vagina
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.vulva_vagina_tears_in_the_vagina}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      vulva_vagina_tears_in_the_vagina: e.target.checked
                        ? 1
                        : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                salah satu tanda gejala IMS
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={
                    values.vulva_vagina_one_of_the_symptomatic_signs_of_an_ims
                  }
                  onChange={(e) =>
                    setValues({
                      ...values,
                      vulva_vagina_one_of_the_symptomatic_signs_of_an_ims: e
                        .target.checked
                        ? 1
                        : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                salah satu tanda gejala PRP
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={
                    values.vulva_vagina_one_of_the_symptomatic_signs_of_prp
                  }
                  onChange={(e) =>
                    setValues({
                      ...values,
                      vulva_vagina_one_of_the_symptomatic_signs_of_prp: e.target
                        .checked
                        ? 1
                        : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Cairan abnormal
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.vulva_vagina_abnormal_fluid}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      vulva_vagina_abnormal_fluid: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Ada jaringan abnormal
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.vulva_vagina_there_abnormal_tissue}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      vulva_vagina_there_abnormal_tissue: e.target.checked
                        ? 1
                        : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Pembengkakan kelenjar Bartolini
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.vulva_vagina_swelling_of_the_bartolini_gland}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      vulva_vagina_swelling_of_the_bartolini_gland: e.target
                        .checked
                        ? 1
                        : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Pembengkakan kelenjar scene
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.vulva_vagina_swollen_scene_glands}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      vulva_vagina_swollen_scene_glands: e.target.checked
                        ? 1
                        : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Jaringan abnormal
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.vulva_vagina_abnormal_tissue}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      vulva_vagina_abnormal_tissue: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Tak ada kelainan
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.vulva_vagina_no_abnormalities}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      vulva_vagina_no_abnormalities: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
          </tbody>
        </table>
        <table className="w-full text-sm text-left text-colors_primary_low bg-colors_primary font-sofia rounded-md">
          <thead className="text-xs  uppercase font-sofia">
            <tr>
              <th scope="col" className="px-6 py-3">
                Pemeriksaan Serviks
              </th>
              <th scope="col" className="px-6 py-3">
                Ya
              </th>
            </tr>
          </thead>
          <tbody className="text-colors_primary_low">
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Tipis
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.cervix_thin}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      cervix_thin: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Tebal
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.cervix_thick}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      cervix_thick: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Lunak
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.cervix_soft}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      cervix_soft: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Kaku
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.cervix_stiff}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      cervix_stiff: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Ada pembukaan
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.cervix_cervical_opening}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      cervix_cervical_opening: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col space-y-2 mb-3 w-1/5 p-5">
          <label htmlFor="latest_food" className="font-sofia text-sm">
            Pembukaan Serviks (Cm)
          </label>
          <div className="flex items-center space-x-5">
            <input
              type="input"
              id="quantity"
              name="quantity"
              className="border-4 border-colors_primary h-10 px-2 rounded-md focus:ring-2 ring-colors_primary focus:outline-none transition-all"
              onChange={(e) =>
                setValues({
                  ...values,
                  cervix_cervical_opening_cm: e.target.value,
                })
              }
              value={values.cervix_cervical_opening_cm}
            />

            <span className="font-bold">CM</span>
            {errors.cervix_cervical_opening_cm ? (
              <p className="text-sm text-red-600 font-sofia">Wajib di isi</p>
            ) : (
              ""
            )}
          </div>
        </div>
        <table className="w-full text-sm text-left text-colors_primary_low bg-colors_primary font-sofia rounded-md">
          <thead className="text-xs uppercase font-sofia">
            <tr>
              <th scope="col" className="px-6 py-3">
                Selaput Ketuban
              </th>
              <th scope="col" className="px-6 py-3">
                Ya
              </th>
            </tr>
          </thead>
          <tbody className="text-colors_primary_low">
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Utuh
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.amniotic_intact}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      amniotic_intact: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Jernih
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.amniotic_clear}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      amniotic_clear: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Meconium
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.amniotic_meconium}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      amniotic_meconium: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Darah
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.amniotic_blood}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      amniotic_blood: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Kering
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.amniotic_dry}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      amniotic_dry: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col mb-3">
          {errors.molasses ? (
            <p className="text-sm text-red-600 font-sofia">Wajib di isi</p>
          ) : (
            ""
          )}
          <label
            htmlFor="molasses"
            className="font-sofia text-base text-slate-700 font-bold"
          >
            Pemeriksaan Molase
          </label>
          <div>
            <input
              type="radio"
              name="molasses"
              id="molasses_1"
              onChange={(e) =>
                setValues({ ...values, molasses: e.target.value })
              }
              value="0"
            />
            <label htmlFor="molasses_1">0 Jika sutura terpisah</label>
          </div>
          <div>
            <input
              type="radio"
              name="molasses"
              id="molasses_2"
              onChange={(e) =>
                setValues({ ...values, molasses: e.target.value })
              }
              value="1"
            />
            <label htmlFor="molasses_2">
              1 Jika sutura yang tepat bersesuaian
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="molasses"
              id="molasses_3"
              onChange={(e) =>
                setValues({ ...values, molasses: e.target.value })
              }
              value="2"
            />
            <label htmlFor="molasses_3">
              2 jika sutura 24 umpeng tindih tetapi dapat diperbaiki
            </label>
          </div>
          <div>
            <input
              type="radio"
              name="molasses"
              id="molasses_4"
              onChange={(e) =>
                setValues({ ...values, molasses: e.target.value })
              }
              value="3"
            />
            <label htmlFor="molasses_4">
              3 jika sutura tumpeng tindih tetapi tidak dapat diperbaiki
            </label>
          </div>
        </div>
        <div className="flex flex-col mb-3">
          {errors.hodge ? (
            <p className="text-sm text-red-600 font-sofia">Wajib di isi</p>
          ) : (
            ""
          )}
          <label
            htmlFor="hodge"
            className="font-sofia text-base text-slate-700 font-bold"
          >
            Pemeriksaan Hodge
          </label>
          <div>
            <input
              type="radio"
              name="hodge"
              id="hodge_1"
              onChange={(e) => setValues({ ...values, hodge: e.target.value })}
              value="Hodge I"
            />
            <label htmlFor="hodge_1">Hodge I</label>
          </div>
          <div>
            <input
              type="radio"
              name="hodge"
              id="hodge_2"
              onChange={(e) => setValues({ ...values, hodge: e.target.value })}
              value="Hodge II"
            />
            <label htmlFor="hodge_2">Hodge II</label>
          </div>

          <div>
            <input
              type="radio"
              name="hodge"
              id="hodge_3"
              onChange={(e) => setValues({ ...values, hodge: e.target.value })}
              value="Hodge III"
            />
            <label htmlFor="hodge_3">Hodge III</label>
          </div>
          <div>
            <input
              type="radio"
              name="hodge"
              id="hodge_4"
              onChange={(e) => setValues({ ...values, hodge: e.target.value })}
              value="Hodge IV"
            />
            <label htmlFor="hodge_4">Hodge IV</label>
          </div>
        </div>

        <div className="flex flex-col mb-3">
          {errors.station ? (
            <p className="text-sm text-red-600 font-sofia">Wajib di isi</p>
          ) : (
            ""
          )}
          <label
            htmlFor="station"
            className="font-sofia text-base text-slate-700 font-bold"
          >
            Pemeriksaan Station
          </label>
          <div>
            <input
              type="radio"
              name="station"
              id="station_1"
              onChange={(e) =>
                setValues({ ...values, station: e.target.value })
              }
              value="Station -5"
            />
            <label htmlFor="station_1">Station -5</label>
          </div>
          <div>
            <input
              type="radio"
              name="station"
              id="station_2"
              onChange={(e) =>
                setValues({ ...values, station: e.target.value })
              }
              value="Station -4"
            />
            <label htmlFor="station_2">Station -4</label>
          </div>
          <div>
            <input
              type="radio"
              name="station"
              id="station_3"
              onChange={(e) =>
                setValues({ ...values, station: e.target.value })
              }
              value="Station -3"
            />
            <label htmlFor="station_3">Station -3</label>
          </div>
          <div>
            <input
              type="radio"
              name="station"
              id="station_4"
              onChange={(e) =>
                setValues({ ...values, station: e.target.value })
              }
              value="Station -2"
            />
            <label htmlFor="station_4">Station -2</label>
          </div>
          <div>
            <input
              type="radio"
              name="station"
              id="station_5"
              onChange={(e) =>
                setValues({ ...values, station: e.target.value })
              }
              value="Station -1"
            />
            <label htmlFor="station_5">Station -1</label>
          </div>
          <div>
            <input
              type="radio"
              name="station"
              id="station_6"
              onChange={(e) =>
                setValues({ ...values, station: e.target.value })
              }
              value="Station 0"
            />
            <label htmlFor="station_6">Station 0</label>
          </div>
          <div>
            <input
              type="radio"
              name="station"
              id="station_7"
              onChange={(e) =>
                setValues({ ...values, station: e.target.value })
              }
              value="Station +1"
            />
            <label htmlFor="station_7">Station +1</label>
          </div>
          <div>
            <input
              type="radio"
              name="station"
              id="station_8"
              onChange={(e) =>
                setValues({ ...values, station: e.target.value })
              }
              value="Station +2"
            />
            <label htmlFor="station_8">Station +2</label>
          </div>
          <div>
            <input
              type="radio"
              name="station"
              id="station_9"
              onChange={(e) =>
                setValues({ ...values, station: e.target.value })
              }
              value="Station +3"
            />
            <label htmlFor="station_9">Station +3</label>
          </div>
          <div>
            <input
              type="radio"
              name="station"
              id="station_10"
              onChange={(e) =>
                setValues({ ...values, station: e.target.value })
              }
              value="Station +4"
            />
            <label htmlFor="station_10">Station +4</label>
          </div>
          <div>
            <input
              type="radio"
              name="station"
              id="station_11"
              onChange={(e) =>
                setValues({ ...values, station: e.target.value })
              }
              value="Station +5"
            />
            <label htmlFor="station_11">Station +5</label>
          </div>
        </div>
        <table className="w-full text-sm text-left text-colors_primary_low bg-colors_primary font-sofia rounded-md">
          <thead className="text-xs  uppercase font-sofia">
            <tr>
              <th scope="col" className="px-6 py-3">
                Ekstremitas
              </th>
              <th scope="col" className="px-6 py-3">
                Ya
              </th>
            </tr>
          </thead>
          <tbody className="text-colors_primary_low">
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Edema
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.extremities_edema}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      extremities_edema: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                kuku tangan sianosis
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.extremities_cyanotic_fingernails}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      extremities_cyanotic_fingernails: e.target.checked
                        ? 1
                        : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                kuku kaki sianosis
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.extremities_cyanotic_toenails}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      extremities_cyanotic_toenails: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Turgor kulit buruk
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.extremities_poor_skin_turgor}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      extremities_poor_skin_turgor: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Ada varises
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.extremities_varises}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      extremities_varises: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Normal
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.extremities_normal}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      extremities_normal: e.target.checked ? 1 : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Ada refleks patella tangan kanan
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.extremities_right_hand_patellar_reflex}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      extremities_right_hand_patellar_reflex: e.target.checked
                        ? 1
                        : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Ada refleks patella tangan kiri
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.extremities_left_hand_patellar_reflex}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      extremities_left_hand_patellar_reflex: e.target.checked
                        ? 1
                        : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Ada refleks patella kaki kanan
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.extremities_right_leg_patella_reflex}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      extremities_right_leg_patella_reflex: e.target.checked
                        ? 1
                        : 0,
                    })
                  }
                />
              </th>
            </tr>
            <tr className="bg-white hover:bg-colors_primary_low text-colors_smooth_black hover:shadow-sm">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                Ada refleks patella kaki kiri
              </th>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                <input
                  type="checkbox"
                  name="yes"
                  id="yes"
                  checked={values.extremities_left_leg_patella_reflex}
                  onChange={(e) =>
                    setValues({
                      ...values,
                      extremities_left_leg_patella_reflex: e.target.checked
                        ? 1
                        : 0,
                    })
                  }
                />
              </th>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col mb-3">
          <h2 className="font-tiempos_regular text-slate-500 text-xl border-b-2 border-slate-300 mb-5">
            Tes Laboratorium
          </h2>
        </div>
        <div className="flex flex-col mb-3">
          {errors.protein_urine ? (
            <p className="text-sm text-red-600 font-sofia">Wajib di isi</p>
          ) : (
            ""
          )}
          <label
            htmlFor="extremities"
            className="font-sofia text-base text-slate-700 font-bold"
          >
            Pemeriksaan Urine
          </label>
          <div>
            <input
              type="radio"
              name="urine"
              id="urine_1"
              onChange={(e) =>
                setValues({ ...values, protein_urine: e.target.value })
              }
              value="Positif 1"
            />
            <label htmlFor="urine_1">Positif 1</label>
          </div>
          <div>
            <input
              type="radio"
              name="urine"
              id="urine_2"
              onChange={(e) =>
                setValues({ ...values, protein_urine: e.target.value })
              }
              value="Positif 2"
            />
            <label htmlFor="urine_2">Positif 2</label>
          </div>
          <div>
            <input
              type="radio"
              name="urine"
              id="urine_3"
              onChange={(e) =>
                setValues({ ...values, protein_urine: e.target.value })
              }
              value="Positif 3"
            />
            <label htmlFor="urine_3">Positif 3</label>
          </div>
          <div>
            <input
              type="radio"
              name="urine"
              id="urine_4"
              onChange={(e) =>
                setValues({ ...values, protein_urine: e.target.value })
              }
              value="Positif 4"
            />
            <label htmlFor="urine_4">Positif 4</label>
          </div>
        </div>
        <div className="flex flex-col mb-3">
          {errors.hemoglobin ? (
            <p className="text-sm text-red-600 font-sofia">Wajib di isi</p>
          ) : (
            ""
          )}
          <label
            htmlFor="hemogoblin"
            className="font-sofia text-base text-slate-700 font-bold"
          >
            Hemoglobin
          </label>
          <div>
            <input
              type="radio"
              name="hemogoblin"
              id="hemogoblin_1"
              onChange={(e) =>
                setValues({ ...values, hemoglobin: e.target.value })
              }
              value="Normal TM I Dan III 11g/dL"
            />
            <label htmlFor="hemogoblin_1">Normal TM I Ddan III 11g/dL</label>
          </div>
          <div>
            <input
              type="radio"
              name="hemogoblin"
              id="hemogoblin_2"
              onChange={(e) =>
                setValues({ ...values, hemoglobin: e.target.value })
              }
              value="Normal TM II < 10,5 g/dL"
            />
            <label htmlFor="hemogoblin_2">Normal TM II &gt; 10,5 g/dL</label>
          </div>
          <div>
            <input
              type="radio"
              name="hemogoblin"
              id="hemogoblin_3"
              onChange={(e) =>
                setValues({ ...values, hemoglobin: e.target.value })
              }
              value="Abnormal"
            />
            <label htmlFor="hemogoblin_3">Abnormal</label>
          </div>
        </div>

        <div className="flex flex-col mb-3">
          {errors.urine_glucose ? (
            <p className="text-sm text-red-600 font-sofia">Wajib di isi</p>
          ) : (
            ""
          )}
          <label
            htmlFor="glucosa_urine"
            className="font-sofia text-base text-slate-700 font-bold"
          >
            Glukosa Urine
          </label>
          <div>
            <input
              type="radio"
              name="glucosa_urine"
              id="glucosa_urine_normal"
              onChange={(e) =>
                setValues({ ...values, urine_glucose: e.target.value })
              }
              value="Normal"
            />
            <label htmlFor="glucosa_urine_normal">Normal</label>
          </div>
          <div>
            <input
              type="radio"
              name="glucosa_urine"
              id="glucosa_urine_abnormal"
              onChange={(e) =>
                setValues({ ...values, urine_glucose: e.target.value })
              }
              value="Abnormal"
            />
            <label htmlFor="glucosa_urine_abnormal">Abnormal</label>
          </div>
        </div>

        <div className="flex flex-col mb-3">
          {errors.blood_type ? (
            <p className="text-sm text-red-600 font-sofia">Wajib di isi</p>
          ) : (
            ""
          )}
          <label
            htmlFor="blood_type"
            className="font-sofia text-base text-slate-700 font-bold"
          >
            Golongan darah
          </label>
          <div>
            <input
              type="radio"
              name="blood_type"
              id="blood_type_a"
              onChange={(e) =>
                setValues({ ...values, blood_type: e.target.value })
              }
              value="A"
            />
            <label htmlFor="blood_type_a">A</label>
          </div>
          <div>
            <input
              type="radio"
              name="blood_type"
              id="blood_type_b"
              onChange={(e) =>
                setValues({ ...values, blood_type: e.target.value })
              }
              value="B"
            />
            <label htmlFor="blood_type_b">B</label>
          </div>
          <div>
            <input
              type="radio"
              name="blood_type"
              id="blood_type_o"
              onChange={(e) =>
                setValues({ ...values, blood_type: e.target.value })
              }
              value="O"
            />
            <label htmlFor="blood_type_o">O</label>
          </div>
          <div>
            <input
              type="radio"
              name="blood_type"
              id="blood_type_ab"
              onChange={(e) =>
                setValues({ ...values, blood_type: e.target.value })
              }
              value="AB"
            />
            <label htmlFor="blood_type_ab">AB</label>
          </div>
        </div>
        <div className="flex flex-col space-y-2 mb-3">
          <button className="w-full h-10 bg-colors_primary rounded-md text-colors_smooth_white font-sofia leading-3 gap-3 hover:bg-colors_secondary transition-colors">
            Buat keluhan kehamilan
          </button>
        </div>
      </form>
    </section>
  );
}
