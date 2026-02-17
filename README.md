# Installation du projet

Voir le guide d'installation dans le dossier apps/Documents/installation.md

## Choix du framework Node.js

J'ai choisi **NestJS** plutôt que **Express.js** pour des raisons de sécurité, d’architecture et de facilité dans la mise en place des bonnes pratiques telles que le **Clean Code** et le **Domain-Driven Design (DDD)**.

De plus, NestJS permet une utilisation native et stricte de **TypeScript**, ce qui aide à mieux structurer l’application et à renforcer la sécurité ainsi que la fiabilité des données.

## Bibliothèque de validation

NestJS est fortement orienté **classes**. La solution la plus adaptée pour la validation des données est donc l’utilisation de **class-validator**.

C’est pour cette raison que cette bibliothèque a été retenue dans le projet.

## Base de données en ligne

J'ai choisi **PostgreSQL Neon** comme base de données hébergée en ligne afin de faciliter le stockage des données, l’accès distant et le déploiement du projet final.
