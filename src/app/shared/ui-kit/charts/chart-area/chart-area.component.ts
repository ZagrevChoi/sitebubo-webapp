import { Component, OnInit } from '@angular/core';
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
  }
];

export var multi_1 = [
  {
    "name": "Server 1",
    "series": [
      {
        "name": "2009",
        "value": 52
      },
      {
        "name": "2010",
        "value": 70
      },
      {
        "name": "2011",
        "value": 24
      },
      {
        "name": "2012",
        "value": 41
      },
      {
        "name": "2013",
        "value": 51
      },
      {
        "name": "2014",
        "value": 81
      }
    ]
  }
];

export var multi_2 = [
  {
    "name": "Server 1",
    "series": [
      {
        "name": "2009",
        "value": 32
      },
      {
        "name": "2010",
        "value": 10
      },
      {
        "name": "2011",
        "value": 64
      },
      {
        "name": "2012",
        "value": 31
      },
      {
        "name": "2013",
        "value": 41
      },
      {
        "name": "2014",
        "value": 91
      }
    ]
  }
];
@Component({
  selector: 'sitebubo-area-chart',
  templateUrl: './chart-area.component.html',
  styleUrls: ['./chart-area.component.scss']
})
export class ChartAreaComponent implements OnInit {
  multi = multi;
  tempflag = 0;
  // options
  view: any[] = [200, 200];

  // options
  legend: boolean = false;
  showLabels: boolean = false;
  animations: boolean = true;
  xAxis: boolean = false;
  yAxis: boolean = false;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  constructor() { }

  ngOnInit(): void {
    this.startChart();
    setInterval(() => {
      this.startChart()
    }, 1000);
  }

  startChart() {
    if (this.tempflag === 0) {
      this.multi = multi;
      this.tempflag = 1;
    } else if (this.tempflag === 1) {
      this.multi = multi_1;
      this.tempflag = 2;
    } else {
      this.multi = multi_2;
      this.tempflag = 0;
    }
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

}
