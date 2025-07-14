import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Optional: 404 handler
app.use((req, res) => {
    res.status(404).send("Route not found.");
});

app.listen(port, () =>{
    console.log(`Server is running at: ${port}`);
})