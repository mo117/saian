import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constant } from './core/constants/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'saian-website';
  private lang: string;
  public constant = Constant;
  constructor(private translate: TranslateService) {
    this.lang = localStorage.getItem('lang');

    if (this.lang == null || localStorage.getItem('lang') == 'ar') {
      // console.log('ar');
      this.constant.Language = 'ar'
      this.translate.setDefaultLang('ar');
      localStorage.setItem('lang', 'ar');
    } else {
      this.constant.Language = 'en'
      this.translate.setDefaultLang(this.lang);
      localStorage.setItem('lang', 'en');
    }
  }
}
