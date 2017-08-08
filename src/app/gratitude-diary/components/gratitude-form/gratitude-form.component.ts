import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-gratitude-form',
  styleUrls: ['./gratitude-form.component.scss'],
  template: `
    <div>
      <form
        novalidate
        #f="ngForm"
        (ngSubmit)="handleSubmit(f.value.text, f.valid)"
      >
        <md-input-container class="input-container">
          <input
            name="text"
            placeholder="Type in what you're grateful for"
            required
            mdInput
            [ngModel]="text"
          />
        </md-input-container>
        <button
          class="button"
          md-raised-button
          color="primary"
          [disabled]="f.invalid"
        >Add another one!</button>
      </form>
    </div>
  `
})
export class GratitudeFormComponent {
  @ViewChild('f')
  form: NgForm;
  @Input()
  text: string;
  @Output()
  added: EventEmitter<string> = new EventEmitter<string>();

  public handleSubmit(formValue: string, isValid: boolean): void {
    if (!isValid) {
      return;
    }

    this.added.emit(formValue);
    this.form.resetForm();
  }
}
