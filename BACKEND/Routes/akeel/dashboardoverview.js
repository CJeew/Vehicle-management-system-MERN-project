const router = require("express").Router();
const ManageParts = require("../../Models/manageparts.js");
const IssuedItems = require("../../Models/issueditems.js");
const ManageOrders = require("../../Models/manageorders.js")

// Endpoint to fetch dashboard overview data
router.get('/overview', async (req, res) => {
    try {
      // Fetch metrics from existing models
      const totalParts = await ManageParts.countDocuments();
      const totalIssuedItems = await IssuedItems.countDocuments();
      const totalOrders = await ManageOrders.countDocuments();
      
      // Calculate other metrics as needed
      
      // Send data as JSON response
      res.json({
        totalParts,
        totalIssuedItems,
        totalOrders,
        // Add more metrics here
      });
    } catch (error) {
      console.error('Error fetching dashboard overview data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

module.exports = router;