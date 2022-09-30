import { Component, OnInit } from '@angular/core';
import {Dictionary} from "../../model/dictionary";
import {DictionaryService} from "../../service/dictionary.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  dictionaries: Dictionary[] = [];
  tempDictionary: Dictionary = {};
  constructor(private dictionaryService: DictionaryService, private router: Router) { }

  ngOnInit(): void {
    this.dictionaries = this.dictionaryService.getAll();
  }

  detailDictionary(dictionary: Dictionary){
    this.tempDictionary = dictionary;
    this.router.navigate(['/dictionary', dictionary.word])
  }

  search(event: any) {
    this.router.navigate(['/dictionary', event]);
  }
}
