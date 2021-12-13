import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, OperatorFunction} from "rxjs";
import {Info, ResourcesType} from "./_models/Modes";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AnnoService {
  private baseUrl: string;
  private selectedProductionChains: Record<string, ResourcesType | undefined> = {};

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router: Router) {
    this.baseUrl = baseUrl + 'api/';
  }

  public getInfo(): Observable<Info> {
    return this.http.get<Info>(this.baseUrl + 'info').pipe(this.handleError());
  }

  public register(): Observable<void> {
    return this.http.get<void>(this.baseUrl + 'register').pipe(this.handleError());
  }

  private handleError<T>(): OperatorFunction<T, T> {
    return catchError(err => {
        console.error(err);
        /*let message;
        if (err.error && err.error.message && err.error.message !== '') {
          message = err.error.message;
        } else {
          message = err.message;
        }
        this.snackBar.open(message, null, {
          duration: 7000,
          panelClass: 'error',
        });*/
        throw err;
      }
    );
  }

  getSelectedProductionChain(name?: string): ResourcesType | undefined {
    if (name) {
      return this.selectedProductionChains[name];
    }
    return undefined;
  }

  setSelectedProductionChain(name?: string, selectedProductionChain?: ResourcesType) {
    if (name) {
      this.selectedProductionChains[name] = selectedProductionChain;
    }
  }
}
