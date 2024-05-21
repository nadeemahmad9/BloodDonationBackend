

const router = require("express").Router();
const auth = require("../middleware/auth");
const { User, Donations, Requests, BloodBank } = require("../models/models");

router.get("/", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user);
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

router.post("/donate", auth, async (req, res) => {
    try {
        req.body.userId = req.user;
        const date = new Date();
        req.body.date = date.toLocaleTimeString() + " " + date.toLocaleDateString();
        const newDonation = new Donations(req.body);
        const saved = await newDonation.save();
        await BloodBank.updateOne(
            { _id: req.body.bankId },
            { $push: { donations: saved._id } }
        );
        res.send("done");
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

router.post("/request", auth, async (req, res) => {
    try {
        req.body.userId = req.user;
        const date = new Date();
        req.body.date = date.toLocaleTimeString() + " " + date.toLocaleDateString();
        const newRequest = new Requests(req.body);
        const saved = await newRequest.save();
        await BloodBank.updateOne(
            { _id: req.body.bankId },
            { $push: { requests: saved._id } }
        );
        res.send("done");
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

router.get("/donations", auth, async (req, res) => {
    try {
        const data = await Donations.find({ userId: req.user }).populate('bankId', '-_id -__v -password -requests -donations -stock');
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

router.get("/requests", auth, async (req, res) => {
    try {
        const data = await Requests.find({ userId: req.user }).populate('bankId', '-_id -__v -password -requests -donations -stock');
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

router.put("/", auth, async (req, res) => {
    try {
        const result = await User.updateOne({ _id: req.user }, req.body);
        if (result.nModified === 0) {
            res.status(404).send("User not found");
        } else {
            res.status(200).send("User updated");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});


module.exports = router;
