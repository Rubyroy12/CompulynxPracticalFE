import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "../service/auth.service";
import { TokenStorageService } from "../service/token-storage.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private tokenStorage: TokenStorageService) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = this.tokenStorage.getToken();
    console.log("JWT Token Retrieved:", token); // Debugging log

    if (token) {
      console.log("Token exists, modifying request...");
      
      const clonedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log("Modified Headers:", clonedRequest.headers);
      return next.handle(clonedRequest);
    }

    console.log("No token found, sending request without Authorization header.");
    return next.handle(request);
  }
}
