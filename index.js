// Check-in — Via della Scala 17 (static guide)
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// serve static files (images live in the repo root)
app.use(express.static('.'));

// single page
app.get('/', (_req, res) => {
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Check-in Guide — Via della Scala 17</title>
<link rel="icon" href="building-door.jpg">
<style>
  :root { --brand:#2b2118; --ink:#1f2937; --muted:#6b7280; --bg:#f7f7f7; --card:#ffffff; --line:#e5e7eb; }
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--ink)}
  .wrap{max-width:860px;margin:0 auto;padding:16px}
  header{position:sticky;top:0;background:var(--card);border-bottom:1px solid var(--line);padding:12px 14px;z-index:5}
  h1{font-size:20px;margin:0}
  .addr{font-size:14px;color:var(--muted)}
  .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px;margin:14px 0}
  .step{display:flex;gap:12px;align-items:flex-start}
  .num{flex:0 0 36px;height:36px;border-radius:50%;background:var(--brand);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700}
  h2{margin:6px 0 8px 0;font-size:18px}
  p{margin:6px 0;line-height:1.45}
  figure{margin:10px 0}
  img{max-width:100%;height:auto;border-radius:10px;border:1px solid var(--line);display:block}
  figcaption{font-size:12px;color:var(--muted);margin-top:6px}
  .note{background:#eef2ff;border:1px solid #c7d2fe;color:#1e3a8a;padding:10px;border-radius:8px;margin-top:8px}
  .cta{display:inline-block;margin-top:6px;padding:10px 12px;border-radius:10px;background:var(--brand);color:#fff;text-decoration:none}
  footer{color:var(--muted);text-align:center;font-size:12px;margin:18px 0}
</style>
</head>
<body>
<header class="wrap">
  <h1>Check-in Guide — Via della Scala 17</h1>
  <div class="addr">Address: Via della Scala 17, Rome • Intercom: first column by the door (bottom button with white label)</div>
</header>

<main class="wrap">
  <!-- Step 1 -->
  <section class="card">
    <div class="step">
      <div class="num">1</div>
      <div>
        <h2>Arriving at the Building</h2>
        <p>When you reach <b>Via della Scala 17</b>, you have arrived at your final destination.</p>
        <figure>
          <img src="building-door.jpg" alt="Building entrance — Via della Scala 17">
          <figcaption>Main wooden entrance — Via della Scala 17.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Step 2 -->
  <section class="card">
    <div class="step">
      <div class="num">2</div>
      <div>
        <h2>Using the Entrance Intercom</h2>
        <p>At the entrance, use the intercom in the <b>first column closest to the door</b>. Press the <b>bottom button</b> with the <b>white label</b>.</p>
        <figure>
          <img src="intercom-entrance.jpg" alt="Entrance intercom — bottom button with white label highlighted">
          <figcaption>Entrance intercom — press the bottom button with the white label.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Step 3 -->
  <section class="card">
    <div class="step">
      <div class="num">3</div>
      <div>
        <h2>Second Intercom</h2>
        <p>After you hear the click and enter the gate, use the <b>second intercom</b> inside and ring again.</p>
      </div>
    </div>
  </section>

  <!-- Step 4 -->
  <section class="card">
    <div class="step">
      <div class="num">4</div>
      <div>
        <h2>Entering the Building</h2>
        <p>When you hear the click, <b>push the door</b> and go inside.</p>
      </div>
    </div>
  </section>

  <!-- Step 5 -->
  <section class="card">
    <div class="step">
      <div class="num">5</div>
      <div>
        <h2>Inside the Courtyard</h2>
        <p>Walk straight, <b>follow the red arrow</b>, then <b>turn left</b>. You will see a <b>green door</b> — that is your apartment.</p>
        <figure>
          <img src="corridor-arrow.jpg" alt="Path with red arrow indicating where to turn left">
          <figcaption>Walk straight, then turn left as shown by the arrow.</figcaption>
        </figure>
        <figure>
          <img src="apartment-door.jpg" alt="Green apartment door inside the courtyard">
          <figcaption>The green door is your apartment entrance.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Step 6 -->
  <section class="card">
    <div class="step">
      <div class="num">6</div>
      <div>
        <h2>Getting the Keys & Entering</h2>
        <p>Facing the green door, on the <b>left-hand side</b> you will see a bar with a <b>lockbox</b>.</p>
        <div class="note">Combination: <b>6793</b>. Take the keys, <b>close the lockbox</b>, scramble the numbers, then use the <b>grey key</b> to open the door.</div>
        <figure>
          <img src="key-safe.jpg" alt="Lockbox with combination wheels">
          <figcaption>Lockbox — use code 6793, then scramble the numbers after taking the key.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section class="card">
    <h2>Need help?</h2>
    <p>Call or WhatsApp: <a class="cta" href="tel:+393355245756">+39 335 524 5756</a></p>
  </section>

  <footer>niceflatinrome.com • Quick visual guide for arrivals at Via della Scala 17</footer>
</main>
</body>
</html>`;
  res.setHeader('content-type','text/html; charset=utf-8');
  res.end(html);
});

const port = process.env.PORT || 8787;
app.listen(port, () => console.log('Check-in guide running on http://localhost:'+port));
