interface Attendee {
  id: string;
  name: string;
  image: string;
  isHost?: boolean;
}

interface AttendeeListProps {
  maxAttendees: number;
  attendees: Attendee[];
  waitlist: Attendee[];
}

export default function AttendeeList({
  maxAttendees,
  attendees = [],
  waitlist = [],
}: AttendeeListProps) {
  return (
    <div className="container mx-auto p-6">
      <h2>
        Attendees ({attendees.length} / {maxAttendees})
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {attendees.map((attendee) => (
          <div
            key={attendee.id}
            className="p-4 bg-stone-800 rounded-lg flex items-center justify-between"
          >
            <div className="avatar avatar-placeholder">
              <div className="bg-neutral text-neutral-content w-12 rounded-full">
                <span className="text-base">
                  {attendee.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
            </div>
            <div>
              {attendee.isHost && (
                <span className="badge badge-outline badge-warning mr-2 text-sm">
                  Event Host
                </span>
              )}
              <span className="text-right">{attendee.name}</span>
            </div>
          </div>
        ))}
      </div>
      {waitlist.length > 0 && (
        <>
          <h2 className="mt-6">Waitlist ({waitlist.length})</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {waitlist.map((user) => (
              <div
                key={user.id}
                className="p-4 bg-stone-800 rounded-lg flex items-center justify-between"
              >
                <div className="avatar avatar-placeholder">
                  <div className="bg-neutral text-neutral-content w-12 rounded-full">
                    <span className="text-base">
                      {user.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                </div>
                <span>{user.name}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
