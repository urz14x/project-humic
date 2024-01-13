import { Link, useParams } from "react-router-dom";
import { TServices } from "../../../ts/types/global_types";

export default function Diagnosis() {
  const { id } = useParams();
  const services: TServices[] = [
    { menu: "Kehamilan", slug: "kehamilan" },
    { menu: "Persalinan", slug: "persalinan" },
    { menu: "Nifas", slug: "nifas" },
    { menu: "Keluarga Berencana", slug: "keluarga-berencana" },
    { menu: "Kesehatan Produksi", slug: "kesehatan-produksi" },
    { menu: "Balita Tumbuh", slug: "balita-tumbuh" },
    { menu: "Balita Kembang", slug: "balita-kembang" },
    { menu: "Balita Mental Emosional", slug: "balita-mental-emosional" },
  ];
  return (
    <section className="flex items-center flex-col">
      <h1 className="text-5xl font-tiempos_regular mb-20 text-colors_smooth_black border-b-4 border-colors_primary ">
        Pilihan Layanan
      </h1>
      <div className="flex flex-wrap gap-4">
        {services.map((service, idx: number) => {
          return (
            <Link
              key={idx}
              to={`/pasien/create/${id}/${service.slug}`}
              className="bg-colors_primary hover:bg-slate-500 transition-colors font-bold font-sofia text-colors_smooth_white p-8 rounded-md shadow-sm"
            >
              {service.menu}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
