import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient }  from '@angular/common/http'

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  perfilId:string="";
  descrip: any[]=[]
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.perfilId = this.activatedRoute.snapshot.paramMap.get('i+1') ?? "";
    this.http.get('https://pokeapi.co/api/v2/pokemon/' + this.perfilId)
      .subscribe((res: any) => {
        this.descrip = [res]; // Asignar los datos recibidos al arreglo descrip
        console.log(this.descrip); // Mostrar el contenido del arreglo en la consola
      });
}
}