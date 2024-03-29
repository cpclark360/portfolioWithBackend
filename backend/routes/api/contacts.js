const express = require("express");
const router = express.Router();

// Load Contact model
const Contact = require("contact");

// @route GET api/contacts/test
// @description tests contacts route
// @access Public
router.get("/test", (req, res) => res.send("contact route testing!"));

// @route GET api/contacts
// @description Get all contacts
// @access Public
router.get("/", (req, res) => {
  Contact.find()
    .then(contacts => res.json(contacts))
    .catch(err =>
      res.status(404).json({ nocontactsfound: "No contacts found" })
    );
});

// @route GET api/contacts/:id
// @description Get single contact by id
// @access Public
router.get("/:id", (req, res) => {
  Contact.findById(req.params.id)
    .then(contact => res.json(contact))
    .catch(err => res.status(404).json({ nobookfound: "No Contact found" }));
});

// @route GET api/contacts
// @description add/save book
// @access Public
router.post("/", (req, res) => {
  Contact.create(req.body)
    .then(contact => res.json({ msg: "Contact added successfully" }))
    .catch(err =>
      res.status(400).json({ error: "Unable to add this Contact" })
    );
});

// @route GET api/contacts/:id
// @description Update contact
// @access Public
router.put("/:id", (req, res) => {
  Contact.findByIdAndUpdate(req.params.id, req.body)
    .then(contact => res.json({ msg: "Updated successfully" }))
    .catch(err =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/contacts/:id
// @description Delete contact by id
// @access Public
router.delete("/:id", (req, res) => {
  Contact.findByIdAndRemove(req.params.id, req.body)
    .then(contact => res.json({ mgs: "Contact entry deleted successfully" }))
    .catch(err => res.status(404).json({ error: "No such a contact" }));
});

module.exports = router;
