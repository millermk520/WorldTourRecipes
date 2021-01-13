import {Component, Input, OnInit} from '@angular/core';
import {FileExportService} from '../../file-export.service';
import html2canvas from 'html2canvas';
import jspdf from 'jspdf';

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

  exportAsPDF(recipe: any) {
    this.fileExportService.exportFile(recipe);
  }
}
