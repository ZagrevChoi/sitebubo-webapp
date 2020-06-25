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
  },

  {
    "name": "Server 2",
    "series": [
      {
        "name": "2009",
        "value": 30
      },
      {
        "name": "2010",
        "value": 70
      },
      {
        "name": "2011",
        "value": 91
      },
      {
        "name": "2012",
        "value": 11
      },
      {
        "name": "2013",
        "value": 61
      },
      {
        "name": "2014",
        "value": 51
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
        "value": 20
      },
      {
        "name": "2011",
        "value": 51
      },
      {
        "name": "2012",
        "value": 71
      },
      {
        "name": "2013",
        "value": 91
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
  tempflag = 0;
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
  view = []

  colorScheme = {
    domain: ['#5AA454', '#E44D25']
  };

  @Output() expand = new EventEmitter<any>();

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
