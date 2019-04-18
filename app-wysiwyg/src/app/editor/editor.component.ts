import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  @ViewChild('content') content;

  innerHtml: string;
  emojiSmile = String.fromCodePoint(0x1F605);
  emojiAngry = String.fromCodePoint(0x1F620);
  emojiPoker = String.fromCodePoint(0x1F610);
  emojiAngel = String.fromCodePoint(0x1F607);

  constructor() { }

  ngOnInit() {
  }

  getContent(value) {
    console.log(this.content.nativeElement + '!!!');
    console.log(value.innerHTML + '!!!');
    this.innerHtml = value.innerHTML;
  }

}
