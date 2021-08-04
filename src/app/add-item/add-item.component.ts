import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private http: HttpClient, private router: Router) { }


  form!: FormGroup;
  formSubmitted = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      size: ['', Validators.required],
      color: ['', Validators.required],
      price: ['', Validators.required],

    });
  }

  addShort() {
    this.formSubmitted = true;
    if (this.form.valid) {
      // console.log(this.form.value);

      this.http.post("http://127.0.0.1:8000/api/shorts/add", this.form.value).subscribe(
        data => {
          console.log(data);
          this.form.reset();
          this.formSubmitted = false;
          this.router.navigate(['/home']);
        }
      );
    }
  }
}
