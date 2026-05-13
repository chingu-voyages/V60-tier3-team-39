import { useMemo, useState } from 'react'
import { DndContext, PointerSensor, closestCorners, useDroppable, useSensor, useSensors, type DragEndEvent } from '@dnd-kit/core'
import { SortableContext, arrayMove, rectSortingStrategy, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Plus } from 'lucide-react'
import { FaLocationDot } from 'react-icons/fa6'
import type { Application, ApplicationStatus } from '../../types/application'

type Props = {
  applications: Application[]
  onStatusChange: (id: number, status: ApplicationStatus) => void
}

const COLUMN_ORDER: ApplicationStatus[] = ['Saved', 'Applied', 'Interview', 'Offer', 'Rejected']

const COLUMN_STYLES: Record<ApplicationStatus, string> = {
  Saved: 'bg-inprog-bg',
  Applied: 'bg-applied-bg',
  Interview: 'bg-interv-bg',
  Offer: 'bg-brand-bg',
  Rejected: 'bg-reject-bg',
}

const COLUMN_HEADER_COLORS: Record<ApplicationStatus, string> = {
  Saved: 'var(--color-inprog)',
  Applied: 'var(--color-applied)',
  Interview: 'var(--color-interv)',
  Offer: 'var(--color-brand)',
  Rejected: 'var(--color-reject)',
}

const columnId = (status: ApplicationStatus) => `column-${status}`

const KanbanCard = ({ app }: { app: Application }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: String(app.id),
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <article
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`cursor-grab rounded-[10px] border border-muted/10 bg-card p-3 transition active:cursor-grabbing ${isDragging ? 'cursor-grabbing opacity-70' : ''}`}
    >
      <div className="flex flex-col gap-3 bg-card">
        <p className="text-[16px] font-bold font-heading">{app.company}</p>
        <p className="text-[14px] font-medium text-muted">{app.role}</p>

        <div className="inline-flex w-fit self-start rounded-md border border-foreground/20 px-2 py-0.5 text-[12px] font-medium text-foreground]">
          {app.workType}
        </div>

        <div className="flex items-center justify-between text-[12px] font-medium text-muted">
          <p className="inline-flex items-center gap-1">
            <FaLocationDot size={12} />
            {app.location}
          </p>
          <p>{app.appliedDate}</p>
        </div>
      </div>
    </article>
  )
}

const KanbanColumn = ({ status, apps }: { status: ApplicationStatus; apps: Application[] }) => {
  const { setNodeRef } = useDroppable({ id: columnId(status) })

  return (
    <section className={`min-w-73.5 flex-1 rounded-lg border-0 p-6 shadow-none ${COLUMN_STYLES[status]}`}>
      <h3 className='mb-3 text-lg font-semibold font-heading'
        style={{ color: COLUMN_HEADER_COLORS[status] }}>{status}</h3>
      <div ref={setNodeRef} className="space-y-3">
        <SortableContext items={apps.map((app) => String(app.id))} strategy={rectSortingStrategy}>
          {apps.map((app) => (
            <KanbanCard key={app.id} app={app} />
          ))}
        </SortableContext>

        <button className="w-full rounded-[10px] border border-muted/40 p-3.5 text-left text-[12px] font-medium text-[#8898A9] transition cursor-pointer">
          <span className="inline-flex items-center gap-1">
            <Plus size={14} />
            Add Card
          </span>
        </button>
      </div>
    </section>
  )
}

const ApplicationsKanban = ({ applications, onStatusChange }: Props) => {
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }))
  const [manualOrder, setManualOrder] = useState<string[]>([])

  const appById = useMemo(
    () => new Map(applications.map((app) => [String(app.id), app])),
    [applications]
  )

  const orderedIds = useMemo(() => {
    const currentIds = applications.map((app) => String(app.id))
    const currentSet = new Set(currentIds)
    const preserved = manualOrder.filter((id) => currentSet.has(id))
    const additions = currentIds.filter((id) => !preserved.includes(id))
    return [...preserved, ...additions]
  }, [applications, manualOrder])

  const orderedApps = useMemo(
    () => orderedIds.map((id) => appById.get(id)).filter((app): app is Application => Boolean(app)),
    [orderedIds, appById]
  )

  const grouped = useMemo(() => {
    const base = Object.fromEntries(COLUMN_ORDER.map((status) => [status, [] as Application[]])) as Record<ApplicationStatus, Application[]>

    for (const app of orderedApps) {
      if (!base[app.status]) {
        base.Saved.push(app)
      } else {
        base[app.status].push(app)
      }
    }

    return base
  }, [orderedApps])

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over) return

    const activeId = String(active.id)
    const overId = String(over.id)

    if (activeId === overId) return

    const activeApp = appById.get(activeId)
    if (!activeApp) return

    const nextStatus: ApplicationStatus = overId.startsWith('column-')
      ? (overId.replace('column-', '') as ApplicationStatus)
      : appById.get(overId)?.status ?? activeApp.status

    if (nextStatus !== activeApp.status) {
      onStatusChange(activeApp.id, nextStatus)
    }

    setManualOrder(() => {
      const prev = orderedIds
      const oldIndex = prev.indexOf(activeId)
      if (oldIndex === -1) return prev

      if (!overId.startsWith('column-')) {
        const newIndex = prev.indexOf(overId)
        if (newIndex === -1) return prev
        return arrayMove(prev, oldIndex, newIndex)
      }

      const next = prev.filter((id) => id !== activeId)
      const lastInTargetColumn = next.reduce((lastIndex, id, index) => {
        const status = id === activeId ? nextStatus : appById.get(id)?.status
        return status === nextStatus ? index : lastIndex
      }, -1)

      next.splice(lastInTargetColumn + 1, 0, activeId)
      return next
    })
  }

  return (
    <div className="overflow-x-auto pb-2">
      <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <div className="flex min-w-max gap-5">
          {COLUMN_ORDER.map((status) => (
            <KanbanColumn key={status} status={status} apps={grouped[status]} />
          ))}
        </div>
      </DndContext>
    </div>
  )
}

export default ApplicationsKanban
