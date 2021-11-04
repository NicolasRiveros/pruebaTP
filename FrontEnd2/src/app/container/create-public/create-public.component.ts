import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbToastrService } from '@nebular/theme';
import { PublicacionesService } from 'src/app/services/publicaciones.service';
import { publicaciones } from 'src/app/models/publicaciones.model'


@Component({
  selector: 'app-create-public',
  templateUrl: './create-public.component.html',
  styleUrls: ['./create-public.component.scss']
})
export class CreatePublicComponent implements OnInit {

  form: FormGroup;
  public publicacion: publicaciones;
  constructor(private fb: FormBuilder, private toastr: NbToastrService, private publi_service: PublicacionesService) {

    this.publicacion = new publicaciones
    this.form = fb.group({
      text: [null, Validators.required],
    });
  }

  ngOnInit(): void {
  }

  save() {
  
    this.publi_service.savepublicaciones(this.publicacion).subscribe(res => {
      console.log(res);
      this.toastr.success("Publicacion Generada !")
    },
      error => {
        console.log(error);
        this.toastr.danger("Error al guardar Publicacion")
      })

  }

  cancel() {
    this.form?.reset();
    this.toastr.warning('cancelado !')
  }

}
