interface DailyCounterProps {
  activityCount: number;
}

export default function DailyCounter({ activityCount }: DailyCounterProps) {

    console.log(`in DailyCounter, activity count: ${activityCount}`)

  return (
    <>
      <div
        id="li-connections-section"
        className="flex w-auto h-[80px] mx-10 border-b-2 border-[#D7DEE4]"
      >
        <div
          id="li-connections-label"
          className="flex items-center ml-10 w-[80%]"
        >
          <div className="bg-icon-bg w-[32px] h-[32px] flex justify-center items-center rounded-md h-1rem w-3rem">
            <img
              src="/images/li-connections.png"
              alt="linked in connections icon"
            />
          </div>
          <p className="pl-4 font-medium">LinkedIn connection requests</p>
        </div>
        <div
          id="li-connections-controls"
          className="flex w-[20%] justify-around items-center"
        >
          <div className="flex w-[144px] h-[32px] justify-around items-center outline-gray-400 rounded-md outline-solid outline-1">
            <button>
              <img src="../../images/minus.png" alt="-" className="" />
            </button>
            <div>6</div>
            <button>
              <img src="../../images/plus.png" alt="+" className="" />
            </button>
          </div>
          <button className=" w-[32px] h-[32px] flex justify-center items-center outline-gray-400 rounded-md outline-solid outline-1">
            <img
              src="/images/pencil.png"
              alt="edit"
              className="w-[60%] h-[60%]"
            />
          </button>
        </div>
      </div>
      <div
        id="interviews-scheduled-section"
        className="flex w-auto h-[80px] mx-10 border-b-2 border-[#D7DEE4]"
      >
        <div
          id="interviews-scheduled-label"
          className="flex items-center ml-10 w-[80%]"
        >
          <div className="bg-icon-bg w-[32px] h-[32px] flex justify-center items-center rounded-md h-1rem w-3rem">
            <img
              src="/images/mdi_clock-outline.png"
              alt="interviews scheduled icon"
            />
          </div>
          <p className="pl-4 font-medium">Interviews Scheduled</p>
        </div>
        <div
          id="interviews-scheduled-controls"
          className="flex w-[20%] justify-around items-center"
        >
          <div className="flex w-[144px] h-[32px] justify-around items-center outline-gray-400 rounded-md outline-solid outline-1">
            <button>
              <img src="../../images/minus.png" alt="-" className="" />
            </button>
            <div>6</div>
            <button>
              <img src="../../images/plus.png" alt="+" className="" />
            </button>
          </div>
          <button className=" w-[32px] h-[32px] flex justify-center items-center outline-gray-400 rounded-md outline-solid outline-1">
            <img
              src="/images/pencil.png"
              alt="edit"
              className="w-[60%] h-[60%]"
            />
          </button>
        </div>
      </div>
      <div
        id="applications-submitted-section"
        className="flex w-auto h-[80px] mx-10 border-b-2 border-[#D7DEE4]"
      >
        <div
          id="applications-submitted-label"
          className="flex items-center ml-10 w-[80%]"
        >
          <div className="bg-icon-bg w-[32px] h-[32px] flex justify-center items-center rounded-md h-1rem w-3rem">
            <img
              src="/images/half-cube.png"
              alt="applications submitted icon"
            />
          </div>
          <p className="pl-4 font-medium">Applications submitted</p>
        </div>
        <div
          id="applications-submitted-controls"
          className="flex w-[20%] justify-around items-center"
        >
          <div className="flex w-[144px] h-[32px] justify-around items-center outline-gray-400 rounded-md outline-solid outline-1">
            <button>
              <img src="../../images/minus.png" alt="-" className="" />
            </button>
            <div>6</div>
            <button>
              <img src="../../images/plus.png" alt="+" className="" />
            </button>
          </div>
          <button className=" w-[32px] h-[32px] flex justify-center items-center outline-gray-400 rounded-md outline-solid outline-1">
            <img
              src="/images/pencil.png"
              alt="edit"
              className="w-[60%] h-[60%]"
            />
          </button>
        </div>
      </div>
      <div
        id="outreach-emails-section"
        className="flex w-auto h-[80px] mx-10 border-b-2 border-[#D7DEE4]"
      >
        <div
          id="outreach-emails-label"
          className="flex items-center ml-10 w-[80%]"
        >
          <div className="bg-icon-bg w-[32px] h-[32px] flex justify-center items-center rounded-md h-1rem w-3rem">
            <img src="/images/envelope.png" alt="outreach emails sent icon" />
          </div>
          <p className="pl-4 font-medium">Outreach emails sent</p>
        </div>
        <div
          id="outreach-emails-controls"
          className="flex w-[20%] justify-around items-center"
        >
          <div className="flex w-[144px] h-[32px] justify-around items-center outline-gray-400 rounded-md outline-solid outline-1">
            <button>
              <img src="../../images/minus.png" alt="-" className="" />
            </button>
            <div>6</div>
            <button>
              <img src="../../images/plus.png" alt="+" className="" />
            </button>
          </div>
          <button className=" w-[32px] h-[32px] flex justify-center items-center outline-gray-400 rounded-md outline-solid outline-1">
            <img
              src="/images/pencil.png"
              alt="edit"
              className="w-[60%] h-[60%]"
            />
          </button>
        </div>
      </div>
      <div
        id="meetups-events-section"
        className="flex w-auto h-[80px] mx-10 border-b-2 border-[#D7DEE4]"
      >
        <div
          id="meetups-events-label"
          className="flex items-center ml-10 w-[80%]"
        >
          <div className="bg-icon-bg w-[32px] h-[32px] flex justify-center items-center rounded-md h-1rem w-3rem">
            <img
              src="/images/two-people.png"
              alt="meetups/events attended icon"
            />
          </div>
          <p className="pl-4 font-medium">Meetups / events attended</p>
        </div>
        <div
          id="meetups-events-controls"
          className="flex w-[20%] justify-around items-center"
        >
          <div className="flex w-[144px] h-[32px] justify-around items-center outline-gray-400 rounded-md outline-solid outline-1">
            <button>
              <img src="../../images/minus.png" alt="-" className="" />
            </button>
            <div>6</div>
            <button>
              <img src="../../images/plus.png" alt="+" className="" />
            </button>
          </div>
          <button className=" w-[32px] h-[32px] flex justify-center items-center outline-gray-400 rounded-md outline-solid outline-1">
            <img
              src="/images/pencil.png"
              alt="edit"
              className="w-[60%] h-[60%]"
            />
          </button>
        </div>
      </div>
      <div
        id="extra-activity-one-section"
        className="flex w-auto h-[80px] mx-10 border-b-2 border-[#D7DEE4]"
      >
        <div
          id="extra-activity-one-label"
          className="flex items-center ml-10 w-[80%]"
        >
          <div className="bg-icon-bg w-[32px] h-[32px] flex justify-center items-center rounded-md h-1rem w-3rem">
            <img src="/images/envelope.png" alt="envelope icon" />
          </div>
          <p className="pl-4 font-medium">LinkedIn Messages Sent</p>
        </div>
        <div
          id="extra-activity-one-controls"
          className="flex w-[20%] justify-around items-center"
        >
          <div className="flex w-[144px] h-[32px] justify-around items-center outline-gray-400 rounded-md outline-solid outline-1">
            <button>
              <img src="../../images/minus.png" alt="-" className="" />
            </button>
            <div>6</div>
            <button>
              <img src="../../images/plus.png" alt="+" className="" />
            </button>
          </div>
          <button className=" w-[32px] h-[32px] flex justify-center items-center outline-gray-400 rounded-md outline-solid outline-1">
            <img
              src="/images/pencil.png"
              alt="edit"
              className="w-[60%] h-[60%]"
            />
          </button>
        </div>
      </div>
    </>
  );
}
