import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biocity-app';

  editingCarInfo: any ={anio: ''};

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    const sanitizedValue = input.value.replace(/[^0-9]/g, ''); // Eliminar caracteres no numéricos
    if (parseInt(sanitizedValue) < 0) {
      input.value = ''; // Si es negativo, establecer el valor como vacío
    } else {
      input.value = sanitizedValue; // Establecer el valor sin caracteres no numéricos
    }}
}
