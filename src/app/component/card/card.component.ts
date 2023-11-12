import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() datosBook: any;
  @Output() eliminar = new EventEmitter<void>();

    eliminarTarjeta(){
      this.eliminar.emit();
    }
}
