import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'spa-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UsersService) {
    this.userForm = fb.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: 0,
      profissao: ''
    })
   }

  ngOnInit(): void {
  }

  registerUser() {
    this.userService.postUser(this.userForm.value)
      .subscribe({
        next: response => {
          console.log(`Usuário ${response.nome} cadastrado com sucesso!`);
        },
        error: err => console.log(err)
      })
  }

}
