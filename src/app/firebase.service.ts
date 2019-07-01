import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/Storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  public db: firebase.firestore.Firestore;
  public fs: firebase.storage.Storage;

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyCih_oeQci0XC2JqB9kcG6kjC8ufJDD8uE",
      authDomain: "expenseaccount-7952d.firebaseapp.com",
      databaseURL: "https://expenseaccount-7952d.firebaseio.com",
      projectId: "expenseaccount-7952d",
      storageBucket: "expenseaccount-7952d.appspot.com",
      messagingSenderId: "450104982945",
      appId: "1:450104982945:web:9beeba923926f2d5"
    };
    firebase.initializeApp(firebaseConfig);

    this.db = firebase.firestore();
    this.fs = firebase.storage();
  }
}