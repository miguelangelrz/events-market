import { SportEvent } from "./SportEvent.ts";

export type EventsState = {
  events: SportEvent[];
  loading: boolean;
  error: string | null;
};
