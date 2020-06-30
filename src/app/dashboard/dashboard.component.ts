import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';

import { DashboardService } from './../core/services/dashboard.service';
import { DomainService } from './../core/services/domain.service';
import { domain } from 'process';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  domains: Array<object>
  selectDomain: any;
  minimizedItemsFromBackend = [
    'seo-score', 'domain-expire','site-speed', 'full-report' , 'wordpress','conversion-rate', 'visitors', 'email-check', 'mobile-friendly'
  ];
  expandedItemsFromBackend = [
    'server-monitor','conversion-rate', 'malware-check', 'site-speed',
  ];

  expandSelected: any;
  constructor(
    private route: ActivatedRoute,
    private domainService: DomainService,
    private dashboardService: DashboardService
  ) { }

  ngOnInit(): void {
    
  }

  getDomainList(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.domainService.getDomainInfoByUserId().toPromise().then(() => {
        console.log(this.domainService.domainInfo);
        this.domains = this.domainService.domainInfo.domain_info.map((category) => ({
          value: category.domain_id,
          label: category.domain_name
        }));
        this.selectDomain = this.domains[0];
      });
    });
  }

  changeMonitorOrders() {

  }

  drop(event: CdkDragDrop<string[]>, target: string) {
    if (target === 'minimize') {
      moveItemInArray(this.minimizedItemsFromBackend, event.previousIndex, event.currentIndex);
    } else {
      moveItemInArray(this.expandedItemsFromBackend, event.previousIndex, event.currentIndex);
      console.log(this.expandedItemsFromBackend);
    }
  }

  maximizeItem(componentItem) {
    this.expandSelected = componentItem;
  }

  closeExpanded() {
    this.expandSelected = null;
  }

  removeItem(index) {
      document.getElementById('mini_' +  index).classList.add('scale-out-center');
      setTimeout(() => {
        this.minimizedItemsFromBackend.splice(index, 1);
      }, 600);
  }

  transferElement(index, itemName, filter) {
    if (filter === 1) {
      document.getElementById('exp_' +  index).classList.add('slide-out-fwd-right');
      setTimeout(() => {
        this.expandedItemsFromBackend.splice(index, 1);
        // this.minimizedItemsFromBackend.unshift(itemName);
      }, 600);
    } else if (filter === 2) {
      if (this.expandedItemsFromBackend.indexOf(itemName) === -1) {
        this.expandedItemsFromBackend.unshift(itemName);
      } else {
        alert('Already Expanded');
      }
      // document.getElementById('mini_' +  index).classList.add('slide-out-fwd-left');
      // setTimeout(() => {
      //   this.minimizedItemsFromBackend.splice(index, 1);
      // }, 600);
    }
  }

  test(eve) {
    console.log(eve);
  }
}
