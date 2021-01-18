import { Injectable } from '@angular/core';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

@Injectable({
  providedIn: 'root'
})
export class FileExportService {

  constructor() { }

  exportFile(recipe: any) {
    const data = document.getElementById(recipe.name);
    const fileName = recipe.name.split(' ').join('_');
    html2canvas(data).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('p', 'cm', 'a4');
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 21.0, 29.7);
      pdf.save(fileName + '.pdf');
    });
  }
}
