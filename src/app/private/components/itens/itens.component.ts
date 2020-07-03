import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent {

  img: any = "https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/s640/nth.png"
  title = ""
  body = ""

  errorMessage: string = ""
  flagError: boolean = false

  posts = [
    {
      img: "https://tecnoblog.net/wp-content/uploads/2019/10/call-of-duty-mobile-001.jpg",
      author: "St ツAnubis",
      title: "Dicas COD Mobile 2020",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
  ]

  constructor(private auth: AuthService) { }


  addPost() {

    this.flagError = false

    if (this.validation()) {
      
      this.posts.push({
        img: this.img,
        author: this.auth.getUser().name,
        title: this.title,
        body: this.body
      })

      // tornando novamente os campos padrões
      this.img = "https://4.bp.blogspot.com/-O3EpVMWcoKw/WxY6-6I4--I/AAAAAAAAB2s/KzC0FqUQtkMdw7VzT6oOR_8vbZO6EJc-ACK4BGAYYCw/s640/nth.png"
      this.title = ""
      this.body = ""

    } else {
      this.flagError = true
    }

  }

  validation() {
    //validações básica
    if (this.body.length === 0 || !this.body.trim()) {
      this.errorMessage = "Ops! Preencha o campo título corretamente"
      return false
    }

    if (this.title.length === 0 || !this.title.trim()) {
      this.errorMessage = "Ops! Preencha o campo conteúdo corretamente"
      return false
    }
    return true
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
    }
    myReader.readAsDataURL(file);
  }

}
