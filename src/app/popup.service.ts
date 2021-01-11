import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  makePopUp(recipe: any): string {
    let content = `` +
      `<H2>${ recipe.name }</H2>` +
      `<div><span style="font-weight: bold;">Pour: </span>${ recipe.number }</div>` +
      `<div><span style="font-weight: bold;">Temps de préparation: </span>${ recipe.preparation }</div>` +
      `<div><span style="font-weight: bold;">Temps de repos: </span>${ recipe.rest || "NA" }</div>` +
      `<div><span style="font-weight: bold;">Temps de cuisson: </span>${ recipe.cooking }</div>` +
      `<br>` +
      `<div><span style="font-weight: bold;"> Ingrédients :</span></div>`+
      `<ul>`;

    for (const ingedrient of recipe.ingredients){
      content = content + `<li>${ ingedrient.quantities } ${ ingedrient.label }</li>`;
    }

    content = content + `</ul>` +
      `<br>` +
      `<div><span style="font-weight: bold;"> Etapes :</span></div>`+
      `<ol>`;

    for (const step of recipe.steps){
      content = content + `<li>${ step.label }</li>`;
    }
    content = content + `</ol>`;

    return content;
  }
}
