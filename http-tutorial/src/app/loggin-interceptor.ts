import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";


export class LoggingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('logging in ...');
        console.log(req.url);
        return next.handle(req).pipe(tap(event => {
            console.log(event);
            if (event.type == HttpEventType.Response) {
                console.log("Response event");
                console.log(event.body);
            }
        }));
    }
}