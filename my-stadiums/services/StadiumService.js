import Stadiums from "../data/Stadiums";

export function getStadiums(category) {
  return Stadiums.filter((s) => s.categories.includes(category));
}
