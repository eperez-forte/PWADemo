import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contestadas',
  templateUrl: './contestadas.component.html',
  styleUrls: ['./contestadas.component.scss']
})
export class ContestadasComponent implements OnInit {
  curpIngresados = [];
  contestadas = [];

  constructor(private database: DataService) { 
    this.obtenerRegistroCurps();
  }

  ngOnInit() {
    
    
  }
  
  obtenerRegistroCurps() {
    this.database.fetchCurp().then(docs => {
      this.database.fetchCurp().then(docs => {
        docs.rows.forEach( row => {
  
          let doc = row.doc;
          //console.log(doc);
          this.curpIngresados.push(doc)
        });
      });
    });
    console.log(this.curpIngresados);
    this.obtenerContestadas();
  }

  obtenerContestadas() {
    this.database.fetchOffline().then(docs => {
      docs.rows.forEach( row => {

        let doc = row.doc;
        //console.log(doc);
        console.log(doc);
        console.log(this.curpIngresados.find(c => c.id === doc.id));
        doc.curp = this.curpIngresados.find(c => c.id === doc.id).curp;
        this.contestadas.push(doc)
      });
    });
    
  }
  
}
