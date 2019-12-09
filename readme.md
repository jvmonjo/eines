## Repo per a l'assignatura Eines HTML i CSS d la UOC

Si estàs llegint açò o ets el meu professor o probablement has arribat ací per error ;)

[Live site](https://eines.netlify.com/) [![Netlify Status](https://api.netlify.com/api/v1/badges/5a4138cb-e55c-46e8-9acf-91877508fa8d/deploy-status)](https://app.netlify.com/sites/eines/deploys)

### Issues

- He tingut un problema de compilació a netlify perquè al meu ordinador tenia parcel instal·lat globalment, però calia incloure'l via dependència de desenvolupament per a que netlify sigui capaç de compilar el lloc.

- També m'he trobat amb aquest problema tan prompte com he afegit pàgines al projecte:
  https://github.com/parcel-bundler/parcel/issues/1315

## Observacions

- Instal·lat axios per a gestionar les cridades a api
- Afegida la llibreria d'estils css _hamburgers_ per gestionar el botó del menú
- En safari m'apareix un error que fa referència al iframe de youtube del que no he trobat solució:
  `Trying to call enumerateDevices from a frame without correct 'allow' attribute.`

## Dades

Les dades provenen d'aquestes apis:

https://api.got.show/

https://got-quotes.herokuapp.com/

## PAC 2

### Logo

Per al logo he usat una senzilla silueta d'escut en blanc. He usat com a format svg. Junt a l'escut les inicials GOT (Game of Thrones) amb tipografia "Cinzel Decorative".

### Peu

S'ha inclòs una imatge de perfil amb un efecte clip-path en forma de cercle. I s'ha reorganitzat la informació del perfil amb la inclusió d'enllaços socials i icones de fontawesome. El propi div on està la informació de perfil també s'ha modificat amb un clip-path en forma de polígon, i tanmateix el propi footer també se li ha incorporat un efecte clip-path.

També s'ha afegit una imatge decorativa d'un drac usant un element picture amb un source amb format webp per treure avantatge de les bondats d'aquest format en quant al nivell de compressió i qualitat, i un fallback amb png.

```html
<picture class="dragon">
  <source type="image/webp" srcset="/assets/img/drac.webp" />
  <source type="image/png" srcset="/assets/img/drac.png" />
  <img src="/assets/img/drac.webp" alt="" />
</picture>
```

### Pàgina de categoria

S'han inclòs les imatges de cada ítem dins de la seua corresponent targeta, amb un efecte clip-path i amb efecte zoom al fer hover sobre la targeta.

### Pàgina de detall

Pel que fa a les imatge presenta una imatge en format svg que representa la categoria. A continuació dins de la targeta està la imatge principal que s'adapta a qualsevol mida de pantalla amb css:

```css
#details img {
  width: 100%;
  height: auto;
}
```

A continuació hi ha dues imatge secundàries. La primera amb direcció d'art, presentarà una imatge apaïsada en pantalles de més de 800px d'amplada i una imatge retallada més bé quadrada en pantalles més petites:

```html
<picture>
  <source media="(max-width: 799px)" srcset="/assets/img/retallada.jpg" />
  <source media="(min-width: 800px)" srcset="/assets/img/ampla.jpg" />
  <img src="/assets/img/ampla.jpg" alt="" />
</picture>
```

Per a l'altra imatge s'ha usat un srcset per a presentar la imatge més petita possible en funció de la mida de pantalla:

```html
<img
  srcset="
    /assets/img/300.jpg  480w,
    /assets/img/600.jpg  600w,
    /assets/img/1200.jpg 800w
  "
  sizes="(max-width: 320px) 300px,
  (max-width: 480px) 600px,
  1200px"
  src="/assets/img/300.jpg"
  alt=""
/>
```

Per últim tenim el vídeo responsiu que ja va ser introduït a la pac1

```css
iframe {
  border: 0;
}

.video-responsive {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.video-responsive iframe,
.video-responsive object,
.video-responsive embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

### Efectes

Afegida a la pàgina de categoria amb un wrapper amb clip-path i efecte de zoom al fer hover. L'efecte de zoom s'ha fer amb transform / scale i s'ha suavitzat l'efecte amb un transition de 0.5s i ease-in-out.

Els enllaços de menú tenen un efecte de subratllat fet amb un pseudoelement ::after afegit durant el :hover.

```css
nav ul li.active::after {
  height: 3px;
  width: 100%;
  display: block;
  background-color: white;
  content: '';
}
```

Les imatges de la portada tenen un efecte de desplaçament, així com un efecte de profunditat al canviar l'ombra en fer hover aconseguit amb:

```css
#categories .card:hover {
  box-shadow: 0 1px 1px -2px rgba(0, 0, 0, 0.2);
  transition: 0.5s ease-in-out;
}

#categories .card:hover img {
  transform: translateY(20px);
  transition: 0.6s ease-in-out;
}
```

### Optimització d'imatges

Algunes imatges han estat redimensionades i comprimides usant una web app que use molt a sovint i que es pot usar com a app d'escriptori gràcies a que es tracta d'una pwa. Es tracta de https://squoosh.app/

Per exemple: les imatges anomenades 600.jpg (25kb) i 300.jpg (8kb) provenen de la redimensió i compressió de la imatge 1200.jpg (188kb).

També he usat aquesta app per a convertir drac.png a drac.webp

### Extra

S'ha creat un favicon a partir del logo usant la eina online https://realfavicongenerator.net/

Aquesta eina genera favicons adaptats a diferents plataformes i genera també propietats de color del tema així com una versió reduïda d'un web manifest.

```html
<link
  rel="apple-touch-icon"
  sizes="180x180"
  href="/assets/favicon/apple-touch-icon.png"
/>
<link
  rel="icon"
  type="image/png"
  sizes="32x32"
  href="/assets/favicon/favicon-32x32.png"
/>
<link
  rel="icon"
  type="image/png"
  sizes="16x16"
  href="/assets/favicon/favicon-16x16.png"
/>
<link rel="manifest" href="/assets/favicon/site.webmanifest" />
<link
  rel="mask-icon"
  href="/assets/favicon/safari-pinned-tab.svg"
  color="#4682B4"
/>
<meta name="msapplication-TileColor" content="#4682B4" />
<meta name="theme-color" content="#4682B4" />
```
