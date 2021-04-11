import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { APiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-page-join-us',
  templateUrl: './page-join-us.component.html',
  styleUrls: ['./page-join-us.component.scss'],
})
export class PageJoinUSComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private ApiService: APiService,
    private modalService: NgbModal,
    private router: Router
  ) {}

  typeingemail: any;
  typeingname: boolean;
  PasswordType = 'password';
  typeingFirstName: boolean;
  LastName: boolean;
  imgSrc: string = 'assets/Images/image-placeholder.jpg';
  selectedImage: any = null;
  lang: any = null;

  LogInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    FName: new FormControl('', [Validators.required]),
    address: new FormControl(''),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    country_id: new FormControl(''),
    password: new FormControl('', [Validators.required]),
  });
  currentPage: any = 'first';
  SupplierForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    FName: new FormControl('', [Validators.required]),
    address: new FormControl(''),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
    country_id: new FormControl(''),
    password: new FormControl('', [Validators.required]),
    supplierType: new FormControl('', [Validators.required]),
  });
  SupplierProfile = new FormGroup({
    id_number: new FormControl('', [Validators.required]),
    service_id: new FormControl('', [Validators.required]),
    experience: new FormControl(''),
    city_id: new FormControl('', [Validators.required]),
  });
  termsForm = new FormGroup({
    is_default: new FormControl('', [Validators.required]),
  });
  countries: any = [];
  services: any = [];
  Cities: any = [];
  terms: any;
  CurrentphoneKey: any = "";
  currentImageSupplier: any = "";
  CurrentphoneKeySupplier: any = "";

  defullat: any = 0;
  defullang: any = 0;
  logLocationChange(event) {
    console.log(event);
    this.defullat = event.lat;
    this.defullang = event.lng;
    let location = event.name;
    if (location == null) {
      location = '';
    }
  }

  getUserLocation() {
    return new Promise<{ lat: any; long: any }>((resolve) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      });
    });
  }


  selectMap(contat) {
    this.getUserLocation().then((location) => {
      this.defullat = location.lat;
      this.defullang = location.long;
      this.modalService.open(contat);
    });

    // this.modalService.open(contat);
  }
  ngOnInit(): void {
    this.ApiService.get_countries().subscribe((res) => {
      this.countries = res.data;
      this.currentImage = res.data[0].image;
      this.CurrentphoneKey = res.data[0].phoneKey;
      this.currentImageSupplier = res.data[0].image;
      this.CurrentphoneKeySupplier = res.data[0].phoneKey;
    });
    this.ApiService.get_service().subscribe((res) => {
      this.services = res.data;
    });
    this.ApiService.get_Cities(1).subscribe((res) => {
      this.Cities = res.data;
    });
    this.ApiService.get_Terms().subscribe((res) => {
      this.terms = res.data.filter((c) => c.id == 5)[0].desc;
      console.log(this.terms);
    });
  }
  // optionSelected(event) {
  //   this.selectedIcon = event.value.icon;
  // }
  country_idss: any;
  ChangeCountriesSupplier(countery) {
    this.currentImageSupplier = countery.image;
    this.CurrentphoneKeySupplier = countery.phoneKey;
    this.SupplierForm.value.country_id = countery.id;
    this.country_idss = countery.id;
  }
  ChangeCountries(countery) {
    this.currentImage = countery.image;
    this.CurrentphoneKey = countery.phoneKey;
    this.LogInForm.value.country_id = countery.id;
    this.country_idss = countery.id;  
  }
  active;
  disabled = true;
  country_id = null;
  onNavChange(changeEvent: NgbNavChangeEvent) {
    if (changeEvent.nextId === 3) {
      changeEvent.preventDefault();
    }
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
    if (this.disabled) {
      this.active = 1;
    }
  }
  checkemail(event) {
    this.typeingemail = true;
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(event.target.value)) {
      event.target.classList.add('is-invalid');
    } else {
      event.target.classList.remove('is-invalid');
    }
  }
  checkuserphone(event) {
    this.typeingFirstName = true;
  }
  checkusername(event) {
    this.typeingname = true;
  }
  checkLastName(event) {
    this.LastName = true;
  }
  typeingFirstName1: any = false;
  typeingname1: any = false;
  typeingemail1: any = false;
  SupplierFormphone(event) {
    this.typeingFirstName1 = true;
  }
  checkusernameSupplierForm(event) {
    this.typeingname1 = true;
  }
  checkemailSupplierForm(event) {
    this.typeingemail1 = true;
    if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(event.target.value)) {
      event.target.classList.add('is-invalid');
    } else {
      event.target.classList.remove('is-invalid');
    }
  }
  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => (this.imgSrc = e.target.result);
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      let element3 = document.querySelector('.custom-file-input');

      element3.classList.add('active');
    } else {
      this.imgSrc = 'assets/images/image-placeholder.jpg';
      this.selectedImage = null;
      let element3 = document.querySelector('.custom-file-input');

      element3.classList.remove('active');
    }
  }
  currentImage: any = "";
  onSubmit(formData) {
    // console.log("aaaaaaaa");
    if (formData.valid) {
      formData.value.country_id = this.country_idss;
      // this.LoadingProvider.ViewHttpServiceLoadingDiv();
      this.ApiService.signup(formData.value, 1, this.defullang, this.defullat).subscribe((res) => {
        // //console.log(res);
        if (res['status'] != 0) {
          localStorage.setItem('UserToken', res['data'].token);
          // SessionData.SaveDataInEditeProfile(res['data']);
          this.toastr.success(res['message']);
          // this.LoadingProvider.CloseHttpServiceLoading();
          // this.get_Info()
          this.router.navigate(['/home']);
        } else {
          this.toastr.error(res['message']);
          // this.LoadingProvider.CloseHttpServiceLoading();
        }
      });
    } else {
      // console.log("sssss");

      if (localStorage.getItem('lang') == 'ar') {
        this.toastr.error('من فضلك قم بملئ البيانات بشكل صحيح');
      } else {
        this.toastr.error('please fill right data');
      }
    }
  }
  onSubmitSupplier(formData) {
    // console.log("aaaaaaaa");
    if (formData.valid) {
      formData.value.country_id = this.country_idss;
      // this.LoadingProvider.ViewHttpServiceLoadingDiv();
      this.ApiService.signupSupplier(formData.value, this.defullang, this.defullat).subscribe((res) => {
        // //console.log(res);
        if (res['status'] != 0) {
          localStorage.setItem('UserToken', res['data'].token);
          // SessionData.SaveDataInEditeProfile(res['data']);
          this.toastr.success(res['message']);
          this.currentPage = 'second';

          this.ApiService.get_Cities(this.country_id).subscribe((res) => {
            this.Cities = res.data;
          });
          // this.LoadingProvider.CloseHttpServiceLoading();
          // this.get_Info()
        } else {
          this.toastr.error(res['message']);
          // this.LoadingProvider.CloseHttpServiceLoading();
        }
      });
    } else {
      // console.log("sssss");

      if (localStorage.getItem('lang') == 'ar') {
        this.toastr.error('من فضلك قم بملئ البيانات بشكل صحيح');
      } else {
        this.toastr.error('please fill right data');
      }
    }
  }

  ComplitSupplier(formData) {
    if (formData.valid && this.selectedImage != null) {
      // this.LoadingProvider.ViewHttpServiceLoadingDiv();
      this.ApiService.ComplitSupplier(
        formData.value,
        this.selectedImage
      ).subscribe((res) => {
        // //console.log(res);
        if (res['status'] != 0) {
          // SessionData.SaveDataInEditeProfile(res['data']);
          this.toastr.success(res['message']);
          this.currentPage = 'third';
          this.selectedImage == null;
          // this.LoadingProvider.CloseHttpServiceLoading();
          // this.get_Info()
        } else {
          this.toastr.error(res['message']);
          // this.LoadingProvider.CloseHttpServiceLoading();
        }
      });
    } else {
      // console.log("sssss");

      if (localStorage.getItem('lang') == 'ar') {
        this.toastr.error('من فضلك قم بملئ البيانات بشكل صحيح');
      } else {
        this.toastr.error('please fill right data');
      }
    }
  }
  termsSubmit(formData) {
    if (formData.value.is_default == true) {
      if (localStorage.getItem('lang') == 'ar') {
        this.toastr.success('تم إتمام التسجيل بنجاح');
        localStorage.removeItem('UserToken');
      } else {
        this.toastr.success('Registration completed successfully');
        localStorage.removeItem('UserToken');
      }
      this.router.navigate(['/home']);
    } else {
      if (localStorage.getItem('lang') == 'ar') {
        this.toastr.error('لإتمام التسجيل يجب الموافقه علي الشروط والأحكام');
      } else {
        this.toastr.error(
          'To complete the registration, you must agree to the terms and conditions'
        );
      }
    }
  }
}
