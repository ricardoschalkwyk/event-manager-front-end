import { useNavigate } from "react-router-dom";
import ActivityBoard from "../components/ActivityBoard";
import Button from "../components/forms/Button";

function EventPage() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-16">
      <div className="flex justify-center rounded-md bg-gray-500 ">
        <div>
          <div className="gap-6 p-4 text-center">
            {/* event occasion */}
            <div className="text-gray-50">
              <div className="py-3 px-2">Social Event</div>
            </div>
            {/*  */}

            {/* event name */}
            <div className="text-gray-50">
              <div className="py-3 px-2">Movie Night</div>
            </div>
            {/*  */}

            {/* event disc */}
            <div className="gap-1 text-gray-50">
              <div className="gap-2.5 py-3 px-2">
                <h1>Event details:</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea
                  quis quidem, temporibus quasi in consequuntur. Perspiciatis
                  architecto fuga totam velit nisi tenetur quas, dignissimos
                  doloribus quisquam blanditiis, necessitatibus ratione eos.
                </p>
              </div>
            </div>
            {/*  */}

            <div className="flex items-center justify-center gap-2.5 text-white">
              {/* event creator */}
              <div className="flex gap-2.5">
                Event Creator: <div className="text-black">Jane Cooper</div>
              </div>
              {/*  */}

              {/* event time */}
              <div className="flex gap-2.5">
                Event Time: <div className="text-black">19:00</div>
              </div>
              {/*  */}

              {/* date div */}
              <div className="flex gap-2.5">
                Event Date: <div className="text-black">2009/03/23</div>
              </div>
              {/*  */}
            </div>
            <div className="mt-11 flex items-center justify-center gap-5">
              <Button
                onClick={() => navigate("/")}
                bg="bg-white"
                className="text-red-500"
              >
                Back
              </Button>
              <Button bg="bg-white" className="text-red-500">
                End Event
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ActivityBoard />
      </div>
    </div>
  );
}
EventPage.propTypes = {};

export default EventPage;
