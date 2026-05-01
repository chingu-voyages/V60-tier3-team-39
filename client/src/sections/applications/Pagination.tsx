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
        className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center disabled:opacity-40 hover:bg-primary/90 transition-colors"
        aria-label="Previous page"
      >
        <FiChevronLeft size={16} />
      </button>

      <span className="text-sm text-gray-600">
        Page {currentPage} / {totalPages}
      </span>

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center disabled:opacity-40 hover:bg-primary/90 transition-colors"
        aria-label="Next page"
      >
        <FiChevronRight size={16} />
      </button>
    </div>
  )
}

export default Pagination
