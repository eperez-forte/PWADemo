import { Injectable, EventEmitter } from '@angular/core';
import PouchDB from 'pouchdb';
import PouchDBFind from 'pouchdb-find';
PouchDB.plugin(PouchDBFind);

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dbOnline: any;
  private isInstantiatedOnline: boolean;
  private listenerOnline: EventEmitter<any> = new EventEmitter();

  private dbOffline: any;
  private isInstantiatedOffline: boolean;
  private listenerOffline: EventEmitter<any> = new EventEmitter();

  private dbCurp: any;
  private isInstantiatedCurp: boolean;
  private listenerCurp: EventEmitter<any> = new EventEmitter();

  public constructor() {

    if (!this.isInstantiatedOnline) {
      this.dbOnline = new PouchDB('db-online');
      this.isInstantiatedOnline = true;
    }

    if (!this.isInstantiatedOffline) {
      this.dbOffline = new PouchDB('db-offline');
      this.isInstantiatedOffline = true;
    }

    if (!this.isInstantiatedCurp) {
      this.dbCurp = new PouchDB('db-curp');
      this.isInstantiatedCurp = true;
    }
  }


  /////////////////////// Online/////////////////////////
  public fetchOnline() {
    return this.dbOnline.allDocs({include_docs: true});
  }

  public getOnline(id: string) {
    return this.dbOnline.get(id);
  }

  public postOnline(id: string, document: any) {
    document._id = id;
    return this.dbOnline.put(document);
  }

  public putOnline(id: string, document: any) {
    document._id = id;
    return this.getOnline(id).then(result => {
        //document._rev = result._rev;
        return this.dbOnline.put(document);
    }, error => {
        if (error.status === '404') {
            return this.dbOnline.put(document);
        } else {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
    });
  }

  public syncOnline(remote: string) {
      const remoteDatabase = new PouchDB(remote);
      this.dbOnline.sync(remoteDatabase, {
          live: true
      }).on('change', change => {
          this.listenerOnline.emit(change);
      }).on('error', error => {
          console.error(JSON.stringify(error));
      });
  }

  public getChangeListenerOnline() {
      return this.listenerOnline;
  }

  /////////////////////// Offline /////////////////////////
  public fetchOffline() {
    return this.dbOffline.allDocs({include_docs: true});
  }

  public getOffline(id: string) {
    return this.dbOffline.get(id);
  }

  public postOffline(id: string, document: any) {
    document._id = id;
    return this.dbOffline.put(document);
  }

  public putOffline(id: string, document: any) {
    document._id = id;
    return this.getOffline(id).then(result => {
        //document._rev = result._rev;
        return this.dbOffline.put(document);
    }, error => {
        if (error.status === '404') {
            return this.dbOffline.put(document);
        } else {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
    });
  }

  public syncOffline(remote: string) {
      const remoteDatabase = new PouchDB(remote);
      this.dbOffline.sync(remoteDatabase, {
          live: true
      }).on('change', change => {
          this.listenerOffline.emit(change);
      }).on('error', error => {
          console.error(JSON.stringify(error));
      });
  }

  public getChangeListenerOffline() {
      return this.listenerOffline;
  }

  /////////////////////// Curp /////////////////////////
  public fetchCurp() {
    return this.dbCurp.allDocs({include_docs: true});
  }

  public getCurp(id: string) {
    return this.dbCurp.get(id);
  }

  public postCurp(id: string, document: any) {
    document._id = id;
    return this.dbCurp.put(document);
  }

  public putCurp(id: string, document: any) {
    document._id = id;
    return this.getCurp(id).then(result => {
        //document._rev = result._rev;
        return this.dbCurp.put(document);
    }, error => {
        if (error.status === '404') {
            return this.dbCurp.put(document);
        } else {
            return new Promise((resolve, reject) => {
                reject(error);
            });
        }
    });
  }

  public syncCurp(remote: string) {
      const remoteDatabase = new PouchDB(remote);
      this.dbCurp.sync(remoteDatabase, {
          live: true
      }).on('change', change => {
          this.listenerCurp.emit(change);
      }).on('error', error => {
          console.error(JSON.stringify(error));
      });
  }

  public getByCurp(curp: string) {
    return this.dbCurp.find({
      selector: {
        curp
      }
    });
  }

  public getChangeListenerCurp() {
      return this.listenerCurp;
  }
}
