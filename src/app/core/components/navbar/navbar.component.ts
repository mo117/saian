import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Constant } from '../../constants/constant';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private translate: TranslateService) {}
  currentPage: any = 0;
  scrWidth:any;
  public constant = Constant;
  @HostListener('window: scroll', ['$event'])
  onwidowsScroll(e?) {
    let element = document.querySelector('.header');
    // let element1 = document.querySelector('.header-top-area');
    this.scrWidth = window.innerWidth;
    // console.log(this.scrWidth);
    
    if (this.scrWidth < 991) {
      element.classList.add('active');
      // element1.classList.add('activeTop')
    } else {
      element.classList.remove('active');
      // element1.classList.remove('activeTop');
    }
  }
  ngOnInit(): void {
    this.onwidowsScroll();
  }
  ChangeLang(lang) {
    this.constant.Language = lang;
      this.translate.setDefaultLang(lang);
      localStorage.setItem('lang', lang);
  }
  OpenMenu() {
    let Checkelement = document.querySelector('.activeNav');

    if (Checkelement == null) {
      let element3 = document.querySelector('.header');

      element3.classList.add('active');

      let element1 = document.querySelector('.header-top-area');
      let element = document.querySelector('.header__nav');
      element.classList.add('active');

      element.classList.add('activeNav');

      let element2 = document.querySelector('.header__burger');
      element2.classList.add('active');
    } else {
      let element3 = document.querySelector('.header');

      // element3.classList.remove('active');
      let element = document.querySelector('.header__nav');
      element.classList.remove('active');

      element.classList.remove('activeNav');

      let element2 = document.querySelector('.header__burger');
      element2.classList.remove('active');
    }
    // header__burger
  }
  gotoSection(page, id) {
    this.currentPage = id;
    this.router.navigate(['/home']).then(() => {
      document.getElementById(page).scrollIntoView();
    });
  }
  closeNav() {
    let element1 = document.querySelector('.activeNav');
    if (element1 != null) {
      // console.log("remmm");
      
      element1.classList.remove('active');
      element1.classList.remove('activeNav');

      let element = document.querySelector('.header__nav');
      element.classList.remove('active');

      element.classList.remove('activeNav');

      let element2 = document.querySelector('.header__burger');
      element2.classList.remove('active');
    }
  }
}
