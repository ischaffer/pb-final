import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { types } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pb-final';

  items: Observable<any[]>;
  constructor(firestore: AngularFirestore, public auth: AngularFireAuth){
    this.items = firestore.collection('items').valueChanges();
  }
  login(email,password) {
    this.auth.signInWithEmailAndPassword(email,password);
  }
  logout() {
    this.auth.signOut();
  }
}
