import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import { Thought } from '../../models/thought';
import { NgForm } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-gratitude-form',
  styleUrls: ['./gratitude-form.component.scss'],
  template: `
    <form
      novalidate
      #thoughtForm="ngForm"
      (ngSubmit)="handleSubmit(thoughtForm.value.text, thoughtForm.valid)"
    >
      <md-input-container class="input-container">
        <input
          name="text"
          placeholder="Type in what you're grateful for"
          required
          mdInput
          [ngModel]="detail.text"
        />
      </md-input-container>
      <button
        class="button"
        md-raised-button
        color="primary"
        [disabled]="thoughtForm.invalid"
      >Add another one!</button>
    </form>
  `
})
export class GratitudeFormComponent implements OnChanges {
  @ViewChild('thoughtForm')
  thoughtForm: NgForm;
  @Input()
  detail: Thought;
  @Output()
  added: EventEmitter<Thought> = new EventEmitter<Thought>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  handleSubmit(value: string, isValid: boolean) {
    if (!isValid) {
      return;
    }

    this.detail.text = value;
    this.added.emit(this.detail);
    this.thoughtForm.resetForm();
  }
}
