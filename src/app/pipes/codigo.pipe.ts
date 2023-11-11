import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'codigo'
})
export class CodigoPipe implements PipeTransform {

  transform(idBook: number): string {
    //logica para formatear el codigo segun el formato ref-xxxx//
    const formattedId = ("0000" + idBook).slice(-4);   //asegura que siempre tenga 4 digitos//
    return `ref-${formattedId}`;
  }

}
