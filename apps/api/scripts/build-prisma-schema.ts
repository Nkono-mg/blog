import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

//définir __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemins
const prismaDir = path.resolve(__dirname, '../prisma');
const schemaFile = path.join(prismaDir, 'schema.generated.prisma');

// Supprimer l'ancien schema.generated.prisma s'il existe
if (fs.existsSync(schemaFile)) {
  fs.unlinkSync(schemaFile);
  console.log('Ancien schema.generated.prisma supprimé');
}

// Lire le header principal
const header = fs.readFileSync(path.join(prismaDir, 'schema.prisma'), 'utf-8');

// Dossiers modèles et enums
const modelsDir = path.join(prismaDir, 'models');
const enumsDir = path.join(prismaDir, 'enums');

// Fonction pour charger les fichiers depuis un dossier
const loadFiles = (dir: string): string[] =>
  fs.existsSync(dir)
    ? fs
        .readdirSync(dir)
        .map((f) => fs.readFileSync(path.join(dir, f), 'utf-8'))
    : [];

// Concaténer tout le contenu et écrire le nouveau schema.generated.prisma
const content = [header, ...loadFiles(enumsDir), ...loadFiles(modelsDir)].join(
  '\n\n',
);

fs.writeFileSync(schemaFile, content);

console.log('Prisma schema generated');
