import { useEffect, useState } from "react";
import { getPlanets } from "../services/api";
import PlanetCard from "./PlanetCard";

const Universe = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    getPlanets().then(data => setPlanets(data));
  }, []);

  return (
    <section id="solar-system" className="section">
      <div className="container">

        <div className="solar-system-gallery">
          {planets.map((planet, index) => (
            <PlanetCard key={index} planet={planet} />
          ))}
        </div>

        <h2>The Solar System</h2>

        <p>
          The Solar System is our cosmic neighborhood, consisting of the Sun, eight planets, their moons, and countless
          smaller objects like asteroids and comets. It formed about 4.6 billion years ago from a giant molecular cloud.
          The Sun, a G-type main-sequence star, contains 99.8% of the Solar System's mass and provides the energy that
          sustains life on Earth. The planets are divided into two groups: the inner rocky planets (Mercury, Venus,
          Earth, Mars) and the outer gas giants (Jupiter, Saturn, Uranus, Neptune). Each planet has unique
          characteristics, such as Earth's liquid water and atmosphere, Jupiter's Great Red Spot, and Saturn's iconic
          rings. Beyond the planets, the Solar System is home to dwarf planets like Pluto, a vast asteroid belt between
          Mars and Jupiter, and the distant Kuiper Belt and Oort Cloud, which harbor icy bodies and comets. The Solar
          System is part of the Milky Way galaxy, which contains billions of stars and countless planetary systems.
        </p>

        <h3>Solar System Overview</h3>

        <table className="timeline-table">
          <thead>
            <tr>
              <th>Planet</th>
              <th>DIstance From Sun</th>
            </tr>
          </thead>

          <tbody>
            <tr><td>Mercury</td><td>58 million km</td></tr>
            <tr><td>Venus</td><td>108 million km</td></tr>
            <tr><td>Earth</td><td>150 million km</td></tr>
            <tr><td>Mars</td><td>228 million km</td></tr>
            <tr><td>Jupiter</td><td>778 million km</td></tr>
            <tr><td>Saturn</td><td>1.4 billion km</td></tr>
            <tr><td>Uranus</td><td>2.9 billion km</td></tr>
            <tr><td>Neptune</td><td>4.5 billion km</td></tr>
            <tr><td>Pluto</td><td>5.9 billion km</td></tr>
          </tbody>
        </table>

      </div>
    </section>
  );
};

export default Universe;