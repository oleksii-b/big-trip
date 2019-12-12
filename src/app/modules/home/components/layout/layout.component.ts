import { Component, OnInit } from '@angular/core';

import { path } from '../../path';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  path: {[key: string]: string} = {};

  ngOnInit(): void {
    const { home, stats } = path;

    this.path = {
      home: `/${home}`,
      stats: `/${stats}`,
    }
  }
}
