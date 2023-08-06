import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/discover/user.interface';
import { AuthService } from 'src/app/services/discover/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formRegister: FormGroup = this.fb.group({
    email: [, [Validators.required, Validators.email]],
    name: [, Validators.required],
    phone: [, Validators.required],
    avatar: [, Validators.required],
    nationality: [, Validators.required],
    gender: [, Validators.required],
    password: [, [Validators.required]]
  })

  genders: { value: string, label: string }[] = [
    {value: "M", label: "Masculino"},
    {value: "F", label: "Femenino"},
  ];

  selectedFile!: File;
  formData: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    phone: '',
    nationality: '',
    gender: '',
  };


  constructor(private fb: FormBuilder, private authservice: AuthService, private router: Router) {
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.formRegister.get('avatar')?.setValue(this.selectedFile);
  }

  saveRegister() {
    if (!this.formRegister.valid) {
      this.formRegister.markAllAsTouched();
      return;
    }
    const formData = new FormData();
    formData.append('avatar', this.formRegister.get('avatar')?.value);
    formData.append('name', this.formRegister.get('name')?.value);
    formData.append('email', this.formRegister.get('email')?.value);
    formData.append('password', this.formRegister.get('password')?.value);
    formData.append('phone', this.formRegister.get('phone')?.value);
    formData.append('nationality', this.formRegister.get('nationality')?.value);
    formData.append('gender', this.formRegister.get('gender')?.value);

    

    this.authservice.authRegister(formData).subscribe(response => {
      this.router.navigate(['/login'])
      Swal.fire(
        'Genial!',
        'Tu usuario se creo correctamente!',
        'success'
      )
    }, error => {
      this.formRegister.reset()
      var message = ''
      for (const field in error.error) {
        message += `${field} errors: ${error.error[field].join(', ')} \n`
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: message,
      })
    })
  }

}
