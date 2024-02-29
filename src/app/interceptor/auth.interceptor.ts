import {HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {jwtDecode} from "jwt-decode";

@Injectable()
export class authInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("OK")



    let JWT = localStorage.getItem("Token");
    console.log(JWT)
    if (JWT) {
      const nouvelleReq = req.clone({

        headers: req.headers.set("Authorization", JWT)
      })
      return next.handle(nouvelleReq)
    } else {
      return next.handle(req);
    }


  }
};
