// Check-in — Via della Scala 17 (virtual guide)
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// serve i file statici (le immagini sono nella root del repo)
app.use(express.static('.'));

app.get('/', (_req, res) => {
  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Check-in Guide — Via della Scala 17, unit A/1</title>
<link rel="icon" href="building-door.jpg">
<style>
  :root{--brand:#2b2118;--ink:#1f2937;--muted:#6b7280;--bg:#f7f7f7;--card:#fff;--line:#e5e7eb}
  *{box-sizing:border-box} body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--ink)}
  .wrap{max-width:860px;margin:0 auto;padding:16px}
  header{position:sticky;top:0;background:var(--card);border-bottom:1px solid var(--line);padding:12px 14px;z-index:5}
  h1{font-size:20px;margin:0}
  .addr{font-size:14px;color:var(--muted)}
  .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px;margin:14px 0}
  .step{display:flex;gap:12px;align-items:flex-start}
  .num{flex:0 0 36px;height:36px;border-radius:50%;background:var(--brand);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700}
  h2{margin:6px 0 8px 0;font-size:18px}
  p{margin:6px 0;line-height:1.45}
  figure{margin:10px 0} img{max-width:100%;height:auto;border-radius:10px;border:1px solid var(--line);display:block}
  figcaption{font-size:12px;color:var(--muted);margin-top:6px}
  .note{background:#fff7ed;border:1px solid #fed7aa;color:#7c2d12;padding:10px;border-radius:8px;margin-top:8px}
  .cta{display:inline-block;margin:6px 0;padding:10px 12px;border-radius:10px;background:var(--brand);color:#fff;text-decoration:none}
  footer{color:var(--muted);text-align:center;font-size:12px;margin:18px 0}
  .phone{display:inline-block;background:#231a14;color:#fff;border-radius:10px;padding:8px 12px;text-decoration:none}
</style>
</head>
<body>
<header class="wrap">
  <h1>Check-in Guide — Via della Scala 17, unit A/1</h1>
  <div class="addr">Address: Via della Scala 17, Rome • Unit: <b>A/1</b></div>
</header>

<main class="wrap">
  <!-- Step 1 -->
  <section class="card">
    <div class="step">
      <div class="num">1</div>
      <div>
        <h2>Finding the Building Entrance</h2>
        <p>Welcome in front of your building door.</p>
        <figure>
          <img src="building-door.jpg" alt="Main building door — Via della Scala 17">
          <figcaption>Entrance — Via della Scala 17.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Step 2 -->
  <section class="card">
    <div class="step">
      <div class="num">2</div>
      <div>
        <h2>Locate the Intercoms</h2>
        <p>Press the intercom <b>circled in red</b>, then call me at
          <a class="phone" href="tel:+393355245756">+39&nbsp;335&nbsp;524&nbsp;5756</a>.
        </p>

        <!-- Primo citofono: immagine subito sotto il numero -->
        <figure>
          <img src="intercom-entrance.jpg" alt="First intercom at the entrance">
          <figcaption>Entrance intercom — press the circled button, then call me.</figcaption>
        </figure>

        <p>Walk straight and on your <b>right-hand side</b> you’ll find a second intercom.
           Press the button <b>A/1</b>. Then I will open the door.</p>

        <!-- Secondo citofono -->
        <figure>
          <img src="second-intercom-a1.jpg" alt="Second intercom — press A/1">
          <figcaption>Second intercom in the passage — press <b>A/1</b>.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Step 3 -->
  <section class="card">
    <div class="step">
      <div class="num">3</div>
      <div>
        <h2>Pass Through the Door</h2>
        <p>After the click, push to enter. <b>Turn left.</b></p>
        <figure>
          <img src="courtyard-arrow.jpg" alt="Corridor — go straight and then left">
          <figcaption>Go straight, then turn left as shown.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Step 4 -->
  <section class="card">
    <div class="step">
      <div class="num">4</div>
      <div>
        <h2>Find the Green Apartment Door</h2>
        <p>This is the door of your apartment.</p>
        <figure>
          <img src="apartment-green-door.jpg" alt="Green apartment door">
          <figcaption>Green door = your apartment entrance.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Step 5 -->
  <section class="card">
    <div class="step">
      <div class="num">5</div>
      <div>
        <h2>Access the Key</h2>
        <p>On the <b>left-hand side</b> of the door you will see bicycles. There is a <b>grey key box</b> hanging from the front of the iron bar.</p>

        <!-- Foto del lucchetto/lockbox presso le biciclette -->
        <figure>
          <img src="keylockbox-location.jgg" alt="Grey key box hanging from the iron bar near the bicycles">
          <figcaption>Key box location — grey lockbox on the iron bar.</figcaption>
        </figure>

        <div class="note">
          <b>Once you locate the key box:</b> enter the combination, open the slot from the top, take the key,
          close the slot and <b>MIX THE NUMBERS</b>. Use the <b>grey key</b> to get inside the apartment.
        </div>
      </div>
    </div>
  </section>

  <section class="card">
    <h2>Need help?</h2>
    <p>Call or WhatsApp: <a class="cta" href="tel:+393355245756">+39 335 524 5756</a></p>
  </section>

  <footer>niceflatinrome.com • Quick visual guide for arrivals at Via della Scala 17, unit A/1</footer>
</main>
</body>
</html>`;
  res.setHeader('content-type','text/html; charset=utf-8');
  res.end(html);
});

const port = process.env.PORT || 8787;
app.listen(port, () => console.log('Check-in guide running on http://localhost:'+port));
