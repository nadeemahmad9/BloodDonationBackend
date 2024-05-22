// const router = require("express").Router();
// const auth = require("../middleware/auth");
// const { User, BloodBank, Donations, Requests, Camp } = require("../models/models");

// router.post("/:handle", auth, async (req, res) => {
//     try {
//         const filter = req.params.handle == "bank" ? {} : { password: 0, requests: 0, donations: 0, stock: 0, __v: 0 };
//         const banks = await BloodBank.find(req.body, filter);
//         res.json(banks);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

// router.get("/allBanks/:state/:district", async (req, res) => {
//     try {
//         const banks = await BloodBank.find({ state: req.params.state, district: req.params.district }, { password: 0, _id: 0, donations: 0, requests: 0, stock: 0 });
//         res.json(banks);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

// router.put("/updateStock", auth, async (req, res) => {
//     try {
//         const prevStock = await BloodBank.findOne({ _id: req.user }, { stock: 1 });
//         await BloodBank.updateOne(
//             { _id: req.user },
//             { $set: { ["stock." + req.body.bloodGroup]: prevStock.stock[req.body.bloodGroup] + req.body.units } }
//         )
//         res.status(200).send();
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

// router.put("/deleteStock", auth, async (req, res) => {
//     try {
//         const prevStock = await BloodBank.findOne({ _id: req.user }, { stock: 1 });
//         if (prevStock.stock[req.body.bloodGroup] < req.body.units) {
//             res.status(404).send("Not enough blood");
//         } else {
//             await BloodBank.updateOne(
//                 { _id: req.user },
//                 { $set: { ["stock." + req.body.bloodGroup]: prevStock.stock[req.body.bloodGroup] - req.body.units } }
//             )
//             res.status(200).send();
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

// router.get("/getStock", auth, async (req, res) => {
//     try {
//         const data = await BloodBank.findOne(
//             { _id: req.user },
//             { _id: 0, stock: 1 }
//         )
//         res.status(200).send(data);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

// router.put("/donations", auth, async (req, res) => {
//     try {
//         Donations.updateOne({ _id: req.body.id }, { status: req.body.status }, (err, user) => {
//             if (err) {
//                 res.status(404).send("Donation not found");
//             } else {
//                 res.status(200).send("Status updated");
//             }
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

// router.put("/requests", auth, async (req, res) => {
//     try {
//         Requests.updateOne({ _id: req.body.id }, { status: req.body.status }, (err, user) => {
//             if (err) {
//                 res.status(404).send("Request not found");
//             } else {
//                 res.status(200).send("Status updated");
//             }
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

// router.get("/donations", auth, async (req, res) => {
//     try {
//         const data = await Donations.find({ bankId: req.user }).populate('userId', '-__v -password -requests -donations -stock');
//         res.json(data);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

// router.get("/requests", auth, async (req, res) => {
//     try {
//         const data = await Requests.find({ bankId: req.user }).populate('userId', '-__v -password -requests -donations -stock');
//         res.json(data);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

// router.put("/", auth, async (req, res) => {
//     try {
//         console.log(req.user);
//         BloodBank.updateOne({ _id: req.user }, req.body, (err, user) => {
//             if (err) {
//                 res.status(404).send("BloodBank not found");
//             } else {
//                 res.status(200).send("BloodBank updated");
//             }
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

// module.exports = router;


// const router = require("express").Router();
// const auth = require("../middleware/auth");
// const { User, BloodBank, Donations, Requests, Camp } = require("../models/models");

// router.post("/:handle", auth, async (req, res) => {
//     try {
//         const filter = req.params.handle == "bank" ? {} : { password: 0, requests: 0, donations: 0, stock: 0, __v: 0 };
//         const banks = await BloodBank.find(req.body, filter);
//         res.json(banks);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

// router.get("/allBanks/:state/:district", async (req, res) => {
//     try {
//         const banks = await BloodBank.find({ state: req.params.state, district: req.params.district }, { password: 0, _id: 0, donations: 0, requests: 0, stock: 0 });
//         res.json(banks);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

// router.put("/updateStock", auth, async (req, res) => {
//     try {
//         const prevStock = await BloodBank.findOne({ _id: req.user }, { stock: 1 });
//         await BloodBank.updateOne(
//             { _id: req.user },
//             { $set: { ["stock." + req.body.bloodGroup]: prevStock.stock[req.body.bloodGroup] + req.body.units } }
//         );
//         res.status(200).send();
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

// router.put("/deleteStock", auth, async (req, res) => {
//     try {
//         const prevStock = await BloodBank.findOne({ _id: req.user }, { stock: 1 });
//         if (prevStock.stock[req.body.bloodGroup] < req.body.units) {
//             res.status(404).send("Not enough blood");
//         } else {
//             await BloodBank.updateOne(
//                 { _id: req.user },
//                 { $set: { ["stock." + req.body.bloodGroup]: prevStock.stock[req.body.bloodGroup] - req.body.units } }
//             );
//             res.status(200).send();
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

// router.get("/getStock", auth, async (req, res) => {
//     try {
//         const data = await BloodBank.findOne(
//             { _id: req.user },
//             { _id: 0, stock: 1 }
//         );
//         res.status(200).send(data);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

// router.put("/donations", auth, async (req, res) => {
//     try {
//         const result = await Donations.updateOne({ _id: req.body.id }, { status: req.body.status });
//         if (result.nModified === 0) {
//             res.status(404).send("Donation not found");
//         } else {
//             res.status(200).send("Status updated");
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

