import { Component, OnInit, ViewChild } from '@angular/core';
import submissions_data from '../core/constants';
import { SubmissionData } from './models/submission.model';
import { HttpClient } from '@angular/common/http';

declare var google: any;

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {
  @ViewChild('myGoogleMap', { static: false })

  readonly submissionsData: Array<SubmissionData> = submissions_data;
  center!: google.maps.LatLngLiteral;
  zoom = 7
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 5,
  };

  constructor(httpClient: HttpClient) {}

  ngOnInit(): void {
    this.center = this.submissionsData[0].location
  }

}
