import { Component, OnInit } from '@angular/core';
import { setState, title$, updateTitle } from './todo.repository';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todoapp';
  title$ = title$;

  ngOnInit(): void {
    setState({ id: 3, title: 'Todo title 1', desciption: 'test' });

    setTimeout(() => {
      updateTitle('Todo title 2');
    }, 3000);
  }
}
