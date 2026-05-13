import { FiSearch, FiFilter, FiChevronDown } from 'react-icons/fi'
import { AlignJustify, Kanban } from 'lucide-react';
import type { ViewMode } from '../../types/application'

type Props = {
  search: string
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  view: ViewMode
  onViewChange: (view: ViewMode) => void
}

const ApplicationsToolbar = ({ search, onSearch, view, onViewChange }: Props) => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <div className="flex items-center gap-2 border border-muted/10 rounded-lg px-4 py-2 bg-card">
        <FiSearch className="text-muted shrink-0" size={15} />
        <input
          className="outline-none text-sm bg-transparent w-52"
          placeholder="Search companies, roles..."
          value={search}
          onChange={onSearch}
        />
      </div>

      <button className="flex items-center gap-2 border border-muted/10 rounded-lg px-4 py-2 bg-background-dark  font-heading text-sm text-muted hover:bg-gray-50 transition-colors">
        <FiFilter className="text-gray-400 shrink-0" size={14} />
        Filter
      </button>

      <button className="flex items-center gap-2 border border-muted/10 rounded-lg px-4 py-2 bg-background-dark text-sm text-muted font-heading hover:bg-gray-50 transition-colors">
        Location <FiChevronDown className="text-gray-400 shrink-0" size={14} />
      </button>

      <button className="flex items-center gap-2 border border-muted/10 rounded-lg px-4 py-2 bg-background-dark  font-heading text-sm text-muted hover:bg-gray-50 transition-colors">
        Date <FiChevronDown className="text-gray-400 shrink-0" size={14} />
      </button>

      <div className="flex-1" />

      <div className="flex items-center rounded-lg overflow-hidden border border-muted/10">
        <button
          onClick={() => onViewChange('table')}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${view === 'table' ? 'bg-background-dark text-muted' : 'bg-background-dark text-brand hover:bg-gray-50'
            }`}
        >
          <AlignJustify size={16} />
          Table
        </button>
        <button
          onClick={() => onViewChange('kanban')}
          className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${view === 'kanban' ? 'bg-muted text-background' : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
        >
          <Kanban size={16} />
          Kanban
        </button>
      </div>
    </div>
  )
}

export default ApplicationsToolbar