// router.put("/requests", auth, async (req, res) => {
//     try {
//         const result = await Requests.updateOne({ _id: req.body.id }, { status: req.body.status });
//         if (result.nModified === 0) {
//             res.status(404).send("Request not found");
//         } else {
//             res.status(200).send("Status updated");
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

// router.get("/donations", auth, async (req, res) => {
//     try {
//         const data = await Donations.find({ bankId: req.user }).populate('userId', '-__v -password -requests -donations -stock');
//         res.json(data);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

// router.get("/requests", auth, async (req, res) => {
//     try {
//         const data = await Requests.find({ bankId: req.user }).populate('userId', '-__v -password -requests -donations -stock');
//         res.json(data);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

// router.put("/", auth, async (req, res) => {
//     try {
//         const result = await BloodBank.updateOne({ _id: req.user }, req.body);
//         if (result.nModified === 0) {
//             res.status(404).send("BloodBank not found");
//         } else {
//             res.status(200).send("BloodBank updated");
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).send();
//     }
// });

// module.exports = router;


const router = require("express").Router();
const auth = require("../middleware/auth");
const { User, BloodBank, Donations, Requests, Camp } = require("../models/models");

// Get blood banks based on user type
router.post("/:handle", auth, async (req, res) => {
    try {
        const filter = req.params.handle === "bank" ? {} : { password: 0, requests: 0, donations: 0, stock: 0, __v: 0 };
        const banks = await BloodBank.find(req.body, filter).exec();
        res.json(banks);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// Get blood banks by state and district
router.get("/allBanks/:state/:district", async (req, res) => {
    try {
        const banks = await BloodBank.find({ state: req.params.state, district: req.params.district }, { password: 0, _id: 0, donations: 0, requests: 0, stock: 0 }).exec();
        res.json(banks);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// Update stock for a blood bank
router.put("/updateStock", auth, async (req, res) => {
    try {
        const prevStock = await BloodBank.findOne({ _id: req.user }, { stock: 1 }).exec();
        await BloodBank.updateOne(
            { _id: req.user },
            { $set: { [`stock.${req.body.bloodGroup}`]: prevStock.stock[req.body.bloodGroup] + req.body.units } }
        ).exec();
        res.status(200).send("Stock updated");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// Delete stock for a blood bank
router.put("/deleteStock", auth, async (req, res) => {
    try {
        const prevStock = await BloodBank.findOne({ _id: req.user }, { stock: 1 }).exec();
        if (prevStock.stock[req.body.bloodGroup] < req.body.units) {
            res.status(404).send("Not enough blood");
        } else {
            await BloodBank.updateOne(
                { _id: req.user },
                { $set: { [`stock.${req.body.bloodGroup}`]: prevStock.stock[req.body.bloodGroup] - req.body.units } }
            ).exec();
            res.status(200).send("Stock updated");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// Get stock for a blood bank
router.get("/getStock", auth, async (req, res) => {
    try {
        const data = await BloodBank.findOne(
            { _id: req.user },
            { _id: 0, stock: 1 }
        ).exec();
        res.status(200).send(data);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// Update donation status
router.put("/donations", auth, async (req, res) => {
    try {
        await Donations.updateOne({ _id: req.body.id }, { status: req.body.status }).exec();
        res.status(200).send("Status updated");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// Update request status
router.put("/requests", auth, async (req, res) => {
    try {
        await Requests.updateOne({ _id: req.body.id }, { status: req.body.status }).exec();
        res.status(200).send("Status updated");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// Get donations for a blood bank
router.get("/donations", auth, async (req, res) => {
    try {
        const data = await Donations.find({ bankId: req.user }).populate('userId', '-__v -password -requests -donations -stock').exec();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// Get requests for a blood bank
router.get("/requests", auth, async (req, res) => {
    try {
        const data = await Requests.find({ bankId: req.user }).populate('userId', '-__v -password -requests -donations -stock').exec();
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// Update blood bank details
router.put("/", auth, async (req, res) => {
    try {
        await BloodBank.updateOne({ _id: req.user }, req.body).exec();
        res.status(200).send("BloodBank updated");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// Get user details
router.get("/user/:id", auth, async (req, res) => {
    try {
        const user = await User.findById(req.params.id, { password: 0, __v: 0 }).exec();
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// Update user details
router.put("/user/:id", auth, async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// Delete user
router.delete("/user/:id", auth, async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id).exec();
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.status(200).send("User deleted");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// Create new camp
router.post("/camp", auth, async (req, res) => {
    try {
        const camp = new Camp(req.body);
        await camp.save();
        res.status(201).send("Camp created");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// Get camp details
router.get("/camp/:id", async (req, res) => {
    try {
        const camp = await Camp.findById(req.params.id).exec();
        if (!camp) {
            return res.status(404).send("Camp not found");
        }
        res.json(camp);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// Update camp details
router.put("/camp/:id", auth, async (req, res) => {
    try {
        const camp = await Camp.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
        if (!camp) {
            return res.status(404).send("Camp not found");
        }
        res.json(camp);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

// Delete camp
router.delete("/camp/:id", auth, async (req, res) => {
    try {
        const camp = await Camp.findByIdAndDelete(req.params.id).exec();
        if (!camp) {
            return res.status(404).send("Camp not found");
        }
        res.status(200).send("Camp deleted");
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;
