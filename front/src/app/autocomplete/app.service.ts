import { Injectable } from '@angular/core';
 
import { HttpClient  } from "@angular/common/http";
import { Observable, of, Subscription } from "rxjs";
import {  tap, map } from "rxjs/operators";




@Injectable()
export class AppService {
    
    wordslist = [];
	url: string
    constructor(private http: HttpClient ){}

    get_record() {
        return this.wordslist.length
          ? of(this.wordslist)
          : this.http
              .get<any>("https://api.datamuse.com/words?ml=bron")
              .pipe(tap(data => (this.wordslist = data)));
      }

    search_word(searchkey){
        return this.http.get(this.url + searchkey).map(res => {
        	return res.json().map(item => {
        		return item.word
        	})
        })
    }
}