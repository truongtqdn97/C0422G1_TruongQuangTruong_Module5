import { Injectable } from '@angular/core';
import {Dictionary} from "../model/dictionary";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaries: Dictionary[] = [{
    word: 'hi',
    mean: 'chào'
  },{
    word: 'you',
    mean: 'em'
  },{
    word: 'I',
    mean: 'anh'
  },{
    word: 'stand',
    mean: 'đứng'
  },{
    word: 'here',
    mean: 'đây'
  },{
    word: 'from',
    mean: 'từ'
  },{
    word: 'afternoon',
    mean: 'chiều'
  }];
  constructor() { }

  getAll(){
    return this.dictionaries;
  }

  findWord(keyword: string){
    return this.dictionaries.filter(element => element.word === keyword)[0];
  }
}
