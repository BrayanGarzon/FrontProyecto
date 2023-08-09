
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/discover/user.interface';
import { AuthService } from 'src/app/services/discover/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {

  public user: User = {
    name: '',
    email: '',
    password: '',
    phone: '',
    id: 0
  };

  formRegister: FormGroup;
  selectedFile!: File;


  constructor(private fb: FormBuilder, private authservice: AuthService, private router: Router) {
    this.getMe()
    this.formRegister = this.fb.group({
      email: [, [Validators.required, Validators.email]],
      name: [, Validators.required],
      password: [, [Validators.required]],
      phone: [, [Validators.required]],
      avatar: null
  });
  }

  getMe() {
    this.authservice.authMe(null).subscribe( resp => {
      this.user = resp;
    } )
  }








  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.formRegister.get('avatar')?.setValue(this.selectedFile);
  }



  saveRegister() {
    const formData = new FormData();

    if (!this.formRegister.valid) {
      this.formRegister.markAllAsTouched();
      return;
    }

    formData.append('name', this.formRegister.get('name')!.value);
    formData.append('email', this.formRegister.get('email')!.value);

    formData.append('avatar', this.formRegister.get('avatar')!.value);

    formData.append('phone', this.formRegister.get('phone')!.value);
    formData.append('password', this.formRegister.get('password')!.value);

    console.log( { formData})


    
    this.authservice.updateRegister(formData).subscribe(response => {
      localStorage.clear();
      this.router.navigateByUrl('/login').then(() => {
        // Recarga la página
        window.location.reload();
      });
      Swal.fire(
        'Genial!',
        'Información actualizada!',
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
