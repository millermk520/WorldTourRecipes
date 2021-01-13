import {Component, Input, OnInit} from '@angular/core';
import {FileExportService} from '../../file-export.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  @Input() recipe: any;

  constructor(private fileExportService: FileExportService) { }

  ngOnInit(): void {
  }

  test(recipe: any) {
    this.fileExportService.exportFile(recipe);
  }
}
