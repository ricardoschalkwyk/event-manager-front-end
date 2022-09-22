const user = [
  {
    id: 1,
    person: "Abby",
    img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    person: "Brandon",
    img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },

  {
    id: 3,
    person: "Linda",
    img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29uJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
  },
];

function ActivityBoard() {
  return (
    <div className="w-80">
      <div className="rounded-lg bg-white p-4">
        <div className="pb-3 text-sm">Activity Board</div>

        <div className="border-b-2 border-gray-100"></div>

        <div>
          {user.map((item) => (
            <div key={item.id} className="flex items-center gap-3 py-2 text-xs">
              <div>
                <img
                  src={item.img}
                  alt="image"
                  className="h-6 w-6 overflow-hidden rounded-full object-cover"
                />
              </div>
              <div>
                <strong>{item.person}</strong> has joined your event.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

ActivityBoard.propTypes = {};

export default ActivityBoard;
