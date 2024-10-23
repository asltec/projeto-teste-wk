import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Produto } from "../models/produtos.model";
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

const PATH = 'produtos';

@Injectable()
export class ProdutosApi {

    private _firestore = inject(Firestore);

    private _collection = collection(this._firestore, PATH);

    constructor() { }

    getProdutos() {
        return collectionData(this._collection, { idField: 'id' }) as Observable<Produto[]>;
    }

    async getProdutoId(id: string) {
        try {
            const snapshot = await getDoc(this.document(id));
            return snapshot.data() as Produto;
          } catch (error) {
            //catch error
            return undefined;
          }
    }

    addProduto(produto: Produto) {
        return addDoc(this._collection, produto);
    }

    updateProduto(id: string, produto: Produto) {
        return updateDoc(this.document(id), { ...produto });
    }

    deleteProduto(id: string) {
        return deleteDoc(this.document(id));
    }

    private document(id: string) {
        return doc(this._firestore, `${PATH}/${id}`);
    }


}