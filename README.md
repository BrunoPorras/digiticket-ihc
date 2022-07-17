# **DIGITICKET-frontend**

---

<div align="center">

[![React Native](https://img.shields.io/badge/React_Native-blue.svg?logo=react&labelColor=000)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-blueviolet.svg?logo=expo&labelColor=white&logoColor=000)](https://docs.expo.dev/)

[![Expo Version](https://img.shields.io/badge/SDK-44.0.6-green.svg?)](https://www.npmjs.com/package/expo/v/44.0.6)
[![NPM Version](https://img.shields.io/badge/npm-8.10-red.svg?logo=npm)](https://www.npmjs.com/)

[![Licencia](https://img.shields.io/badge/License-MIT-orange.svg)](https://opensource.org/licenses/MIT)

</div>

---

## Descripción

**Frontend de la aplicación móvil "DIGITICKET"**

Repositorio del backend: https://github.com/anthonyquispev/DIGITICKET-backend


## Funcionamiento

* **Autenticación y activación de cuenta de usuario:**\
Se considera que los datos universitarios de cada estudiante (código universitario, correo institucional, nombres y apellidos) ya se encuentran registrados en la base de datos; sin embargo, para poder autenticarnos por primera vez en la aplicación, antes debemos activar la cuenta, el cual consiste en cambiar la contraseña por defecto (la misma del SUM) y proporcionar los datos personales (correo personal, número de celular y sede de preferencia).
Una vez que la cuenta esté activada, ya solo bastaría autenticarse con el código universitario y la nueva contraseña; además, esta última la podemos cambiar o recuperar mediante un código de verificación enviado al correo personal.

* **Reserva de ticket:**\
Para realizar una reserva de ticket debemos seleccionar la sede (Ciudad Universitaria o Cangallo), el turno (cada uno diferente horario y número de tickets disponibles), el nivel (1 o 2) y las comidas (entrada, segundo, postre y/o refresco). Luego de ello, se reducen el número de tickets disponibles y las raciones de comidas en el turno respectivo, esto según lo seleccionado al momento de realizar dicha reserva.


## Ejecución

```sh
# Clonar repositorio
git clone https://github.com/BrunoPorras/digiticket-ihc.git
# Cambiar directorio
cd digiticket-ihc
# Instalar dependencias
npm i
# Ejecutar aplicación
npm start
```


### Ejecutar en la aplicación Expo Go
<br/>

[![Expo Go](https://img.shields.io/badge/Ejecutar_con_Expo_Go-important.svg?logo=EXPO&labelColor=f3f3f3&logoColor=000)](https://expo.dev/client)


## Capturas

<div align="center">
    <img width="250" src="https://github.com/BrunoPorras/digiticket-ihc/blob/master/capturas/screenshot_01.jpg">
    <img width="250" src="https://github.com/BrunoPorras/digiticket-ihc/blob/master/capturas/screenshot_02_00.jpg">
    <img width="250" src="https://github.com/BrunoPorras/digiticket-ihc/blob/master/capturas/screenshot_02_01.jpg">
</div>

<div align="center">
    <img width="250" src="https://github.com/BrunoPorras/digiticket-ihc/blob/master/capturas/screenshot_03.jpg">
    <img width="250" src="https://github.com/BrunoPorras/digiticket-ihc/blob/master/capturas/screenshot_04.jpg">
</div>

<div align="center">
    <img width="250" src="https://github.com/BrunoPorras/digiticket-ihc/blob/master/capturas/screenshot_05.jpg">
    <img width="250" src="https://github.com/BrunoPorras/digiticket-ihc/blob/master/capturas/screenshot_06.jpg">
    <img width="250" src="https://github.com/BrunoPorras/digiticket-ihc/blob/master/capturas/screenshot_07.jpg">
</div>

<div align="center">
    <img width="250" src="https://github.com/BrunoPorras/digiticket-ihc/blob/master/capturas/screenshot_09.jpg">
    <img width="250" src="https://github.com/BrunoPorras/digiticket-ihc/blob/master/capturas/screenshot_10.jpg">
    <img width="250" src="https://github.com/BrunoPorras/digiticket-ihc/blob/master/capturas/screenshot_11.jpg">
</div>
<div align="center">
    <img width="250" src="https://github.com/BrunoPorras/digiticket-ihc/blob/master/capturas/screenshot_12.jpg">
    <img width="250" src="https://github.com/BrunoPorras/digiticket-ihc/blob/master/capturas/screenshot_13.jpg">
    <img width="250" src="https://github.com/BrunoPorras/digiticket-ihc/blob/master/capturas/screenshot_14.jpg">
</div>
<div align="center">
    <img width="250" src="https://github.com/BrunoPorras/digiticket-ihc/blob/master/capturas/screenshot_15.jpg">
    <img width="250" src="https://github.com/BrunoPorras/digiticket-ihc/blob/master/capturas/screenshot_16.jpg">
    <img width="250" src="https://github.com/BrunoPorras/digiticket-ihc/blob/master/capturas/screenshot_17.jpg">
</div>
<div align="center">
    <img width="250" src="https://github.com/BrunoPorras/digiticket-ihc/blob/master/capturas/screenshot_18.jpg">
    <img width="250" src="https://github.com/BrunoPorras/digiticket-ihc/blob/master/capturas/screenshot_08.jpg">
</div>


## Estructura

<pre>
📦digiticket-ihc
 ┣ 📂api
 ┃ ┣ 📜students.js
 ┃ ┣ 📜tickets.js
 ┃ ┗ 📜turns.js
 ┣ 📂components
 ┃ ┣ 📜buttons.js
 ┃ ┣ 📜Home.js
 ┃ ┣ 📜IconNavigator.js
 ┃ ┣ 📜Profile.js
 ┃ ┣ 📜ProgressBar.js
 ┃ ┣ 📜R.js
 ┃ ┣ 📜Reserve01.js
 ┃ ┣ 📜Reserve02.js
 ┃ ┣ 📜Reserve03.js
 ┃ ┣ 📜Reserve04.js
 ┃ ┗ 📜Ticket.js
 ┣ 📂screens
 ┃ ┣ 📜ActivateAccountScreen1.js
 ┃ ┣ 📜ActivateAccountScreen2.js
 ┃ ┣ 📜ActivatedAccountScreen.js
 ┃ ┣ 📜ChangePasswordScreen.js
 ┃ ┣ 📜HomeScreen.js
 ┃ ┣ 📜LandingPageScreen.js
 ┃ ┗ 📜RecoverPasswordScreen.js
 ┣ 📜.gitignore
 ┣ 📜App.js
 ┣ 📜app.json
 ┣ 📜babel.config.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md
</pre>


## Profesor
* Benavente Orellana, Edwin Hugo


## Integrantes
* Chocce Alanya, Miguel Gerson
* Porras Muñoz, Bruno Franchesco
* Quispe Vega, Anthony Yair
* Saldaña García, Cristhian Erick
* Ticona Barrantes, Fabio Isaac
