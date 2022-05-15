import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'spa-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  userId = '';
  //user: User = {id: 0, nome: '', sobrenome: '', idade: 0, profissao: ''};

  constructor(private fb: FormBuilder, private userService: UsersService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    this.userForm = fb.group({
      id: 0,
      nome: '',
      sobrenome: '',
      idade: 0,
      profissao: ''
    })
   }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: any) => {
      this.userId = params.get("id");
      this.retrieveUser();
    });

  }

  manageUser() {
    if(this.userId == null) {
      this.registerUser();
    } else {
      this.updateUser();
    }
  }

  private retrieveUser() {
    if(this.userId != null) {
      this.userService.findUserById(parseInt(this.userId))
      .subscribe({
        next: (users: User[]) => {
          console.log("Usuário recebido " + users[0]);
          this.userForm.patchValue({
            id:users[0].id,
            nome: users[0].nome,
            sobrenome: users[0].sobrenome,
            idade: users[0].idade,
            profissao: users[0].profissao
          });
        },
        error: (err: any) => console.log(err)
        
      });
      
    }
  }

  private registerUser() {
    let user = {
      id: this.generateId(),
      nome: this.userForm.value.nome,
      sobrenome: this.userForm.value.sobrenome,
      idade: this.userForm.value.idade,
      profissao: this.userForm.value.profissao
    };
    console.log("User", user);
    this.userService.postUser(user)
          .subscribe({
            next: (response: User) => {
            console.log("Usuário cadastrado", response);
              this.router.navigate(['/']);
            },
            error: (err: any) => console.log(err)
          });

  }
  
  private updateUser() {
    this.userService.putUser(this.userForm.value)
        .subscribe({
          next: (response: User) => {
              console.log("Alteração usuário " + response);
              this.router.navigate(['/']);
          },
          error: (err: any) => console.log(err)
        });
  }

  generateId(): number {
    return Math.floor(Date.now() * Math.random());
  }

}
