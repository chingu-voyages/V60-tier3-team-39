export type ApplicationStatus = 'Saved' | 'Interview' | 'Applied' | 'Offer' | 'Rejected'

export type Application = {
  id: number
  company: string
  role: string
  workType: string
  location: string
  status: ApplicationStatus
  appliedDate: string
  salaryRange: string
  notes: string
}

export type ViewMode = 'table' | 'kanban'

export const STATUS_STYLES: Record<ApplicationStatus, string> = {
  Saved: 'bg-saved-bg text-saved',
  Interview: 'bg-interv-bg text-interv',
  Applied: 'bg-applied-bg text-applied',
  Offer: 'bg-offer-bg text-offer',
  Rejected: 'bg-reject-bg text-reject',
}

export const ITEMS_PER_PAGE = 7
