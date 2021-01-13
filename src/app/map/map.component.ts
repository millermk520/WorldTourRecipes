import {AfterViewInit, Component, ComponentFactoryResolver, Injector} from '@angular/core';
import * as L from 'leaflet';
import {ShapeService} from '../shape.service';
import {HttpClient} from '@angular/common/http';
import {PopupComponent} from './popup/popup.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {

  private map;
  private countries;
  private recipes;

  constructor(private shapeService: ShapeService,
              private httpClient: HttpClient,
              private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector) {
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.initShape();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [48.866667, 2.333333],
      zoom: 4
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  private initShape() {
    this.shapeService.getCountriesShapes().subscribe(countries => {
      this.countries = countries;
      this.initCountriesLayer();
    });
  }

  private initCountriesLayer() {
    const layerGroup = [];

    this.httpClient.get('/assets/data/recipes.json').subscribe(recipes => {
      this.recipes = recipes;
      for(const recipe of this.recipes){
        for (const country of this.countries.features){
          if (recipe.country === country.properties.ADMIN){
            const countrieLayer = L.geoJSON(country, {
              style: (feature) => ({
                weight: 3,
                opacity: 0.5,
                color: '#008f68',
                fillOpacity: 0.5,
                fillColor: '#00c167'
              })
            }).bindPopup(this.createCustomPopup(recipe), {maxWidth: 450, maxHeight: 350, minWidth: 350});
            layerGroup.push(countrieLayer);
          }
        }
      }
      const countries = L.layerGroup(layerGroup);

      const overlayMaps = {
        'Pays avec recette': countries
      };

      L.control.layers(this.map.title, overlayMaps).addTo(this.map);
    });
  }

  private createCustomPopup(recipe: any) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
    const component = factory.create(this.injector);

    //Set the component inputs manually
    component.instance.recipe = recipe;

    //Manually invoke change detection, automatic wont work, but this is Ok if the component doesn't change
    component.changeDetectorRef.detectChanges();

    return component.location.nativeElement;
  }
}
