import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

import {
    addDoc,
    collection,
    collectionData,
    deleteDoc,
    doc,
    Firestore,
    getDoc,
    updateDoc
} from '@angular/fire/firestore';
import { Pedido } from "../models/pedidos.mode";

const PATH = 'pedidos';

@Injectable()
export class PedidosApi {

    private _firestore = inject(Firestore);

    private _collection = collection(this._firestore, PATH);

    constructor() { }

    getPedidos() {
        return collectionData(this._collection, { idField: 'id' }) as Observable<Pedido[]>;
    }
    
    async getPedidoId(id: string) {
        try {
            const snapshot = await getDoc(this.document(id));
            return snapshot.data() as Pedido;
          } catch (error) {
            //catch error
            return undefined;
          }
    }

    addPedido(pedido: Pedido) {
        return addDoc(this._collection, pedido);
    }

    updatePedido(id: string, pedido: Pedido) {
        return updateDoc(this.document(id), { ...pedido });
    }

    deletePedido(id: string) {
        return deleteDoc(this.document(id));
    }

    private document(id: string) {
        return doc(this._firestore, `${PATH}/${id}`);
    }


}