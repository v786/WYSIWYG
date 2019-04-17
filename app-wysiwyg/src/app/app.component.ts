import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-wysiwyg';
  btn = document.querySelector('.sai');
  getText = document.querySelector('.getText');
  content = document.querySelector('.getcontent');
  editorContent = document.querySelector('.editor');
}
