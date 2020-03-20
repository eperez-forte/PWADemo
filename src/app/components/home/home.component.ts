import { Component, OnInit, ViewChild } from '@angular/core';
import { EncuestaService } from '../../services/encuesta.service';
import { NgForm, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild("form", { static: true }) form: NgForm;
  CurpForm: FormGroup;

  encuestas;
  respondidas = [];
  esCurpValido = false;

  constructor(private encuestaService: EncuestaService,
    private formBuilder: FormBuilder,
    private database: DataService) {
    this.crearFormulario();
  }

  ngOnInit() {
    this.obtenerEncuestas();
    if ( self.ServiceWorker ) {
      console.log(self.ServiceWorkerRegistration);
    }
  }

  obtenerEncuestas() {
    this.encuestas = JSON.parse(this.encuestaService.getAllEncuestas());
    console.log(this.encuestas);
  }

  crearFormulario() {
    this.CurpForm = this.formBuilder.group({
      curp: new FormControl('', [Validators.required, Validators.min(18), Validators.max(18)])
    });
  }

  validarCurp(curp) {
    for (const i in this.CurpForm.controls) {
      this.CurpForm.controls[i].markAsDirty();
      this.CurpForm.controls[i].updateValueAndValidity();
    }

    console.log(this.CurpForm);

    if (this.CurpForm.valid) {
      if (!this.curpValida(curp)) {
        this.CurpForm.controls['curp'].markAsDirty();
        this.CurpForm.controls['curp'].updateValueAndValidity();
        this.esCurpValido = false;
        return;
      }

      this.esCurpValido = true;
      sessionStorage.setItem('curp', curp);
      this.validadDbCurp(curp);
    }
  }

  validadDbCurp(curp){
    this.database.getByCurp(curp).then((result) => {
      console.log(result);
      this.respondidas = result.docs;

      this.respondidas.forEach(r => {
        this.encuestas.forEach(e => {
          if(e.id === r.id) {
            e.respondida = true;
          }
        });
      });
    });
  }

  curpValida(curp) {
    var re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
        validado = curp.match(re);
  
        debugger;
    if (!validado)  //Coincide con el formato general?
    	return false;
    
    //Validar que coincida el dígito verificador
    function digitoVerificador(curp17) {
        //Fuente https://consultas.curp.gob.mx/CurpSP/
        var diccionario  = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
            lngSuma      = 0.0,
            lngDigito    = 0.0;
        for(var i=0; i<17; i++)
            lngSuma = lngSuma + diccionario.indexOf(curp17.charAt(i)) * (18 - i);
        lngDigito = 10 - lngSuma % 10;
        if (lngDigito == 10) return 0;
        return lngDigito;
    }
  
    if (validado[2] != digitoVerificador(validado[1])) {
      console.log('False');
      return false;
    }
    console.log('true');
    return true; //Validado
}
}
