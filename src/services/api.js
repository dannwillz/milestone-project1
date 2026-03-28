export const getPlanets = async () => {
  const res = await fetch("https://anurella.github.io/json/planets.json");
  return res.json();
};