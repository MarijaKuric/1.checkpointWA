const express = require("express");
const router = express.Router();
const { courses } = require("../data/mockData");

//GET - svi tečajevi
router.get("/", (req, res) => {
    res.json(courses);
});

//GET - tečaj po id-u
router.get("/:id", (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    course ? res.json(course) : res.status(404).send("Course nije pronađen");
});

//GET - tečaj po cijeni
router.get("/cijena/:cijena", (req, res) => {
    const cijena = parseFloat(req.params.cijena)
    const filtrirani = courses.filter(c => c.cijena === cijena);

    filtrirani.length > 0 ? res.json(filtrirani) : res.status(404).send("Nema tečajeva s tom cijenom!");
});

// GET - filtriranje tečajeva
router.get("/filter", (req, res) => {
  const { kategorija, maxCijena } = req.query;

  let filtrirani = courses;

  if (kategorija) {
    filtrirani = filtrirani.filter(c => c.kategorija.toLowerCase() === kategorija.toLowerCase());
  }

  if (maxCijena) {
    filtrirani = filtrirani.filter(c => c.cijena <= parseInt(maxCijena));
  }

  res.json(filtrirani);
});


// POST - dodaj novi tečaj
router.post("/", (req, res) => {
    const {naslov, opis, kategorija, cijena, instruktorId} = req.body;
    if (!naslov || !instruktorId){
        return res.status(400).send("Nedostaju obavezna polja: naslov ili instruktorId");
    }
    const newCourse = {
        id: courses.length + 1,
        naslov,
        opis,
        kategorija,
        cijena,
        instruktorId,
    };

    courses.push(newCourse);
    res.status(201).json(newCourse);
});

// PUT - zamijeni cijeli tečaj
router.put("/:id", (req, res) => {
    const index = courses.findIndex(c => c.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send("Course nije pronađen");

    const {naslov, opis, kategorija, cijena, instruktorId} = req.body;
    courses[index] = { id: parseInt(req.params.id), naslov, opis, kategorija, cijena, instruktorId};
    res.json(courses[index]);
});

// PATCH - djelomično ažuriraj tečaj
router.patch("/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("Course nije pronađen");

  Object.assign(course, req.body);
  res.json(course);
});

// DELETE - obriši tečaj
router.delete("/:id", (req, res) => {
  const index = courses.findIndex(c => c.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send("Course nije pronađen");

  const deleted = courses.splice(index, 1);
  res.json(deleted[0]);
});

module.exports = router;





