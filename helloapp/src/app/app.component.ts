import { Component } from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'my-app',
  styles: [
    `
      input.ng-touched.ng-invalid {
        border: solid red 2px;
      }
      input.ng-touched.ng-valid {
        border: solid green 2px;
      }
    `,
  ],
  template: `<form [formGroup]="reactiveForm" novalidate (ngSubmit)="submit()">
    <div class="form-group">
      <label>Name</label>
      <input class="form-control" name="name" formControlName="username" />
      <div
        *ngIf="
          reactiveForm.controls['username'].invalid &&
          reactiveForm.controls['username'].touched
        "
      >
        Invalid
      </div>
    </div>
    <div class="form-group">
      <label>Email</label>
      <input class="form-control" name="email" formControlName="useremail" />
      <div
        *ngIf="
          reactiveForm.controls['useremail'].invalid &&
          reactiveForm.controls['useremail'].touched
        "
      >
        Invalid
      </div>
    </div>
    <div formArrayName="phones" class="form-group">
      <div *ngFor="let phone of getControls().controls; let i = index">
        <label>Telephone number</label>
        <input class="form-control" formControlName="{{ i }}" />
        <div
          *ngIf="
            reactiveForm.controls['phones'].invalid &&
            reactiveForm.controls['phones'].touched
          "
        >
          Invalid
        </div>
      </div>
    </div>
    <div class="form-group">
      <button class="btn btn-default" (click)="addPhone()">
        Добавить телефон
      </button>
      <button class="btn btn-default" [disabled]="reactiveForm.invalid">
        Enter the Form
      </button>
    </div>
  </form> `,
})
export class AppComponent {
  reactiveForm: FormGroup

  constructor() {
    this.reactiveForm = new FormGroup({
      username: new FormControl('El', [
        Validators.required,
        this.userNameValidator,
      ]),
      useremail: new FormControl('', [Validators.email, Validators.required]),
      phones: new FormArray([new FormControl('+7', [Validators.required])]),
    })
  }

  addPhone() {
    ;(<FormArray>this.reactiveForm.controls.phones).push(
      new FormControl('+994', Validators.required)
    )
  }

  getControls() {
    return this.reactiveForm.controls.phones as FormArray
    /* return object FormArray which has property controls which is array [ {}.value === '+7' */
  }

  userNameValidator(control: FormControl): { [s: string]: boolean } | null {
    if (control.value === 'no') {
      return { username: true }
    }
    return null
  }

  submit() {
    console.log(this.reactiveForm)
  }
}
