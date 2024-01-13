export default function Nifas() {
  return (
    <section className="max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-tiempos_regular mb-10 text-colors_smooth_black">
        Pelayanan Nifas
      </h1>
      <form className="mt-2 bg-white p-3 rounded-md shadow-sm">
        <div className="flex flex-col space-y-2 mb-3">
          <label
            htmlFor="diseases_are_being_felt"
            className="font-sofia text-sm"
          >
            Penolong persalinan
          </label>
          <input
            type="text"
            className="py-1 px-3 border-2 border-colors_primary focus:outline-none rounded-md font-sofia"
            id="diseases_are_being_felt"
            placeholder="Masukan tanda-tanda"
            // onChange={(e) =>
            //   setValues({ ...values, diseases_are_being_felt: e.target.value })
            // }
            // value={values.diseases_are_being_felt}
          />
        </div>
        <div className="flex flex-col space-y-2 mb-3">
          <label htmlFor="menstruation_time" className="font-sofia text-sm">
            Lama dan banyak menstruasi
          </label>
          <div>
            <div>
              <input
                type="radio"
                className="checked:bg-green-500 text-colors_primary"
                id="hipomenore"
                name="menstruation_time"
              />
              <label htmlFor="hipomenore">&nbsp;1</label>
            </div>
            <div>
              <input type="radio" />
              <label htmlFor="normal">&nbsp;2-7</label>
            </div>
            <div>
              <input type="radio" id="hipermenore" name="menstruation_time" />
              <label htmlFor="hipermenore">&gt;8</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 mb-3">
          <label htmlFor="menstruation_cycle" className="font-sofia text-sm">
            Siklus menstruasi?
          </label>
          <div>
            <div>
              <input
                type="radio"
                // onChange={(e) =>
                //   setValues({ ...values, mestruation_cycle: e.target.value })
                // }
                value="<3"
                id="oligomenore"
                name="menstruation_cycle"
              />
              <label htmlFor="oligomenore">&lt;3</label>
            </div>
            <div>
              <input
                type="radio"
                // onChange={(e) =>
                //   setValues({ ...values, mestruation_cycle: e.target.value })
                // }
                value="3-5"
                id="normal2"
                name="menstruation_cycle"
              />
              <label htmlFor="normal2">&nbsp;3-5</label>
            </div>
            <div>
              <input
                type="radio"
                // onChange={(e) =>
                //   setValues({ ...values, mestruation_cycle: e.target.value })
                // }
                value="5"
                id="polimenore"
                name="menstruation_cycle"
              />
              <label htmlFor="polimenore">&gt;5</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 mb-3">
          <label htmlFor="fetal_movement" className="font-sofia text-sm">
            Gerakan janin dalam sehari ?
          </label>
          <div>
            <div>
              <input
                type="radio"
                id="normal_fetal_movement"
                name="fetal_movement"
                // onChange={(e) =>
                //   setValues({ ...values, fetal_movement: e.target.value })
                // }
                value="≥10"
              />
              <label htmlFor="normal_fetal_movement">&ge;10</label>
            </div>
            <div>
              <input
                type="radio"
                id="abnormal_fetal_movement"
                name="fetal_movement"
                // onChange={(e) =>
                //   setValues({ ...values, fetal_movement: e.target.value })
                // }
                // value="≤10"
              />
              <label htmlFor="abnormal_fetal_movement">&le;10</label>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2 mb-3">
          <label
            htmlFor="diseases_are_being_felt"
            className="font-sofia text-sm"
          >
            Tanda-tanda bahaya atau penyulit yang dirasakan ibu saat ini?
          </label>
          <input
            type="text"
            className="py-1 px-3 border-2 border-colors_primary focus:outline-none rounded-md font-sofia"
            id="diseases_are_being_felt"
            placeholder="Masukan tanda-tanda"
            // onChange={(e) =>
            //   setValues({ ...values, diseases_are_being_felt: e.target.value })
            // }
            // value={values.diseases_are_being_felt}
          />
        </div>
        <div className="flex flex-col space-y-2 mb-3">
          <label htmlFor="common_complaints" className="font-sofia text-sm">
            Keluhan Umum
          </label>
          <input
            type="text"
            className="py-1 px-3 border-2 border-colors_primary focus:outline-none rounded-md font-sofia"
            id="common_complaints"
            // onChange={(e) =>
            //   setValues({ ...values, common_complaints: e.target.value })
            // }
            // value={values.common_complaints}
            placeholder="Masukan Keluhan umum"
          />
        </div>
        <div className="flex flex-col space-y-2 mb-3">
          <label htmlFor="herbs_consumed" className="font-sofia text-sm">
            Obat/jamu yang dikonsumsi Ketika merasakan keluhan
          </label>
          <textarea
            className="py-1 px-3 border-2 border-colors_primary focus:outline-none rounded-md font-sofia"
            id="herbs_consumed"
            // onChange={(e) =>
            //   setValues({ ...values, herbs_consumed: e.target.value })
            // }
            // value={values.herbs_consumed}
            placeholder="Masukan Keluhan umum Obat/jamu"
          />
        </div>
        <div className="flex flex-col space-y-2 mb-3">
          <label
            htmlFor="concerns_about_pregnancy"
            className="font-sofia text-sm"
          >
            Kekhawatiran–kekhawatiran khusus terhadap kehamilan ini
          </label>
          <textarea
            className="py-1 px-3 border-2 border-colors_primary focus:outline-none rounded-md font-sofia"
            id="concerns_about_pregnancy"
            placeholder="Masukan Keluhan Kekhawatiran–kekhawatiran khusus"
            // onChange={(e) =>
            //   setValues({ ...values, concerns_about_pregnancy: e.target.value })
            // }
            // value={values.concerns_about_pregnancy}
          />
        </div>
        <div className="flex flex-col space-y-2 mb-3">
          <button className="w-full h-10 bg-colors_primary rounded-md text-colors_smooth_white font-sofia leading-3 flex items-center justify-center gap-3 hover:bg-colors_secondary transition-colors">
            Buat keluhan kehamilan
          </button>
        </div>
      </form>
    </section>
  );
}
