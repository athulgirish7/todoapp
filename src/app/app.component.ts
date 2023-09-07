import { Component, OnInit } from '@angular/core';
import * as Joi from 'joi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'todoapp';

  schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(6).required().messages({
      'string.base': 'Base error',
      'string.min': 'min error',
      'string.max': 'max error',
      'any.required': 'required error',
      'string.alphanum': 'alpha numeric error',
    }),
  });

  ngOnInit(): void {
    const result = this.schema.validate({ username: ' ' });
    console.log(result.error);
  }
}
