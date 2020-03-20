import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EncuestaService } from '../../services/encuesta.service';
import { DataService } from '../../services/data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent implements OnInit, OnDestroy {
  myFormGroup:FormGroup;
  id: number;
  private sub: any;
  encuesta;
  encuestas = [];
  respuesta = {
    id: 0,
    respuestas: {
      1 : 0,
      2 : 0,
      3 : 0,
      4 : 0,
      5 : 0
    }
  };
  curp = null;
  enviando = false;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private encuestaService: EncuestaService,
    private database: DataService) { }

  ngOnInit() {
    this.obtenerEncuestas();
    this.sub = this.route.params.subscribe(params => {
      this.id = + params['id']; // (+) converts string 'id' to a number
      console.log(this.id);
      this.obtenerEncuestaActual(this.id);
   });
   this.curp = sessionStorage.getItem('curp');
   if (!this.curp) {
    this.router.navigate(['/home']);
   }
  }

  obtenerEncuestas() {
    this.encuestas = JSON.parse(this.encuestaService.getAllEncuestas());
    console.log(this.encuestas);
  }

  obtenerEncuestaActual(id) {
    this.encuesta = this.encuestas.find(e => e.id === id);
    console.log('Encuesta actual', this.encuesta);
    this.createForm();
  }

  createForm() {
    let group={};
    console.log(this.encuesta);
    this.encuesta['preguntas'].forEach(pregunta => {
      console.log(pregunta);
      group[pregunta.id] = new FormControl('', [Validators.required]);
    });
    this.myFormGroup = new FormGroup(group);
  }

  guardarEncuesta() {
    this.enviando = true;
    this.respuesta.id = this.id;

    for (const i in this.myFormGroup.controls) {
      this.myFormGroup.controls[i].markAsDirty();
      this.myFormGroup.controls[i].updateValueAndValidity();
    }

    console.log(this.respuesta);

    if(this.myFormGroup.valid) {
      if (navigator.onLine) {
        this.database.postOnline(new Date().toISOString(), this.respuesta).then((result) => {
          console.log(result);
          this.confirmarOnline();
        }).catch((err) => {
          console.log(err);
          this.enviando = false;
        });
      } else {
        debugger
        this.database.postOffline(new Date().toISOString(), this.respuesta).then((result) => {
          console.log(result);
          this.confirmarOffline();
          
        }).catch((err) => {
          console.log(err);
          this.enviando = false;
        });
      }
      
      this.database.postCurp(new Date().toISOString(), {curp: this.curp, id: this.id}).then((result) => {
        console.log(result);
      }).catch((err) => {
        console.log(err);
      });
    }

    
  }

  confirmarOnline() {
    Swal.fire({
      title: 'Guardado',
      text: 'Tu encuesta ha sido almacenada con éxito.',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
    this.router.navigate(['/home']);
    this.enviando = false;
  }

  confirmarOffline() {
    Swal.fire({
      title: 'Guardado sin internet',
      text: 'Tu encuesta ha sido almacenada y será enviada cuando recuperes conexión a internet.',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
    this.router.navigate(['/home']);
    this.enviando = false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
