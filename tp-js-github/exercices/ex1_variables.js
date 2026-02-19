function infosEtudiant(nom, note) {
  let decision = "";

  if (note >= 10) {
    decision = "Admis";
  } else {
    decision = "Ajourné";
  }

  return `${nom}: ${note}/20 → ${decision}`;
}
