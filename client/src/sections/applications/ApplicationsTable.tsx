import { Pencil, Trash2 } from 'lucide-react';
import type { Application } from '../../types/application'
import { STATUS_STYLES } from '../../types/application'

type Props = {
  applications: Application[]
}

const ApplicationsTable = ({ applications }: Props) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-muted/10">
      <table className="w-full">
        <thead>
          <tr className="bg-background-dark text-xs text-muted font-semibold tracking-wider">
            <th className="text-left px-6 py-4">COMPANY / ROLE</th>
            <th className="text-left px-6 py-4">LOCATION</th>
            <th className="text-left px-6 py-4">STATUS</th>
            <th className="text-left px-6 py-4">APPLIED</th>
            <th className="text-left px-6 py-4">SALARY</th>
            <th className="text-left px-6 py-4">NOTES</th>
            <th className="text-left px-6 py-4">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {applications.length > 0 ? (
            applications.map((app, i) => (
              <tr
                key={app.id}
                className={`hover:bg-background-dark/60 transition-colors ${i < applications.length - 1 ? 'border-b border-muted/10' : ''}`}
              >
                <td className="px-6 py-4">
                  <p className="font-semibold">{app.company}</p>
                  <p className="text-sm text-muted">{app.role}</p>
                </td>

                <td className="px-6 py-4">
                  {app.workType === 'Remote' ? (
                    <p className="text-sm">Remote</p>
                  ) : (
                    <>
                      <p className="text-sm">{app.location}</p>
                      <p className="text-sm text-muted">{app.workType}</p>
                    </>
                  )}
                </td>

                <td className="px-6 py-4">
                  <span className={`text-sm font-medium px-3 py-1 rounded-lg ${STATUS_STYLES[app.status] ?? ''}`}>
                    {app.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm">{app.appliedDate}</td>

                <td className="px-6 py-4 text-sm">
                  <span className="text-brand font-medium">$</span>
                  <span>{app.salaryRange}</span>
                </td>

                <td className="px-6 py-4 text-sm text-muted">{app.notes || '-'}</td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <button className="p-2 rounded-md border border-muted/10 hover:text-inprog hover:border-inprog hover:bg-inprog/20 transition-colors cursor-pointer" aria-label="Edit application">
                      <Pencil size={15} />
                    </button>
                    <button className="hover:text-reject p-2 rounded-md border border-muted/10 hover:border-reject hover:bg-reject/20 transition-colors cursor-pointer" aria-label="Delete application">
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} className="px-6 py-12 text-center text-sm text-gray-400">
                No applications found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ApplicationsTable
