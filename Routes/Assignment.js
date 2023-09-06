const express = require("express")
const router = express.Router()
const AssigmentSchema = require("./../Model/Assignment")
const AssignHomeSchema = require("./../Model/AssignHome")

router.get('/AssigmentSchema', (req, res) => {
    AssigmentSchema.find().then((user) => {
        res.json(user)
    }).catch((err) => {
        console.log(err)
    })
})
router.get('/AssigmentSchema/home', (req, res) => {
    AssignHomeSchema.find().then((user) => {
        res.json(user)
    }).catch((err) => {
        console.log(err)
    })
})
router.post('/AssigmentSchema', (req, res) => {
    const { messageA, DepartmentA, levelA, programmA, timeA } = req.body;

    const newProfile = new AssigmentSchema({ messageA, DepartmentA, levelA, programmA, timeA });

    newProfile
        .save()
        .then(() => {
            console.log("it was successfully saved");
            res.json("it was successfully added");
        })
        .catch((err) => {
            console.log("there was an error while trying to save the document:", err);
            res.status(500).json("There was an error while trying to save the document");
        });

    const HomeProfile = new AssignHomeSchema({ messageA, DepartmentA, levelA, programmA, timeA });

    HomeProfile
        .save()
        .then(() => {
            console.log("it was successfully saved");
         
        })
        .catch((err) => {
            console.log("there was an error while trying to save the document:", err);
          
        });
});

router.post('/AssigmentSchema/Delete', (req, res) => {
    const { _id } = req.body;

    // Use findOneAndDelete with a query to find and delete the document
    AssigmentSchema.findOneAndDelete({ _id })
        .then(() => {
            console.log("it was successfully deleted");
            res.json("it was successfully deleted");
        })
        .catch((err) => {
            console.log("there was an error while trying to delete the document:", err);
            res.status(500).json("There was an error while trying to delete the document");
        });
});


router.post('/AssigmentSchema/Delete/home', (req, res) => {
    const { _id } = req.body;
   

    // Use findOneAndDelete with a query to find and delete the document
    AssignHomeSchema.findOneAndDelete({ _id })
        .then(() => {
            console.log("it was successfully deleted");
            res.json("it was successfully deleted");
        })
        .catch((err) => {
            console.log("there was an error while trying to delete the document:", err);
            res.status(500).json("There was an error while trying to delete the document");
        });
});

router.put("/AssigmentSchema", async (req, res) => {
    const { id, imageUri } = req.body;

 
  
    try {
      // Find the profile by ID and update the imageUri field
      const updatedProfile = await AssigmentSchema.findByIdAndUpdate(
        id,
        { imageUri: imageUri },
        { new: true } // Return the updated document
      );
  
      if (!updatedProfile) {
        return res.status(404).json({ error: "Profile not found" });
      }
  
      res.json(updatedProfile);
    } catch (error) {
      console.error("Error updating profile:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });


module.exports =  router