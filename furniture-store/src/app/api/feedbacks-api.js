import { request } from "./http";

export function fetchFeedbacks() {
  return request("/feedbacks");
}
