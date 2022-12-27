import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  firstLogoSrc = '../assets/argprog.png';
  navTitleOne = 'Argentina Programa';
  navTitleTwo = "// #YoProgramo"

  onClick() {
    alert('vas a iniciar sesión');
  }

  constructor(private modalService: NgbModal) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  ngOnInit(): void {}
}
