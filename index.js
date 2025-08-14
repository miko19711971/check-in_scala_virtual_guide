// Check-in — Via della Scala 17 (static guide)
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// serve static files (images are in the repo root)
app.use(express.static('.'));

// single page
app.get('/', (_req, res) => {
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Check-in Guide — Via della Scala 17 (A/1)</title>
<link rel="icon" href="building-door.jpg">
<style>
  :root { --brand:#2b2118; --ink:#1f2937; --muted:#6b7280; --bg:#f7f7f7; --card:#ffffff; --line:#e5e7eb; }
  *{box-sizing:border-box}
  body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--ink)}
  .wrap{max-width:860px;margin:0 auto;padding:16px}
  .topbar{background:var(--brand);color:#fff}
  .topbar .wrap{padding:10px 16px}
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

<!-- brown bar with full address -->
<div class="topbar">
  <div class="wrap"><strong>Address:</strong> Via della Scala 17, unit A/1</div>
</div>

<header class="wrap">
  <h1>Check-in Guide — Via della Scala 17</h1>
  <div class="addr">Unit: A/1 • Call/WhatsApp: +39 335 524 5756</div>
</header>

<main class="wrap">
  <!-- 1 -->
  <section class="card">
    <div class="step">
      <div class="num">1</div>
      <div>
        <h2>Finding the Building Entrance</h2>
        <p><b>Welcome in front of your building door.</b></p>
        <figure>
          <img src="building-door.jpg" alt="Main entrance — Via della Scala 17">
          <figcaption>Main entrance — Via della Scala 17.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- 2 -->
  <section class="card">
    <div class="step">
      <div class="num">2</div>
      <div>
        <h2>Locate the Intercom</h2>
        <p><b>Press the intercom circled in red</b>, then call me at <a class="cta" href="tel:+393355245756">+39 335 524 5756</a>.</p>
        <p>Walk straight and on your <b>right-hand</b> you find a second interphone, press the button <b>A/1</b>. Then I will open the door.</p>
        <figure>
          <img src="intercom-entrance.jpg" alt="Entrance intercom — circled in red">
          <figcaption>Entrance intercom — press the circled button, then call.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- 3 -->
  <section class="card">
    <div class="step">
      <div class="num">3</div>
      <div>
        <h2>Pass Through the Passage</h2>
        <p>After the click, enter and walk forward. <b>Turn left.</b></p>
        <figure>
          <img src="courtyard-arrow.jpg" alt="Passage with arrow — turn left">
          <figcaption>Walk straight and then turn left as shown.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- 4 -->
  <section class="card">
    <div class="step">
      <div class="num">4</div>
      <div>
        <h2>Find the Green Apartment Door</h2>
        <p><b>This is the door of your apartment.</b> On the left-hand side of the door you will see bicycles. There is a grey key box hanging from the front of the iron bar.</p>
        <figure>
          <img src="apartment-green-door.jpg" alt="Green apartment door">
          <figcaption>Green door — your apartment entrance.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- 5 -->
  <section class="card">
    <div class="step">
      <div class="num">5</div>
      <div>
        <h2>Access the Key</h2>
        <p><b>Once located the key box</b> digit the combination, open the slot from the top, get the key, close the slot and <b>MIX THE NUMBERS</b>.</p>
        <p>Use the <b>grey key</b> to get inside the apartment.</p>
        <figure>
          <img src="key-lockbox.jpg" alt="Grey key lockbox">
          <figcaption>Grey key lockbox — scramble the code after use.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section class="card">
    <h2>Need help?</h2>
    <p>Call or WhatsApp: <a class="cta" href="tel:+393355245756">+39 335 524 5756</a></p>
  </section>

  <footer>niceflatinrome.com • Quick visual guide for arrivals at Via della Scala 17 (A/1)</footer>
</main>
</body>
</html>`;
  res.setHeader('content-type','text/html; charset=utf-8');
  res.end(html);
});

const port = process.env.PORT || 8787;
app.listen(port, () => console.log('Check-in guide running on http://localhost:'+port));
