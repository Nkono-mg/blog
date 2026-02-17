# Le projet

## Installation

1. Cloner le projet :

```bash
git clone https://github.com/Nkono-mg/blog.git
```

2. Aller dans le dossier du projet
   cd blog
3. Installer les dépendances:
   npm install

## Lancement du projet

Pour démarrer le projet:
npm run dev ou npm run start

## Installation d’Elasticsearch sous Debian 12 (en local)

Elasticsearch est un moteur d’indexation et de recherche très performant.  
Il permet d’accélérer considérablement les requêtes, notamment pour la recherche full-text, les filtres avancés et l’analyse de données.

Dans ce projet, Elasticsearch a été installé afin de tester l’indexation des utilisateurs et d’optimiser les performances de recherche.

Il s’agit uniquement d’un **test en environnement local**.  
Je ne l’ai pas utilisé en production, car certaines configurations cloud peuvent être payantes selon l’usage.  
Pour un test technique ou une démonstration, une installation locale est largement suffisante.

### Installer Java (Elasticsearch en dépend)

sudo apt install openjdk-17-jdk -y

### Télécharger Elasticsearch

wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-8.14.1-amd64.deb
sudo dpkg -i elasticsearch-8.14.1-amd64.deb

### Lancer le service

sudo systemctl enable elasticsearch
sudo systemctl start elasticsearch

### Vérifier que ça fonctionne

curl -u elastic 'http://localhost:9200'
