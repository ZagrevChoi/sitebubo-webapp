import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  domains = [
    'justgetvisible.com', 'sitebubo.com', 'youtube.com'
  ]
  selectDomain = 'justgetvisible.com';
  minimizedItemsFromBackend = [
    'seo-score', 'domain-expire','site-speed', 'full-report' ,'wordpress','conversion-rate', 'visitors', 'email-check', 'mobile-friendly'
  ];
  expandedItemsFromBackend = [
    'conversion-rate', 'malware-check', 'site-speed',
  ];

  expandSelected: any;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.data);
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
