import {HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class authInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log("OK")

    jwtSecret: ""

    let JWT = localStorage.getItem("token");
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
