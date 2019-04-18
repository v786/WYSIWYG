import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-tip',
  templateUrl: './tool-tip.component.html',
  styleUrls: ['./tool-tip.component.css']
})
export class ToolTipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  execute() {
    document.execCommand('bold', false, '');
  }

}
