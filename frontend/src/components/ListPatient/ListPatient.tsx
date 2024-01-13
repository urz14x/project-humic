export default function ListPatient({ results }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-sofia">
              <thead className="font-medium border-gray-200  text-colors_primary">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    ID Pemeriksaan
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Nama lengkap
                  </th>
                  <th scope="col" className="px-6 py-4">
                    No Rekam Medik
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.map((patient, index: number) => {
                  //   console.log(
                  //     patient.diagnosis === null
                  //       ? "belum ada pemeriksaan"
                  //       : patient.diagnosis.id
                  //   );
                  return (
                    <tr className="" key={index}>
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        <a
                          href={`/pasien/create/${patient.id}/`}
                          className="underline"
                        >
                          {patient.diagnosis === null ? (
                            <span className="text-sm">
                              Belum ada pemeriksaan
                            </span>
                          ) : (
                            <a
                              href={`/pasien/${patient.id}/detail/`}
                              className=" text-sm"
                            >
                              {patient.id * 2}
                            </a>
                          )}
                        </a>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {patient.fullname}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {patient.no_rm}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
