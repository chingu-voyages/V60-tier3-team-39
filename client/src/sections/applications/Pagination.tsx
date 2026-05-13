import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

type Props = {
  currentPage: number
  totalPages: number
  onPrev: () => void
  onNext: () => void
}

const Pagination = ({ currentPage, totalPages, onPrev, onNext }: Props) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-1">
      <button
        onClick={onPrev}
        disabled={currentPage === 1}
        className="w-9 h-9 rounded-full bg-background-dark text-white flex items-center justify-center border border-muted/10 disabled:opacity-40 hover:bg-background-dark/70 transition-colors cursor-pointer"
        aria-label="Previous page"
      >
        <FiChevronLeft size={16} />
      </button>

      <span className="text-sm text-muted">
        Page {currentPage} / {totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="w-9 h-9 rounded-full bg-background-dark text-white flex items-center justify-center border border-muted/10 disabled:opacity-40 hover:bg-background-dark/70 transition-colors cursor-pointer"
        aria-label="Next page"
      >
        <FiChevronRight size={16} />
      </button>
    </div>
  )
}

export default Pagination
