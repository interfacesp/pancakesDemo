# Initiation aux applications mobiles 

## Installer Ionic framework CLI (command line interface)  et ses dépendances

```bash

npm install -g @ionic/cli native-run cordova-res

```

* -g : installation globale 
* @ionic/cli : Ligne de commande Ionic Framework
* native-run: module permettant lancement applications natives (exemple .apk pour Android)
* cordova-res: module avec icônes d'applications selon plateforme cible (iOS ou Android)


## Création d'un nouveau projet


* Création d'une app sans préconfiguration graphique

```bash

ionic start nomApplication blank --type=angular --capacitor 

``` 

* Création d'une app avec préconfigurée graphiquement avec des onglets (tabs)


```bash

ionic start nomApplication tabs --type=angular --capacitor 

``` 

* Création app préconfigurée graphiquement avec une liste
```bash

ionic start nomApplication list --type=angular --capacitor 

``` 


## Générer une page 

```bash

ionic generate page nom-de-la-page

```

## Générer un service 

Génération de code d'un service qui sera dans le dosssier "services"

```bash

ionic generate services services/nom-du-service

```

## Camera API 


### Installation 

* Lancer ligne de commande à la racine du projet 
* Exécuter commande suivante: 
```bash

npm install @capacitor/camera

```
* Installer Module PWA-elements (TODO) 

### Utilisation


## Geolocation API

### Installation 

### Utilisation


  
  


