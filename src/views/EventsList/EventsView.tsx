import EventsList from "./EventsList.tsx";
import { useAppSelector } from "../../hooks/store.ts";

function EventsView() {
  const { events, loading, error } = useAppSelector((state) => state.events);

  console.log("#events", events)

  if (loading) {
    return <>loading</>;
  }

  if (error) {
    return <>error</>;
  }

  return <EventsList events={events} />;
}

export default EventsView;
