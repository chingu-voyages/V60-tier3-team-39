import { GoArrowUpRight } from "react-icons/go"
import { Link } from "react-router-dom"
import data from '../../data/data.json'

const titles = ['company / role', 'location', 'status', 'applied date', 'salary range']

const { applications } = data


const RecentApplications = () => {
  return (
    <div className="w-full py-8 px-6 bg-white border border-muted/20 rounded-3xl space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-primary font-bold text-lg">Recent Applications</h2>
        <Link to='/applications'>
          <span className="flex gap-1 text-xs uppercase font-bold cursor-pointer hover:text-brand transition-colors duration-300">
            view all
            <GoArrowUpRight size='16' strokeWidth={2} />
          </span>
        </Link>
      </div>
      <div className="w-full">
        <div className="w-full grid grid-cols-5 px-2 gap-15 mb-2">
          {titles.map((title, index) => (
            <span className={`text-muted text-sm font-semibold uppercase tracking-wide ${index === 0 ? 'w-35' : ''}`}>{title}</span>
          ))}
        </div>
        <div className="">
          {applications.slice(0, 6).map(({ id, company, role, location, status, appliedDate, salaryRange }) => (
            <div key={id} className={`grid grid-cols-5 items-center px-2 gap-15 font-medium py-4 ${id === 6 ? '' : 'border-b border-muted/20'}`}>
              <div className="flex flex-col w-35 leading-7">
                <span>{company}</span>
                <span className="text-xs text-muted">{role}</span>
              </div>
              <div className="w-28.75">
                <span>{location}</span>
              </div>
              <div className="flex justify-center p">
                {status}
              </div>
              <span>
                {appliedDate}
              </span>
              <div>
                <span><span className="text-brand">$</span>{salaryRange}</span>
              </div>



            </div>
          ))}
        </div>
      </div>

    </div >
  )
}

export default RecentApplications

