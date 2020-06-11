import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('fullExpandedItem', { static: false }) fullExpandedItem: ElementRef<any>;
  @ViewChild('mainContentArea', { static: false }) mainContentArea: ElementRef<any>;
  minimizedItemsFromBackend = [
    'uptime', 'seo-score', 'domain-expire' ,'wordpress'
  ];
  expandedItemsFromBackend = [
    'conversion-rate', 'malware-check', 'site-speed',
  ];

  expandSelected: any;
  constructor() { }

  ngOnInit(): void {

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

  removeItem(index, filter) {
    if (filter === 1) {
      document.getElementById('exp_' +  index).classList.add('scale-out-center');
      setTimeout(() => {
        this.expandedItemsFromBackend.splice(index, 1);
      }, 600);
    } else if (filter === 2) {
      document.getElementById('mini_' +  index).classList.add('scale-out-center');
      setTimeout(() => {
        this.minimizedItemsFromBackend.splice(index, 1);
      }, 600);
    }
  }

  transferElement(index, itemName, filter) {
    if (filter === 1) {
      document.getElementById('exp_' +  index).classList.add('slide-out-fwd-right');
      setTimeout(() => {
        this.expandedItemsFromBackend.splice(index, 1);
        this.minimizedItemsFromBackend.unshift(itemName);
      }, 600);
    } else if (filter === 2) {
      document.getElementById('mini_' +  index).classList.add('slide-out-fwd-left');
      setTimeout(() => {
        this.minimizedItemsFromBackend.splice(index, 1);
        this.expandedItemsFromBackend.unshift(itemName);
      }, 600);
    }
  }
}
