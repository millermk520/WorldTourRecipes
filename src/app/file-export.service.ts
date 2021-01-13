import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileExportService {

  constructor() { }

  exportFile(recipe: any) {
    console.log(recipe);
  }
}
