 // Check-in — Via della Scala 17, unit A/1 (multilingual static guide)
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // serve le immagini dalla root del repo

// ---- TRANSLATIONS ----
const T = {
  en: {
    langName: 'English',
    title: 'Check-in Guide — Via della Scala 17, unit A/1',
    addressLine: 'Address: Via della Scala 17, Rome • Unit: A/1',
    navHelp: 'Need help?',
    call: 'Call or WhatsApp',
    phone: '+39 335 524 5756',

    step1_t: 'Finding the Building Entrance',
    step1_p: 'Welcome in front of your building door.',
    step1_cap: 'Main entrance — Via della Scala 17.',

    step2_t: 'Locate the Intercom',
    step2_p1: 'Press the intercom circled in red, then call me at',
    step2_p2: 'Walk straight and on your right-hand side you will find a second intercom. Press button A/1. Then I will open the door.',
    step2_cap1: 'Entrance intercom — call me after pressing.',
    step2_cap2: 'Second intercom — press A/1.',

    step3_t: 'Pass Through the First Door',
    step3_p: 'After the click, enter. Turn left.',
    step3_cap: 'Follow the arrow, then turn left.',

    step4_t: 'Find the Apartment Door',
    step4_p: 'This is the door of your apartment. On the left-hand side of the door you will see bicycles. There is a grey key box hanging from the front of the iron bar.',
    step4_cap: 'Green door = your apartment entrance.',

    step5_t: 'Access the Key',
    step5_note: 'Once you locate the key box: enter the combination, open the slot from the top, take the key, close the slot and MIX THE NUMBERS. Use the grey key to get inside the apartment.',
    step5_cap: 'Key box location — grey lockbox on the iron bar.',

    footer: 'niceflatinrome.com • Quick visual guide for arrivals at Via della Scala 17, unit A/1',
    langLabel: 'Language'
  },

  es: {
    langName: 'Español',
    title: 'Guía de Check-in — Via della Scala 17, unidad A/1',
    addressLine: 'Dirección: Via della Scala 17, Roma • Unidad: A/1',
    navHelp: '¿Necesitas ayuda?',
    call: 'Llamar o WhatsApp',
    phone: '+39 335 524 5756',

    step1_t: 'Entrada del edificio',
    step1_p: 'Bienvenido frente a la puerta del edificio.',
    step1_cap: 'Entrada principal — Via della Scala 17.',

    step2_t: 'Localiza el portero',
    step2_p1: 'Pulsa el timbre señalado en rojo y después llámame al',
    step2_p2: 'Camina recto y, a tu derecha, encontrarás un segundo portero. Pulsa el botón A/1. Luego te abriré la puerta.',
    step2_cap1: 'Portero de la entrada — llámame después de pulsar.',
    step2_cap2: 'Segundo portero — pulsa A/1.',

    step3_t: 'Pasa la primera puerta',
    step3_p: 'Tras el “clic”, entra. Gira a la izquierda.',
    step3_cap: 'Sigue la flecha y gira a la izquierda.',

    step4_t: 'Encuentra la puerta del apartamento',
    step4_p: 'Esta es la puerta de tu apartamento. A la izquierda verás bicicletas. Hay una caja de llaves gris colgada en la barra de hierro.',
    step4_cap: 'Puerta verde = entrada del apartamento.',

    step5_t: 'Accede a la llave',
    step5_note: 'Cuando encuentres la caja: marca la combinación, abre la ranura por arriba, toma la llave, cierra la ranura y MEZCLA LOS NÚMEROS. Usa la llave gris para entrar al apartamento.',
    step5_cap: 'Ubicación de la caja de llaves — caja gris en la barra de hierro.',

    footer: 'niceflatinrome.com • Guía visual para llegadas a Via della Scala 17, unidad A/1',
    langLabel: 'Idioma'
  },

  fr: {
    langName: 'Français',
    title: 'Guide d’arrivée — Via della Scala 17, unité A/1',
    addressLine: 'Adresse : Via della Scala 17, Rome • Unité : A/1',
    navHelp: 'Besoin d’aide ?',
    call: 'Appeler ou WhatsApp',
    phone: '+39 335 524 5756',

    step1_t: 'Entrée de l’immeuble',
    step1_p: 'Bienvenue devant la porte de votre immeuble.',
    step1_cap: 'Entrée principale — Via della Scala 17.',

    step2_t: 'Trouver l’interphone',
    step2_p1: 'Appuyez sur l’interphone entouré en rouge puis appelez-moi au',
    step2_p2: 'Marchez tout droit et, sur votre droite, vous trouverez un second interphone. Appuyez sur le bouton A/1. J’ouvrirai la porte.',
    step2_cap1: 'Interphone d’entrée — appelez après avoir appuyé.',
    step2_cap2: 'Second interphone — bouton A/1.',

    step3_t: 'Passez la première porte',
    step3_p: 'Après le clic, entrez. Tournez à gauche.',
    step3_cap: 'Suivez la flèche puis tournez à gauche.',

    step4_t: 'Trouvez la porte de l’appartement',
    step4_p: 'Voici la porte de votre appartement. À gauche de la porte, vous verrez des vélos. Une boîte à clés grise est suspendue à la barre en fer.',
    step4_cap: 'Porte verte = entrée de l’appartement.',

    step5_t: 'Récupérer la clé',
    step5_note: 'Une fois la boîte trouvée : saisissez la combinaison, ouvrez par le haut, prenez la clé, refermez et MÉLANGEZ LES CHIFFRES. Utilisez la clé grise pour entrer dans l’appartement.',
    step5_cap: 'Emplacement de la boîte à clés — boîte grise sur la barre en fer.',

    footer: 'niceflatinrome.com • Guide visuel pour les arrivées à Via della Scala 17, A/1',
    langLabel: 'Langue'
  },

  de: {
    langName: 'Deutsch',
    title: 'Check-in-Anleitung — Via della Scala 17, Einheit A/1',
    addressLine: 'Adresse: Via della Scala 17, Rom • Einheit: A/1',
    navHelp: 'Brauchen Sie Hilfe?',
    call: 'Anrufen oder WhatsApp',
    phone: '+39 335 524 5756',

    step1_t: 'Hauseingang finden',
    step1_p: 'Willkommen vor Ihrer Hauseingangstür.',
    step1_cap: 'Haupteingang — Via della Scala 17.',

    step2_t: 'Sprechanlage finden',
    step2_p1: 'Drücken Sie die rot markierte Klingel und rufen Sie mich dann an unter',
    step2_p2: 'Gehen Sie geradeaus; rechts finden Sie eine zweite Sprechanlage. Drücken Sie die Taste A/1. Danach öffne ich die Tür.',
    step2_cap1: 'Eingangs-Sprechanlage — rufen Sie nach dem Drücken an.',
    step2_cap2: 'Zweite Sprechanlage — Taste A/1.',

    step3_t: 'Durch die erste Tür gehen',
    step3_p: 'Nach dem Klick eintreten. Dann links abbiegen.',
    step3_cap: 'Pfeil folgen und links abbiegen.',

    step4_t: 'Wohnungstür finden',
    step4_p: 'Das ist Ihre Wohnungstür. Links neben der Tür sehen Sie Fahrräder. An der Eisenstange hängt eine graue Schlüsselkassette.',
    step4_cap: 'Grüne Tür = Wohnungseingang.',

    step5_t: 'Schlüssel entnehmen',
    step5_note: 'Sobald Sie die Kassette gefunden haben: Code eingeben, oben öffnen, Schlüssel entnehmen, schließen und ZAHLEN MISCHEN. Mit dem grauen Schlüssel die Wohnung öffnen.',
    step5_cap: 'Position der Schlüsselkassette — graue Box an der Eisenstange.',

    footer: 'niceflatinrome.com • Visuelle Anleitung für die Ankunft Via della Scala 17, A/1',
    langLabel: 'Sprache'
  },

  it: { // opzionale
    langName: 'Italiano',
    title: 'Guida Check-in — Via della Scala 17, int. A/1',
    addressLine: 'Indirizzo: Via della Scala 17, Roma • Interno: A/1',
    navHelp: 'Serve aiuto?',
    call: 'Chiama o WhatsApp',
    phone: '+39 335 524 5756',

    step1_t: "Ingresso dell'edificio",
    step1_p: 'Benvenuto davanti al portone.',
    step1_cap: 'Ingresso principale — Via della Scala 17.',

    step2_t: 'Trova il citofono',
    step2_p1: 'Premi il citofono cerchiato in rosso e poi chiamami al',
    step2_p2: 'Prosegui dritto: sulla destra trovi un secondo citofono. Premi il tasto A/1. Poi apro io.',
    step2_cap1: 'Citofono ingresso — chiamami dopo aver premuto.',
    step2_cap2: 'Secondo citofono — premi A/1.',

    step3_t: 'Attraversa il primo portone',
    step3_p: 'Dopo il click entra. Svolta a sinistra.',
    step3_cap: "Segui la freccia e gira a sinistra.",

    step4_t: "Trova la porta dell'appartamento",
    step4_p: 'Questa è la porta del tuo appartamento. A sinistra vedrai delle biciclette. C’è una key box grigia appesa alla sbarra di ferro.',
    step4_cap: 'Porta verde = ingresso appartamento.',

    step5_t: 'Prendi la chiave',
    step5_note: 'Trovata la key box: inserisci la combinazione, apri dall’alto, prendi la chiave, richiudi e MESCOLA I NUMERI. Usa la chiave grigia per entrare.',
    step5_cap: 'Posizione della key box — box grigia sulla sbarra di ferro.',

    footer: 'niceflatinrome.com • Guida rapida per arrivi a Via della Scala 17, A/1',
    langLabel: 'Lingua'
  }
};

