import { Component, OnInit } from '@angular/core';
import {FileExportService} from '../services/file-export.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: any;

  constructor(private exportService: FileExportService) { }

  ngOnInit(): void {
    this.recipe = history.state.data;
  }

  exportAsPDF(recipe: any) {
    this.exportService.exportFile(recipe);
  }
}
