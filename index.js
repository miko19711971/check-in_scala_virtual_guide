 // Check-in — Via della Scala 17 (multilingual guide)
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

const content = {
  en: {
    title: "Check-in Guide — Via della Scala 17, unit A/1",
    address: "Address: Via della Scala 17, Rome • Unit: A/1",
    steps: [
      {
        num: 1,
        title: "Arriving at the Building",
        text: "Look for the green door as shown below.",
        img: "apartment-green-door.jpg",
        caption: "Green door = your apartment entrance."
      },
      {
        num: 2,
        title: "Access the Key",
        text: "On the left-hand side of the door you will see bicycles. There is a grey key box hanging from the front of the iron bar. Once you locate the key box: enter the combination, open the slot from the top, take the key, close the slot and MIX THE NUMBERS. Use the grey key to get inside the apartment.",
        img: "key-lockbox.jpg",
        caption: "Grey lockbox on the iron bar."
      }
    ],
    help: "Need help?",
    call: "Call or WhatsApp"
  },
  it: {
    title: "Guida Check-in — Via della Scala 17, unità A/1",
    address: "Indirizzo: Via della Scala 17, Roma • Unità: A/1",
    steps: [
      {
        num: 1,
        title: "Arrivo all'edificio",
        text: "Cerca la porta verde come mostrato qui sotto.",
        img: "apartment-green-door.jpg",
        caption: "Porta verde = ingresso del tuo appartamento."
      },
      {
        num: 2,
        title: "Accedere alla chiave",
        text: "Sul lato sinistro della porta vedrai delle biciclette. C'è una cassetta grigia per le chiavi appesa alla parte frontale della barra di ferro. Una volta trovata: inserisci il codice, apri lo sportello dall'alto, prendi la chiave, chiudi lo sportello e MESCOLA I NUMERI. Usa la chiave grigia per entrare in appartamento.",
        img: "key-lockbox.jpg",
        caption: "Cassetta grigia per chiavi sulla barra di ferro."
      }
    ],
    help: "Serve aiuto?",
    call: "Chiama o WhatsApp"
  },
  es: {
    title: "Guía de Check-in — Via della Scala 17, unidad A/1",
    address: "Dirección: Via della Scala 17, Roma • Unidad: A/1",
    steps: [
      {
        num: 1,
        title: "Llegada al edificio",
        text: "Busca la puerta verde como se muestra abajo.",
        img: "apartment-green-door.jpg",
        caption: "Puerta verde = entrada de su apartamento."
      },
      {
        num: 2,
        title: "Acceder a la llave",
        text: "A la izquierda de la puerta verá bicicletas. Hay una caja gris para llaves colgada en la parte frontal de la barra de hierro. Una vez localizada: introduzca la combinación, abra la ranura desde arriba, saque la llave, cierre la ranura y MEZCLE LOS NÚMEROS. Use la llave gris para entrar al apartamento.",
        img: "key-lockbox.jpg",
        caption: "Caja gris para llaves en la barra de hierro."
      }
    ],
    help: "¿Necesita ayuda?",
    call: "Llamar o WhatsApp"
  },
  fr: {
    title: "Guide d'arrivée — Via della Scala 17, unité A/1",
    address: "Adresse : Via della Scala 17, Rome • Unité : A/1",
    steps: [
      {
        num: 1,
        title: "Arrivée au bâtiment",
        text: "Cherchez la porte verte comme montré ci-dessous.",
        img: "apartment-green-door.jpg",
        caption: "Porte verte = entrée de votre appartement."
      },
      {
        num: 2,
        title: "Accéder à la clé",
        text: "Sur le côté gauche de la porte, vous verrez des vélos. Il y a une boîte grise à clés suspendue à l'avant de la barre de fer. Une fois localisée : entrez la combinaison, ouvrez la fente par le haut, prenez la clé, refermez et MÉLANGEZ LES NUMÉROS. Utilisez la clé grise pour entrer dans l'appartement.",
        img: "key-lockbox.jpg",
        caption: "Boîte à clés grise sur la barre de fer."
      }
    ],
    help: "Besoin d'aide ?",
    call: "Appeler ou WhatsApp"
  },
  de: {
    title: "Check-in Anleitung — Via della Scala 17, Einheit A/1",
    address: "Adresse: Via della Scala 17, Rom • Einheit: A/1",
    steps: [
      {
        num: 1,
        title: "Ankunft am Gebäude",
        text: "Suchen Sie nach der grünen Tür wie unten gezeigt.",
        img: "apartment-green-door.jpg",
        caption: "Grüne Tür = Eingang Ihrer Wohnung."
      },
      {
        num: 2,
        title: "Zugang zum Schlüssel",
        text: "Links neben der Tür sehen Sie Fahrräder. Es gibt eine graue Schlüsselbox, die an der Vorderseite der Eisenstange hängt. Sobald Sie sie gefunden haben: Geben Sie die Kombination ein, öffnen Sie den Schlitz von oben, nehmen Sie den Schlüssel, schließen Sie den Schlitz und MISCHEN SIE DIE ZAHLEN. Verwenden Sie den grauen Schlüssel, um in die Wohnung zu gelangen.",
        img: "key-lockbox.jpg",
        caption: "Graue Schlüsselbox an der Eisenstange."
      }
    ],
    help: "Brauchen Sie Hilfe?",
    call: "Anrufen oder WhatsApp"
  }
};

app.get('/', (req, res) => {
  const lang = req.query.lang || 'en';
  const t = content[lang] || content.en;

  let stepsHtml = t.steps.map(step => `
    <section class="card">
      <div class="step">
        <div class="num">${step.num}</div>
        <div>
          <h2>${step.title}</h2>
          <p>${step.text}</p>
          <figure>
            <img src="${step.img}" alt="">
            <figcaption>${step.caption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  `).join('');

  const html = `<!doctype html>
  <html lang="${lang}">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>${t.title}</title>
    <style>
      body{margin:0;font-family:sans-serif;background:#f7f7f7}
      .wrap{max-width:860px;margin:0 auto;padding:16px}
      .card{background:#fff;border:1px solid #ccc;border-radius:12px;padding:14px;margin:14px 0}
      .step{display:flex;gap:12px;align-items:flex-start}
      .num{flex:0 0 36px;height:36px;border-radius:50%;background:#2b2118;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700}
      img{max-width:100%;border-radius:10px;border:1px solid #ccc}
      .lang-buttons a{margin-right:5px;text-decoration:none;padding:6px 8px;background:#2b2118;color:#fff;border-radius:6px;font-size:14px}
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="lang-buttons">
        <a href="?lang=en">EN</a>
        <a href="?lang=it">IT</a>
        <a href="?lang=es">ES</a>
        <a href="?lang=fr">FR</a>
        <a href="?lang=de">DE</a>
      </div>
      <h1>${t.title}</h1>
      <div>${t.address}</div>
      ${stepsHtml}
      <section class="card">
        <h2>${t.help}</h2>
        <p>${t.call}: <a href="tel:+393355245756">+39 335 524 5756</a></p>
      </section>
    </div>
  </body>
  </html>`;

  res.setHeader('content-type','text/html; charset=utf-8');
  res.end(html);
});

const port = process.env.PORT || 8787;
app.listen(port, () => console.log(`Check-in guide running on http://localhost:${port}`));
