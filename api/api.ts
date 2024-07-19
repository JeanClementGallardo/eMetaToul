const fs = require('fs');
//const readline = require('readline');
const Buffer = require('buffer').Buffer;

const url_forgemia = "https://forgemia.inra.fr/api/v4/projects";
const url_github= "https://api.github.com/repos";
const file_out= "./content/catalogue/index.md";
const debut= `
:::DevItem
---
`;
const fin= `
---
:::
`;
	
//https://forgemia.inra.fr/api/v4/projects/783/repository/files/Readme.md?ref=master
//"https://forgemia.inra.fr/api/v4/projects?search=viz-core"

var projects= [];


// Fonction pour lire un fichier Markdown ligne par ligne
//async function readMarkdownFile(filePath) {
async function readMarkdownFile(filePath) {

  const fileContent = fs.readFileSync(filePath, 'utf8');
  const lines = fileContent.split(/\r?\n/);

  let response= await analyse_lines(lines)
  let data= await response;
  //console.log('data',data);
}

//analyses de chaque ligne du fichier
async function analyse_lines(lines) {
  for (let i = 0; i < lines.length; i++) {
    let line= lines[i];
  
  //for (let line of lines) {
      let link = line.split("link:")[1];
      if (link !== undefined) {
          //c'est un lien donc ecrire le debut
          //fs.appendFile(file_out, debut);
          link = link.trim(); //supprime les espaces avant et apres
          let contains = link.includes("forgemia");
          let auteur="";
          if (lines[i+1].includes("author")) {
            auteur= lines[i+1];
          }
          if (contains) {
              let response = await search_info_forgemia(link,auteur);
              projects.push(response);
          } else {
              contains= link.includes("github");
              if (contains) {
                let response = await search_info_github(link,auteur);
                projects.push(response);
              }
          }
          
      }
  }
  return projects;
}

async function search_info_forgemia(link, auteur)
{
  try {
     //search id project 
    let obj={};  
    const lastTerm = link.split('/').pop();
    const url= url_forgemia + "?search="+ lastTerm;
    let response1 = await fetch(url);
    let data1 = await response1.json();
    //console.log('Première requête réussie:', data1);
    //recherche id du projet
    var id="0";
    data1.forEach(item => {
      if (item.web_url == link) {
          id= item.id;
      }
    })

    //avec id du projet recupere readme.md
    const url_readme= url_forgemia+"/"+id+"/repository/files/README.md?ref=master";
    let response2 = await fetch(url_readme);
    let data2 = await response2.json();
    //console.log('Deuxième requête réussie:', data2);
    if (data2.encoding === 'base64') {
      const decodedContent = Buffer.from(data2.content, 'base64').toString('utf-8');
      const lines = decodedContent.split('\n');
      const title = lines[0].replace(/[#:]/g, "").trim(); // Ligne avec le titre
      const description = lines[2].replace(/[#:]/g, "").trim(); // Ligne avec la description
      
      const project= debut+"title: "+ title +"\r\ndescription: "+description+"\r\nlink: "+link+ "\r\n" + auteur + fin;
      append_file(project);

      obj={"link":link, "id": id, "title": title, "description": description};
      //console.log(obj);
    }
    return obj; // Retourne le résultat final

  } catch (error) {
    console.error('Erreur:', error);
  }
}  
  



async function search_info_github(link, auteur)
{
  try {
   let obj={};  
    // Créer un objet URL
    const urlObj = new URL(link);

    // Extraire le chemin complet
    const fullPath = urlObj.pathname;
    const formattedPath = fullPath.startsWith('/') ? fullPath : '/' + fullPath;

    const url_readme= url_github+formattedPath+"/contents/README.md";
    let response = await fetch(url_readme);
    let data = await response.json();
    //console.log('Deuxième requête réussie:', data2);
    if (data.encoding === 'base64') {
      const decodedContent = Buffer.from(data.content, 'base64').toString('utf-8');
      const lines = decodedContent.split('\n');
      const title = lines[0].replace(/[#:]/g, "").trim(); // Ligne avec le titre
      const description = lines[2].replace(/[#:]/g, "").trim(); // Ligne avec la description
    
      const project= debut+"title: "+ title +"\r\ndescription: "+description+"\r\nlink: "+link+ "\r\n" + auteur+ fin;
      append_file(project);
      obj={"link":link, "title": title, "description": description};
      //console.log(obj);
    }

  return obj; // Retourne le résultat final

 } catch (error) {
   console.error('Erreur:', error);
 }
}

//ajout dans un fichier
function append_file(val){
  fs.appendFile(file_out, val, (err) => {
    if (err) {
      return console.log(`Erreur lors de l'écriture du fichier: ${err}`);
    }
    console.log('Le fichier a été écrit avec succès!');
  });
  
}

//write in file output
const contenu = `
---
title: Catalogue
---

# Catalogue

Liste des différents développements réalisés au sein de MetaToul

::AlignItem
#firstItem
`;

fs.writeFile(file_out, contenu, (err) => {
  if (err) {
    return console.log(`Erreur lors de l'écriture du fichier: ${err}`);
  }
  console.log('Le fichier a été écrit avec succès!');
});


// Appel de la fonction avec le chemin du fichier Markdown
readMarkdownFile('./content/catalogue/projects.txt')
    .then(() => {
        var json= JSON.stringify(projects);
        console.log(json);
    })
    .catch((err) => {
        console.error(`Erreur lors de la lecture du fichier: ${err}`);
    });
