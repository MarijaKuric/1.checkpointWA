const courses = [
    { id: 1, naslov: "Uvod u javascript", opis: "Osnove JS jezika", kategorija: "Programiranje", cijena: 50, instruktorId: 1},
    { id: 2, naslov: "React za početnike", opis: "Frontend framework", kategorija: "web", cijena: 70, instruktorId: 2 },
    { id: 3, naslov: "Node.js API razvoj", opis: "Backend razvoj s Expressom", kategorija: "backend", cijena: 80, instruktorId: 1 },
    { id: 4, naslov: "Python osnove", opis: "Sintaksa i osnovni koncepti", kategorija: "programiranje", cijena: 60, instruktorId: 3 },
    { id: 5, naslov: "UX/UI Dizajn", opis: "Principi modernog dizajna", kategorija: "dizajn", cijena: 90, instruktorId: 4 },
];

const instruktori = [
  { id: 1, ime: "Marko Kovač", bio: "Web developer s 5 godina iskustva" },
  { id: 2, ime: "Ivana Horvat", bio: "Frontend stručnjakinja i React entuzijast" },
  { id: 3, ime: "Petar Jurić", bio: "Python developer i AI istraživač" },
  { id: 4, ime: "Ana Babić", bio: "UX/UI dizajnerica s iskustvom u Figma alatima" },
];

module.exports = {courses, instruktori};