const fallback = 'en';

app.get('/', (req, res) => {
  const lang = (req.query.lang || '').toLowerCase();
  const L = T[lang] || T[fallback];

  const buttons = Object.entries(T)
    .map(([code, v]) => {
      const active = (L === T[code]) ? 'style="font-weight:700; text-decoration:underline;"' : '';
      return `<a ${active} href="?lang=${code}">${v.langName}</a>`;
    }).join(' · ');

  const html = `<!doctype html>
<html lang="${lang || fallback}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${L.title}</title>
<link rel="icon" href="building-door.jpg">
<style>
  :root { --brand:#2b2118; --ink:#1f2937; --muted:#6b7280; --bg:#f7f7f7; --card:#ffffff; --line:#e5e7eb;}
  *{box-sizing:border-box} body{margin:0;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--ink)}
  .wrap{max-width:860px;margin:0 auto;padding:16px}
  header{position:sticky;top:0;background:var(--card);border-bottom:1px solid var(--line);padding:12px 14px;z-index:5}
  h1{font-size:20px;margin:0}
  .addr{font-size:14px;color:var(--muted)}
  .lang{font-size:12px;margin-top:6px;color:var(--muted)}
  .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:14px;margin:14px 0}
  .step{display:flex;gap:12px;align-items:flex-start}
  .num{flex:0 0 36px;height:36px;border-radius:50%;background:var(--brand);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700}
  h2{margin:6px 0 8px 0;font-size:18px}
  p{margin:6px 0;line-height:1.45}
  figure{margin:10px 0}
  img{max-width:100%;height:auto;border-radius:10px;border:1px solid var(--line);display:block}
  figcaption{font-size:12px;color:var(--muted);margin-top:6px}
  .note{background:#fff7ed;border:1px solid #fed7aa;color:#7c2d12;padding:10px;border-radius:8px;margin-top:8px}
  .cta{display:inline-block;margin-left:6px;padding:7px 10px;border-radius:10px;background:var(--brand);color:#fff;text-decoration:none}
  footer{color:var(--muted);text-align:center;font-size:12px;margin:18px 0}
</style>
</head>
<body>
<header class="wrap">
  <h1>${L.title}</h1>
  <div class="addr">${L.addressLine}</div>
  <div class="lang">${L.langLabel}: ${buttons}</div>
</header>

<main class="wrap">
  <!-- Step 1 -->
  <section class="card">
    <div class="step">
      <div class="num">1</div>
      <div>
        <h2>${L.step1_t}</h2>
        <p>${L.step1_p}</p>
        <figure>
          <img src="building-door.jpg" alt="Building entrance">
          <figcaption>${L.step1_cap}</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Step 2 -->
  <section class="card">
    <div class="step">
      <div class="num">2</div>
      <div>
        <h2>${L.step2_t}</h2>
        <p>${L.step2_p1} <a class="cta" href="tel:+393355245756">${L.phone}</a>.</p>
        <figure>
          <img src="intercom-entrance.jpg" alt="Entrance intercom">
          <figcaption>${L.step2_cap1}</figcaption>
        </figure>
        <p>${L.step2_p2}</p>
        <figure>
          <img src="second-intercom-a1.jpg" alt="Second intercom A/1">
          <figcaption>${L.step2_cap2}</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Step 3 -->
  <section class="card">
    <div class="step">
      <div class="num">3</div>
      <div>
        <h2>${L.step3_t}</h2>
        <p>${L.step3_p}</p>
        <figure>
          <img src="courtyard-arrow.jpg" alt="Corridor and arrow">
          <figcaption>${L.step3_cap}</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Step 4 -->
  <section class="card">
    <div class="step">
      <div class="num">4</div>
      <div>
        <h2>${L.step4_t}</h2>
        <p>${L.step4_p}</p>
        <figure>
          <img src="apartment-green-door.jpg" alt="Apartment green door">
          <figcaption>${L.step4_cap}</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <!-- Step 5 -->
  <section class="card">
    <div class="step">
      <div class="num">5</div>
      <div>
        <h2>${L.step5_t}</h2>
        <figure>
          <img src="keylockbox-location.jpg" alt="Key lockbox location">
          <figcaption>${L.step5_cap}</figcaption>
        </figure>
        <div class="note">${L.step5_note}</div>
      </div>
    </div>
  </section>

  <section class="card">
    <h2>${L.navHelp}</h2>
    <p>${L.call}: <a class="cta" href="tel:+393355245756">${L.phone}</a></p>
  </section>

  <footer>${L.footer}</footer>
</main>
</body>
</html>`;
  res.setHeader('content-type', 'text/html; charset=utf-8');
  res.end(html);
});

const port = process.env.PORT || 8787;
app.listen(port, () => console.log('Guide running on http://localhost:' + port));
