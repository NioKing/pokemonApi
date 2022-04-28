import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
  constructor(private dataService: DataService) { }
  pokemon: any[] = [];
  ngOnInit(): void {
  }

  // Search
  searchPokemon(name: any) {
    if (name !== '') {
      this.dataService.getMoreData(name)
        .subscribe((res: any) => {
          console.log(res);
          this.pokemon = res
        })
    }
      
  }

}
