import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ResultModel } from './app.model';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;
  input: FormControl;
  select: FormControl;
  myform: FormGroup;
  result: Array<any>;
  header: Array<number>;
  errorMsg: string;

  private demoResult: Array<ResultModel>;

  constructor() {
    this.title = 'My App';
  }

  ngOnInit(): void {
    this.input = new FormControl('', [
      Validators.required
    ]);
    this.select = new FormControl('', [
      Validators.required
    ]);
    this.myform = new FormGroup({
      input: this.input,
      select: this.select
    });
    this.errorMsg = '';
  }

  /**
   * This method is used to generate an result as per user input
   *
   * @memberof AppComponent
   */
  GenerateOutput() {
    this.errorMsg = '';
    const arr = this.input.value.trim().split(/[\s,;\t\n]+/); // [1, 2, 3, 4, 5, 6, 7]
    const cols = this.select.value;

    if (arr !== undefined && arr.length < 1) {
      this.errorMsg = 'Invalid input. please enter some values.';
    } else if (arr !== undefined && arr.length > 100) {
      this.errorMsg = 'Invalid input. You cannot enter more than 100 values.';
    } else {
      this.result = [];
      this.header = [];

      let innerArr: Array<any>;
      // Setup data
      for (let row = 0; row < arr.length; ++row) {
        innerArr = [];
        for (let col = 0; col < cols; ++col) {
          let val = arr[row + col];
          val = val !== undefined ? val : '';
          innerArr.push(val);
        }
        row = row + (cols - 1);
        this.result.push(innerArr);
      }

      // Setup header
      for (let col = 1; col <= cols; ++col) {
        this.header.push(col);
      }
    }
  }
}
