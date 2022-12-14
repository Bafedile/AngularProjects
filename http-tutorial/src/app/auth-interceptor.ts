import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";


export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const modifiedRequest = req.clone({ headers: req.headers.append('myName', 'Decay') });
        console.log('Request is on its way');
        return next.handle(modifiedRequest).pipe(tap((event) => {
            console.log(event);
            if (event.type === HttpEventType.Response) {
                console.log(event.body);
            }
        }));
    }
}