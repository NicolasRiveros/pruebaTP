import { Component, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { publicaciones } from 'src/app/models/publicaciones.model';
import { PublicacionesService } from 'src/app/services/publicaciones.service';

@Component({
  selector: 'app-muro-publicaciones',
  templateUrl: './muro-publicaciones.component.html',
  styleUrls: ['./muro-publicaciones.component.scss']
})
export class MuroPublicacionesComponent implements OnInit {

  public data: publicaciones[] = [];
  constructor(private publi_service: PublicacionesService, private toastr: NbToastrService,) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    this.publi_service.getpublicaciones().subscribe(
      res => {
        if (res === [undefined]) {
          this.toastr.warning("No hay publicaciones!")
          
        } else {
          console.log(res[0].texto);
          this.data = [res];
        }

      }
    )

  }

}
