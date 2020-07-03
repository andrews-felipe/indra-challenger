import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  status = true;
  loginForm: FormGroup
  regForm: FormGroup
  img

  hasImg: boolean = false

  errorMessage: string = ""
  flagError: boolean = false
  flagSuccess: boolean = false

  viewForm: boolean = true

  constructor(private form: FormBuilder, private auth: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.form.group({
      name: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    })

    this.regForm = this.form.group({
      name: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      confirm_password: ['', Validators.compose([Validators.required])]
    })
  }

  login() {
    this.flagError = false
    if (this.loginForm.valid) {
      let result = this.auth.login(this.loginForm.getRawValue())
      if (result) {
        this.goToHome()
      } else {
        this.flagError = true
        this.errorMessage = 'Usuário ou senha incorretos!'
      }
    } else {
      this.flagError = true
      this.errorMessage = 'Preencha os campos corretamente!'
    }
  }

  goToHome() {
    this.router.navigateByUrl('./home', { relativeTo: this.route });

  }

  signUp() {
    this.flagError = false
    if (this.regForm.valid && this.regForm.getRawValue().password === this.regForm.getRawValue().confirm_password) {
      this.auth.signUp({

        ...this.regForm.getRawValue(), ...{ img: this.img }
      })
      this.flagError = false;
      this.flagSuccess = true;
      setTimeout(() => {
        this.changeView()
        this.flagSuccess = false;
        this.hasImg = false

        this.regForm.reset()

      }, 2000);

    } else {
      this.flagError = true
      this.errorMessage = 'Preencha os campos corretamente!'
    }
  }

  changeView() {
    this.viewForm = !this.viewForm
  }


  /**
   * Método para upload
   * @param $event 
   */
  changeListener($event) {
    this.readThis($event.target);
  }

  /**
   * Leitura do arquivo selecionado
   * @param inputValue 
   */
  readThis(inputValue) {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.img = myReader.result;
      this.hasImg = true
    }
    myReader.readAsDataURL(file);
  }

}
