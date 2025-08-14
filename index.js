// Check-in — Via della Scala 17 (static guide)
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// serve static files (images in repo root)
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
  .note{background:#fff7ed;border:1px solid #fed7aa;color:#7c2d12;padding:10px;border-radius:8px;margin-top:8px}
  .cta{display:inline-block;margin-top:6px;padding:10px 12px;border-radius:10px;background:var(--brand);color:#fff;text-decoration:none}
  footer{color:var(--muted);text-align:center;font-size:12px;margin:18px 0}
</style>
</head>
<body>
<header class="wrap">
  <h1>Check-in Guide — Via della Scala 17</h1>
  <div class="addr">Address: Via della Scala 17, Rome</div>
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
          <figcaption>Main entrance — Via della Scala 17.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Step 2 -->
  <section class="card">
    <div class="step">
      <div class="num">2</div>
      <div>
        <h2>Using the Intercom (outside)</h2>
        <p>At the street entrance, ring the <b>first button from the bottom</b> on the row closest to the door — it has a <b>white label</b>.</p>
        <figure>
          <img src="intercom-entrance.jpg" alt="Entrance intercom — press the first from the bottom with white label">
          <figcaption>Entrance intercom — first from the bottom, white label.</figcaption>
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
        <p>Enter and ring the <b>second intercom</b> inside the building. After you hear the <b>click</b>, the door is unlocked — push to enter.</p>
      </div>
    </div>
  </section>

  <!-- Step 4 -->
  <section class="card">
    <div class="step">
      <div class="num">4</div>
      <div>
        <h2>Walk to the Apartment</h2>
        <p>Walk straight, <b>follow the red arrow</b>, then turn <b>left</b>. You will see a <b>green door</b> — that is your apartment.</p>
        <figure>
          <img src="courtyard-arrow.jpg" alt="Walk straight then left following the red arrow">
          <figcaption>Walk straight and turn left as shown.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Step 5 -->
  <section class="card">
    <div class="step">
      <div class="num">5</div>
      <div>
        <h2>Green Door — Your Apartment</h2>
        <figure>
          <img src="apartment-green-door.jpg" alt="Green apartment door">
          <figcaption>Green door — apartment entrance.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Step 6 -->
  <section class="card">
    <div class="step">
      <div class="num">6</div>
      <div>
        <h2>Take the Keys from the Lockbox</h2>
        <p>Looking at the green door, on the <b>left side</b> you’ll see a bar with the lockbox hanging.</p>
        <p>Code is <b>6793</b>. Take the keys, <b>close the lockbox</b>, and <b>scramble the numbers</b>. Use the <b>grey key</b> to open the door.</p>
        <figure>
          <img src="key-lockbox.jpg" alt="Lockbox with combination 6793">
          <figcaption>Lockbox — code 6793. Close and mix numbers after use.</figcaption>
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
app.listen(port, () => console.log('Check-in guide running on http://localhost:' + port));
