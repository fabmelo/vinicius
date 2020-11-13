import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class UtilService{

  handleError(error: HttpErrorResponse) {

    let errorMessage = "";

    if (error.status === undefined || error.message === undefined)
      return throwError('Erro ao resolver API');
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Erro Client-Side: ${error.error.message}`; // Erro ocorreu no lado do client
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `mensagem: ${error.message}`; // Erro ocorreu no lado do servidor
    }

    return throwError(errorMessage);
  }

}
