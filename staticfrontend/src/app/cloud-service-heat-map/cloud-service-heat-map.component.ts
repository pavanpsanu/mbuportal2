import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-cloud-service-heat-map',
  templateUrl: './cloud-service-heat-map.component.html',
  styleUrls: ['./cloud-service-heat-map.component.css']
})
export class CloudServiceHeatMapComponent implements OnInit {

  constructor(public router:Router) { }



  ngOnInit(): void {
  }

}
