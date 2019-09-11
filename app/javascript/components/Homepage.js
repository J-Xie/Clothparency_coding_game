import React, { useCallback } from "react";
import Nav from "./Nav";
import Button from "./Button";

const navItems = [
  { name: "Competitions", path: "/competition/index" },
  { name: "Competiteurs", path: "/competitor/index" },
  { name: "Catégories", path: "/item/index" }
];

const Homepage = () => {
  const onClick = useCallback(path => {
    window.location.href = path;
  }, []);

  return (
    <div className="container">
      <Nav navItems={navItems} />
      <h1>Bienvenue sur la plateforme du Clothparency coding game</h1>
      <h2>Que souhaites-tu faire ?</h2>
      <Button onClick={() => onClick("/linguini")}>
        Linguini dans l'âme ?
      </Button>
      <Button onClick={() => onClick("/chief_of_happiness")}>
        Ou plutôt Responsable bien-être ?
      </Button>
    </div>
  );
};

export default Homepage;
