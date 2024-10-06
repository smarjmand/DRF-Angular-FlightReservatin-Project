import {Injectable, OnInit} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public httpOptions: any;
  private authToken:any;

  constructor(private http:HttpClient) {
    this.httpOptions= {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    }
  }

  public async login(){

    let user = {
      "username":"admin",
      "password":"1234"
    };

    await this.http.post('http://127.0.0.1:8000/token/',
      JSON.stringify(user),this.httpOptions).subscribe((data:any)=>{

      console.log('Token: ', data)

      this.httpOptions= {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': "Token "+data['token']
        })
      }

      console.log(this.httpOptions.headers)

    });

  }




}









// this.httpOptions= {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Authorization': "Token "+data['token']
//   })
// }
