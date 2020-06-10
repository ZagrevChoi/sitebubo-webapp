import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
// expanded components
import { EseoScoreComponent } from './../shared/components/dashboard/expanded/eseo-score/eseo-score.component';
import { EwordpressComponent } from './../shared/components/dashboard/expanded/ewordpress/ewordpress.component';
import { EdesktopSpeedComponent } from './../shared/components/dashboard/expanded/edesktop-speed/edesktop-speed.component';
import { EmalwareCheckComponent } from './../shared/components/dashboard/expanded/emalware-check/emalware-check.component';
import { EconversionRateComponent } from './../shared/components/dashboard/expanded/econversion-rate/econversion-rate.component';
import { EserverMonitorComponent } from './../shared/components/dashboard/expanded/eserver-monitor/eserver-monitor.component';
import { EuptimeComponent } from './../shared/components/dashboard/expanded/euptime/euptime.component';
// minimized components
import { MemailCheckComponent } from './../shared/components/dashboard/minimized/memail-check/memail-check.component';
import { MvisitorsComponent } from './../shared/components/dashboard/minimized/mvisitors/mvisitors.component';
import { MconversionRateComponent } from './../shared/components/dashboard/minimized/mconversion-rate/mconversion-rate.component';
import { MmobileFriendlyComponent } from './../shared/components/dashboard/minimized/mmobile-friendly/mmobile-friendly.component';
import { MwordpressComponent } from './../shared/components/dashboard/minimized/mwordpress/mwordpress.component';
import { MrankCheckComponent } from './../shared/components/dashboard/minimized/mrank-check/mrank-check.component';
import { MfullReportComponent } from './../shared/components/dashboard/minimized/mfull-report/mfull-report.component';
import { MsiteSpeedComponent } from './../shared/components/dashboard/minimized/msite-speed/msite-speed.component';
import { MdomainExpireComponent } from './../shared/components/dashboard/minimized/mdomain-expire/mdomain-expire.component';
import { MseoScoreComponent } from './../shared/components/dashboard/minimized/mseo-score/mseo-score.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('fullExpandedItem', { static: false }) fullExpandedItem: ElementRef<any>;

  expandedItems = [
    { index: 5, component: EconversionRateComponent },
    { index: 0, component: EuptimeComponent },
    { index: 1, component: EseoScoreComponent },
    { index: 2, component: EwordpressComponent },
    { index: 3, component: EdesktopSpeedComponent },
    { index: 4, component: EmalwareCheckComponent },
    { index: 6, component: EserverMonitorComponent }
  ];
  minimizedItems = [
    { index: 0, component: MseoScoreComponent },
    { index: 1, component: MemailCheckComponent },
    { index: 2, component: MvisitorsComponent },
    { index: 3, component: MconversionRateComponent },
    { index: 4, component: MmobileFriendlyComponent },
    { index: 5, component: MfullReportComponent },
    { index: 6, component: MsiteSpeedComponent },
    { index: 7, component: MdomainExpireComponent }
  ];

  expandSelected: any;
  constructor() { }

  ngOnInit(): void {

  }

  drop(event: CdkDragDrop<string[]>, target: string) {
    if (target === 'minimize') {
      moveItemInArray(this.minimizedItems, event.previousIndex, event.currentIndex);
    } else {
      moveItemInArray(this.expandedItems, event.previousIndex, event.currentIndex);
    }
  }

  maximizeItem(componentItem) {
    this.expandSelected = componentItem;
  }

  closeExpanded() {
    this.expandSelected = null;
  }

  removeExpanded() {

  }

  minimizeExpanded() {

  }
}
