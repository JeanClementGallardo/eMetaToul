# Mise à jour des pages

Petit tuto pour ajouter du contenu aux différentes pages / tableaux.

## Catalogue

Pour ajouter ou enlever des éléments au catalogue des développements il faudra, au niveau du dossier ~/content/catalogue, modifier le fichier projects.txt. 
Ce fichier contient la liste des différents éléments qui seront affichés sur le site. Cette page est créée à la volet lors de la mise en ligne du site. 

Ce fichier fonctionne avec les mots clés link et author. Afin d'ajouter un élément au catalogue, il suffit d'ajouter une ligne dans projects.txt avec le mot clé link suivi de l'URL vers le répo (github ou gitlab). 

```
link: https://forge.inrae.fr/metabohub/web-components/viz-style-manager
```

Cette ligne peut être suivi par une autre ligne avec le mot clé author afin d'ajouter l'information de l'auteur dans le catalogue. Cette ligne est facultative. 

```
link: https://github.com/planetscale/schemadiff
author: auteur
```

## Pages

En ce qui concerne les autres pages, pour ajouter ou enlever de l'information, il faut dans le premier temps trouver le MarkDown qui lui correspond. Par exemple, si on souhaite modifier la page Équipe, il faut trouver le MarkDown qui lui correspond au niveau des "content": ~/content/equipe/index.md. Ensuite, il suffit de modifier le dit MarkDown. 

## Présentations / Posters

Dans le dossier ~/public se trouve deux dossiers "posters" et "presentations" dans lesquels il faut mettre au format pdf les présentations / posters que l'on veut diffuser. Ensuite, dans le MarkDown correspondant aux présentations, au niveau du tableau, il faut ajouter :

``` md
[Download](/presentations/summer_school_metexplore.pdf){target="_blank" download="summer_school_metexplore.pdf"} 
```

Afin de créer le bouton permettant de télécharger la présentation. 

## Mise en ligne

Une fois toutes les modifications apportées au projet. Il suffit de push ces modifications sur la Master, le CI/CD se charge de mettre en ligne la nouvelle version.