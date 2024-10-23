import { inject, Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/compat/database";
import { Cliente } from "../models/clientes.model";
import {
    Firestore,
    addDoc,
    collection,
    collectionData,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    updateDoc,
    where,
} from '@angular/fire/firestore';
import { Observable } from "rxjs";

const PATH = 'clientes';

@Injectable()
export class ClientesApi {

    private _firestore = inject(Firestore);

    private _collection = collection(this._firestore, PATH);
    

    constructor() { }

    getClientes() {
        return collectionData(this._collection, { idField: 'id' }) as Observable<Cliente[]>;
    }

    async getClienteId(id: string) {
        try {
            const snapshot = await getDoc(this.document(id));
            return snapshot.data() as Cliente;
          } catch (error) {
            //catch error
            return undefined;
          }
    }

    addCliente(cliente: Cliente) {
        return addDoc(this._collection, cliente);
    }

    updateCliente(id: string, cliente: Cliente) {
        return updateDoc(this.document(id), { ...cliente });
    }

    deleteCliente(id: string) {
        return deleteDoc(this.document(id));
    }

    private document(id: string) {
        return doc(this._firestore, `${PATH}/${id}`);
    }


}