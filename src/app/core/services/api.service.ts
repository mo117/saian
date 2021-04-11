import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../../src/environments/environment';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { CookieService } from 'ngx-cookie-service';

// import { AngularFireAuth } from '@angular/fire/auth';
// import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class APiService {
  endpoint = environment.baseUrl;

  constructor(private http: HttpClient) {}

  signup(fromData, user_type, defullang, defullat): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        lang: localStorage.getItem('lang'),
      }),
    };

    const fromValue = new FormData();

    fromValue.append('name', fromData.FName);
    // fromValue.append('last_name', fromData.LName);
    fromValue.append('phone', fromData.phone);
    fromValue.append('email', fromData.email);

    fromValue.append('password', fromData.password);
    fromValue.append('address', fromData.address);
    //
    fromValue.append('lat', defullat);
    fromValue.append('lng', defullang);

    fromValue.append('fire_base', '');
    fromValue.append('country_id', fromData.country_id);
    // fromValue.append("address", fromData.address);

    fromValue.append('user_type', user_type);

    return this.http.post(
      this.endpoint + 'Auth_general/register',
      fromValue,
      httpOptions
    );
  }
  signupSupplier(fromData, defullang, defullat): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        lang: localStorage.getItem('lang'),
      }),
    };

    const fromValue = new FormData();

    fromValue.append('name', fromData.FName);
    // fromValue.append('last_name', fromData.LName);
    fromValue.append('phone', fromData.phone);
    fromValue.append('email', fromData.email);

    fromValue.append('password', fromData.password);
    fromValue.append('address', fromData.address);
    //
    fromValue.append('lat', defullat);
    fromValue.append('lng', defullang);

    fromValue.append('fire_base', '');
    fromValue.append('country_id', fromData.country_id);
    // fromValue.append("address", fromData.address);

    fromValue.append('user_type', fromData.supplierType);

    return this.http.post(
      this.endpoint + 'Auth_general/register',
      fromValue,
      httpOptions
    );
  }
  ComplitSupplier(fromData, image): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        lang: localStorage.getItem('lang'),
        Authorization: 'Bearer ' + localStorage.getItem('UserToken'),
      }),
    };

    const fromValue = new FormData();

    fromValue.append('id_number', fromData.id_number);
    // fromValue.append('last_name', fromData.LName);
    fromValue.append('experience', fromData.experience);
    fromValue.append('service_id', fromData.service_id);

    fromValue.append('city_id', fromData.city_id);
    fromValue.append('id_image', image);
    //

  

    return this.http.post(
      this.endpoint + 'Auth_private/edit_service_provider',
      fromValue,
      httpOptions
    );
  }
  get_countries(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        lang: localStorage.getItem('lang'),
      }),
    };
    return this.http.get(this.endpoint + 'get_countries', httpOptions);
  }
  get_Cities(id): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        lang: localStorage.getItem('lang'),
      }),
    };
    return this.http.get(this.endpoint + 'get_citesWeb?country_id=' + id, httpOptions);
  }
  get_service(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        lang: localStorage.getItem('lang'),
      }),
    };
    return this.http.get(this.endpoint + 'Service/allService', httpOptions);
  }
  get_Terms(): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        lang: localStorage.getItem('lang'),
      }),
    };
    return this.http.get(this.endpoint + 'Home/help', httpOptions);
  }
}
