import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.static(__dirname)); // Serve le immagini e i file statici

app.get("/", (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Check-in Guide - Via della Scala 17</title>
    <style>
      body { font-family: Arial, sans-serif; margin: 0; background: #f7f3e9; color: #333; }
      header { background: #a67856; color: white; padding: 15px; text-align: center; }
      .wrap { max-width: 800px; margin: auto; padding: 20px; }
      .card { background: white; padding: 15px; border-radius: 10px; margin-bottom: 20px; display: flex; gap: 15px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
      .card img { max-width: 100%; border-radius: 8px; }
      .num { font-size: 24px; background: #a67856; color: white; width: 40px; height: 40px; text-align: center; line-height: 40px; border-radius: 50%; flex-shrink: 0; }
      h2 { margin: 0 0 10px 0; font-size: 20px; }
      p { margin: 0 0 10px 0; font-size: 16px; }
      figcaption { font-size: 13px; color: #777; text-align: center; margin-top: 5px; }
    </style>
  </head>
  <body>
    <header>
      <h1>Check-in Guide</h1>
      <div class="addr">Via della Scala 17, Rome</div>
    </header>
    <div class="wrap">

      <div class="card step">
        <div class="num">1</div>
        <div>
          <h2>Find the building entrance</h2>
          <p>Locate the main door of the building as shown in the picture.</p>
          <figure>
            <img src="building-door.jpg" alt="Building entrance">
            <figcaption>Main building door</figcaption>
          </figure>
        </div>
      </div>

      <div class="card step">
        <div class="num">2</div>
        <div>
          <h2>Locate the intercom</h2>
          <p>Find the intercom panel at the entrance.</p>
          <figure>
            <img src="intercom-entrance.jpg" alt="Intercom panel">
            <figcaption>Intercom panel</figcaption>
          </figure>
        </div>
      </div>

      <div class="card step">
        <div class="num">3</div>
        <div>
          <h2>Pass through the courtyard</h2>
          <p>Walk straight through the courtyard following the arrow.</p>
          <figure>
            <img src="courtyard-arrow.jpg" alt="Courtyard with arrow">
            <figcaption>Direction through courtyard</figcaption>
          </figure>
        </div>
      </div>

      <div class="card step">
        <div class="num">4</div>
        <div>
          <h2>Find the green apartment door</h2>
          <p>Look for the green door which leads to the apartment.</p>
          <figure>
            <img src="apartment-green-door.jpg" alt="Green apartment door">
            <figcaption>Apartment green door</figcaption>
          </figure>
        </div>
      </div>

      <div class="card step">
        <div class="num">5</div>
        <div>
          <h2>Access the key lockbox</h2>
          <p>The key is inside the lockbox next to the door with the padlock symbol.</p>
          <figure>
            <img src="key-lockbox.jpg" alt="Key lockbox">
            <figcaption>Key lockbox</figcaption>
          </figure>
        </div>
      </div>

    </div>
  </body>
  </html>
  `;
  res.send(html);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
