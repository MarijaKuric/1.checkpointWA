const express = require("express");
const router = express.Router();
const {instruktori, courses} = require("../data/mockData");

//GET - svi instruktori
router.get("/", (req, res) => {
    res.json(instruktori);
});

//GET - instruktor po ID-u
router.get("/:id", (req, res) => {
    const instruktor = instruktori.find(i => i.id === parseInt(req.params.id));
    instruktor ? res.json(instruktor) : res.status(404).send("Instruktor nije pronađen");
});

// GET - svi tečajevi određenog instruktora
router.get("/:id/courses", (req, res) => {
    const instruktorId = parseInt(req.params.id);
    const instruktorCourses = courses.filter(c => c.instruktorId === instruktorId);

    instruktorCourses.length > 0 ? res.json(instruktorCourses) : res.status(404).send("Instruktor nema tečajeve ili ne postoji");
});

// POST - dodaj novog instruktora
router.post("/", (req, res) => {
    const {ime, bio} = req.body;
    if(!ime) return res.status(400).send("Ime instruktora je obavezno");

    const newInstruktor = {id: instruktori.length + 1, ime, bio};
    instruktori.push(newInstruktor);
    res.status(201).json(newInstruktor);
});

// DELETE - obriši instruktora
router.delete("/:id", (req, res) => {
    const index = instruktori.findIndex(i => i.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send("Instruktor nije pronađen");
    
    const deleted = instructors.splice(index, 1);
    res.json(deleted[0]);
});

module.exports = router;