import { EventsState } from "../../types/EventsState.ts";
import { useSelector } from "react-redux";
import EventsList from "./EventsList.tsx";

function EventsView() {
  const { events, loading, error } = useSelector(
    (state: { events: EventsState }) => state.events,
  );

  if (loading) {
    return <>loading</>;
  }

  if (error) {
    return <>error</>;
  }

  return <EventsList events={events} />;
}

export default EventsView;
