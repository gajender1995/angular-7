// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import {  ReactiveFormsModule , FormsModule} from '@angular/forms';
// import { LoginComponent } from './login.component';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports : [ReactiveFormsModule , FormsModule ],
//       declarations: [ LoginComponent ]

//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('form must be invalid on first load', () => {
//     expect(component.profileForm.valid).toBeFalsy();
//   });

//   it('submiting values in form', () => {
//     component.profileForm.controls['firstName'].setValue("Gajender");
//     component.profileForm.controls['lastName'].setValue("Singh");
//     expect(component.profileForm.valid).toBeTruthy();
//     let userData = component.onSubmit();
//     expect(userData.controls['firstName'].value).toBe('Gajender');

    
//   });
// });
