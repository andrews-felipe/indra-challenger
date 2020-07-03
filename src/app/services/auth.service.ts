import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser

  constructor() { }

  signUp(user) {
    if (this.hasUsers) {
      const list = JSON.parse(localStorage.getItem('list_user'))
      list.push(user)
      localStorage.setItem('list_user', JSON.stringify(list))
    } else {
      localStorage.setItem('list_user', JSON.stringify([
        user
      ]))
    }
  }

  login(loginUser) {
    let result = false
    if (this.hasUsers) {
      JSON.parse(localStorage.getItem('list_user')).forEach(user => {
        if (user.name == loginUser.name && user.password == loginUser.password) {
          localStorage.setItem('user', JSON.stringify(user))
          this.currentUser = user
          result = true
        }
      });
    }
    return result
  }


  /**
   * Verificando se o usuário ainda está logado
   */
  public get loggedIn(): boolean {
    return (localStorage.getItem('user') !== null);
  }

  /**
  * Verificando se o usuário ainda está logado
  */
  public get hasUsers(): boolean {
    return (localStorage.getItem('list_user') !== null);
  }

  /**
   * Verificando se o usuário ainda está logado
   */
  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }


}
