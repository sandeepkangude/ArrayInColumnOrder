import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ResultModel } from '../app.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private _data = new BehaviorSubject<Array<any>>([]);
  private _cols = new BehaviorSubject<Array<number>>([]);

  @Input()
  set data(value) {
    this._data.next(value);
  };
  get data() {
    return this._data.getValue();
  }


  @Input()
  set cols(value) {
    this._cols.next(value);
  };
  get cols() {
    return this._cols.getValue();
  }

  result: Array<string>;
  header: Array<number>;

  constructor() { }

  ngOnInit() {
    this._data
      .subscribe((res) => {
        this.result = this.data;
      });

    this._cols
      .subscribe((res) => {
        this.header = this.cols;
      });
  }
}
