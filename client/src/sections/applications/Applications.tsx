import { useState, useMemo } from 'react'
import data from '../../data/data.json'
import type { Application, ViewMode } from '../../types/application'
import { ITEMS_PER_PAGE } from '../../types/application'
import ApplicationsToolbar from './ApplicationsToolbar'
import ApplicationsTable from './ApplicationsTable'
import Pagination from './Pagination'
// import Applications Kanban from './ApplicationsKanban'

const Applications = () => {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [view, setView] = useState<ViewMode>('table')

  const applications = data.applications as Application[]

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return applications.filter(
      (app) =>
        app.company.toLowerCase().includes(q) ||
        app.role.toLowerCase().includes(q)
    )
  }, [search, applications])

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE))
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setCurrentPage(1)
  }

  return (
    <section className="flex-1 p-6 flex flex-col gap-4">
      <ApplicationsToolbar
        search={search}
        onSearch={handleSearch}
        view={view}
        onViewChange={setView}
      />
      {view === 'table' ? (
        <>
          <ApplicationsTable applications={paginated} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPrev={() => setCurrentPage((p) => Math.max(1, p - 1))}
            onNext={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          />
        </>
      ) : (
        // replace null with <ApplicationsKanban applications={filtered} />
        null
      )}
    </section>
  )
}

export default Applications
