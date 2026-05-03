import { useState, useMemo } from 'react'
import data from '../../data/data.json'
import type { Application, ViewMode } from '../../types/application'
import { ITEMS_PER_PAGE } from '../../types/application'
import ApplicationsToolbar from './ApplicationsToolbar'
import ApplicationsTable from './ApplicationsTable'
import ApplicationsKanban from './ApplicationsKanban'
import Pagination from './Pagination'

const Applications = () => {
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [view, setView] = useState<ViewMode>('table')
  const [applicationList, setApplicationList] = useState<Application[]>(() => data.applications as Application[])

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    return applicationList.filter(
      (app) =>
        app.company.toLowerCase().includes(q) ||
        app.role.toLowerCase().includes(q)
    )
  }, [search, applicationList])

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE))
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setCurrentPage(1)
  }

  const handleStatusChange = (id: number, status: Application['status']) => {
    setApplicationList((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status } : app))
    )
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
        <ApplicationsKanban applications={filtered} onStatusChange={handleStatusChange} />
      )}
    </section>
  )
}

export default Applications
