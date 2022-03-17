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

## Lancement serveur 

```bash

ionic serve 

``` 
ou 

```bash

ionic s 

``` 

## Déploiement 

### Lancer un build


```bash

ionic build

``` 


### Créer un projet Android

```bash

ionic cap add android

``` 

### Synchroniser projet Ionic et projet Android

```bash

ionic cap copy

``` 
puis 

```bash

ionic cap sync android 

``` 

### Lancer le projet Android dans Android Studio

```bash

ionic cap open android 

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
* Installer Module PWA-elements  
Todo

### Utilisation


## Geolocation API

### Installation 

### Utilisation


## Documentation Officielle

* Todo 


  
  


