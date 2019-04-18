import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @ViewChild('content') content;

  innerHtml: string;

  constructor() { }

  ngOnInit() {
  }

  getContent(value) {
    console.log(this.content.nativeElement + '!!!');
    console.log(value.innerHTML + '!!!');
    this.innerHtml = value.innerHTML;
  }

}
