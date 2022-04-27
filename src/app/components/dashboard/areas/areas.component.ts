import { Component, OnInit } from '@angular/core';
import { AreaService } from '../../../services/area.service'

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

  constructor(private areaService: AreaService) { }

  ngOnInit(): void {
    console.log(this.areaService.getAreas());
    
  }

}
