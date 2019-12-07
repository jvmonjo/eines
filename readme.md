## Repo per a l'assignatura Eines HTML i CSS d la UOC

Si estàs llegint açò o ets el meu professor o probablement has arribat ací per error ;)

[Live site](https://eines.netlify.com/) [![Netlify Status](https://api.netlify.com/api/v1/badges/5a4138cb-e55c-46e8-9acf-91877508fa8d/deploy-status)](https://app.netlify.com/sites/eines/deploys)

### Issues

-He tingut un problema de compilació a netlify perquè al meu ordinador tenia parcel instal·lat globalment, però calia incloure'l via dependència de desenvolupament per a que netlify sigui capaç de compilar el lloc.

-També m'he trobat amb aquest problema tan prompte com he afegit pàgines al projecte:
https://github.com/parcel-bundler/parcel/issues/1315

## Observacions

-Instalat axios per a gestionar les cridades a api
-Afegida la llibreria d'estils css _hamburguers_ per gestionar el botó del menú
-En safari m'apareix un error que fa referència al iframe de youtube del que no he trobat solució:
`Trying to call enumerateDevices from a frame without correct 'allow' attribute.`

## Dades

Les dades provenen d'aquestes apis:

https://api.got.show/

https://got-quotes.herokuapp.com/

## PAC 2

### Logo

Per al logo he usat una senzilla silueta d'escut en blanc. He usat com a format svg. Junt a l'escut les inicials GOT (Game of Thrones) amb tipografia "Cinzel Decorative".

### Peu

S'ha inclòs una imtge de perfil amb un efecte clip-path en forma de cercle. I s'ha reorganitzat la informació del perfil amb la inclusió d'enllaços socials i icones de fontawesome. El propi div on està la informació de perfil també s'ha modificat amb un clip-path en forma de poligon, i tanmateix el propi footer també se li ha incorporat un efecte clip-path.

### Efectes

Afegida a la pàgina de categoria amb un wrapper amb clip-path i efecte de zoom al fer hover. L'efecte de zoom s'ha fer amb transform / scale i s'ha suavitzat l'efecte amb un transition de 0.5s i ease-in-out.

Els enllaços de menú tenen un effecte de subratllat fet amb un pseudoelement ::after afegit durant el :hover.

```css
nav ul li.active::after {
  height: 3px;
  width: 100%;
  display: block;
  background-color: white;
  content: '';
}
```
