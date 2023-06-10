import { RestService } from './../rest.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent {
  galleries: any;

  constructor(private service: RestService) {}

  ngOnInit() {
    this.service.getGalleries().subscribe((data: any) => {
      this.galleries = data
    })
  }
}
