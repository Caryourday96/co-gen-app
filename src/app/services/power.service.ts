import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class PowerService {

  baseUrl = ''
  constructor(
    private db: AngularFirestore
  ) 
  { }

  load() {
    return this.db.collection('co-gen-webapp').doc('users').valueChanges();
    // this.db.firestore.collection('co-gen-webapp')
    // .doc('usage')
    // .get().then((doc)=> {
    //   if(doc.exists){
    //     return doc.data();
    //   } else {
    //     return ;
    //   }

    // });
  }

}
