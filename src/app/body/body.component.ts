import { Component, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemons: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.dataService.getPokemons(10, this.page + 0)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;
        response.results.forEach((result: any) => {
          this.dataService.getMoreData(result.name)
            .subscribe((res: any) => {
              this.pokemons.push(res)
              console.log(this.pokemons);

            });
        });
      }
      );
  }


 
}
