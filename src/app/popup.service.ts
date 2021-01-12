import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  makePopUp(recipe: any): string {
    let content = `` +
      `<H2>${ recipe.name }</H2>` +
      `<img src=${ '/assets/img/recipes/' + recipe.img } style="height: 40%; width: 40%">` +
      `<div><span style="font-weight: bold;">Pour: </span>${ recipe.number }</div>` +
      `<div><span style="font-weight: bold;">Temps de préparation: </span>${ recipe.preparation }</div>` +
      `<div><span style="font-weight: bold;">Temps de repos: </span>${ recipe.rest || "NA" }</div>` +
      `<div><span style="font-weight: bold;">Temps de cuisson: </span>${ recipe.cooking }</div>` +
      `<br>` +
      `<H5> Ingrédients :</H5>` +
      `<ul>`;

    for (const ingedrient of recipe.ingredients){
      content = content + `<li>${ ingedrient.quantities } ${ ingedrient.label }</li>`;
    }

    content = content + `</ul>` +
      `<br>` +
      `<H5> Etapes :</H5>` +
      `<ol>`;

    for (const step of recipe.steps){
      content = content + `<li>${ step.label }</li>`;
    }
    content = content + `</ol>`;

    if (recipe.notes){
      content += `<br>` +
        `<div><span style="font-weight: bold;">${ recipe.notes }</span></div>`;
    }

    return content;
  }
}
