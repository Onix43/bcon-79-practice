import { request } from "./http";

export function fetchFurnitures() {
  return request("/furnitures");
}
export function fetchFurnituresById(id) {
  return request(`/furnitures/${id}`);
}
