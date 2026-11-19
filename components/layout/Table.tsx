
const personnel = [
  {
    name: 'Lira Theko',
    qualifications: 'Master’s in Adult Education',
  },
  {
    name: 'Mabela Lehloenya',
    qualifications: 'Honours Degree in LLB',
  },
  {
    name: 'Malefetsane Kasane',
    qualifications: 'Accounts and Procurement',
  },
  {
    name: 'Thato Ramokhotjo',
    qualifications: 'Master’s in Adult Education',
  },
  {
    name: 'Tsikoane Peshoane',
    qualifications: 'Honours Degree in International Relations',
  },
];

export default function TRCPersonnelTable() {
  return (
    <section className="w-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="mb-5 border-l-4 border-[#C9A96E] pl-4">
        <h2 className="text-xl font-bold tracking-tight text-[#064E3B]">
          TRC Personnel
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Personnel qualifications register
        </p>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-[#064E3B] text-white">
              <th className="px-5 py-3.5 text-sm font-semibold">
                Name
              </th>
              <th className="px-5 py-3.5 text-sm font-semibold">
                Qualifications
              </th>
            </tr>
          </thead>

          <tbody>
            {personnel.map((person, index) => (
              <tr
                key={person.name}
                className={`border-b border-gray-100 last:border-0 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <td className="whitespace-nowrap px-5 py-4 text-sm font-medium text-gray-800">
                  {person.name}
                </td>
                <td className="px-5 py-4 text-sm leading-6 text-gray-600">
                  {person.qualifications}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
