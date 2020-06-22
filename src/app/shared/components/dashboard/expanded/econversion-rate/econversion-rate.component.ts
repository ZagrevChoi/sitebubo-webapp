import { Component, OnInit, EventEmitter, Output } from '@angular/core';

export var multi = [
  {
    "name": "Server 1",
    "series": [
      {
        "name": "2009",
        "value": 62
      },
      {
        "name": "2010",
        "value": 50
      },
      {
        "name": "2011",
        "value": 94
      },
      {
        "name": "2012",
        "value": 21
      },
      {
        "name": "2013",
        "value": 41
      },
      {
        "name": "2014",
        "value": 11
      }
    ]
  },

  {
    "name": "Server 2",
    "series": [
      {
        "name": "2009",
        "value": 50
      },
      {
        "name": "2010",
        "value": 90
      },
      {
        "name": "2011",
        "value": 71
      },
      {
        "name": "2012",
        "value": 51
      },
      {
        "name": "2013",
        "value": 11
      },
      {
        "name": "2014",
        "value": 31
      }
    ]
  }
];

@Component({
  selector: 'app-econversion-rate',
  templateUrl: './econversion-rate.component.html',
  styleUrls: ['./econversion-rate.component.scss']
})
export class EconversionRateComponent implements OnInit {
  
  multi = multi;
  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25']
  };

  @Output() expand = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  onClose() {
    alert('close button pressed');
  }

  onMinimize() {
    alert('minimize button pressed');
  }

  maximizeItem() {
    this.expand.emit(null);
  }
}
