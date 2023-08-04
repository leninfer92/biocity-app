import { Component, OnDestroy, OnInit } from '@angular/core';
import { activitiesInfo } from '../reporte-kilometraje/reporte-kilometraje.component';
import { ActividadesService } from 'src/app/services/Actividades.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-kilometraje',
  templateUrl: './kilometraje.component.html',
  styleUrls: ['./kilometraje.component.css']
})
export class KilometrajeComponent implements OnDestroy, OnInit {

dtOptions: DataTables.Settings ={};
dtTrigger = new Subject();


  activitiesList!: activitiesInfo[];

  constructor(private activitiesService: ActividadesService) {
    this.activitiesList = [];
  }
ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
}
  ngOnInit(): void {
    console.log('Into ngOnInit');
    this.allActivities();
    this.dtOptions={
      pagingType: 'Full_numbers',
      pageLength: 5
    }
  }

  allActivities(): void {
    console.log('Into allCars');
    this.activitiesService.getAllActivities().subscribe({
      next: (data: any) => {
        console.log('La data que tengo es: ', data)
        this.activitiesList = data.data;
        
        this.activitiesList.forEach((activity) => {
          activity.created_at = this.formatDate(activity.created_at);
          
        });
        console.log(this.activitiesList);
      }
      ,
      error: (error) => {
        console.error('Error al listar las actividades', error);
      },
      complete: () => {
        console.log('La subscripción se ha completado.');
      },
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
