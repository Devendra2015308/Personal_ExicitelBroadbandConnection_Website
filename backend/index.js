import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import cors from "cors";

const app = express();
const PORT = 5000;

// Use CORS to allow requests from your front-end
app.use(cors({
  origin: "http://localhost:5173" // Replace this with your front-end URL
}));

app.use(bodyParser.json());

app.post("/submit_form", (req, res) => {
  const { name, contact, email, message } = req.body;

  const filePath = "form_data.txt";

  // Format the data to be written into the Notepad file
  const formData = `Name: ${name}\nContact: ${contact}\nEmail: ${email}\nMessage: ${message}\n\n`;

  // Append the data to the file
  fs.appendFile(filePath, formData, (err) => {
    if (err) {
      console.error("Error saving data to file", err);
      return res.status(500).send("Error saving data.");
    }

    res.status(200).send("Data saved successfully!");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${5000}`);
});
