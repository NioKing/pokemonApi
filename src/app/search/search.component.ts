import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 
  constructor(
    private dataService: DataService,
    private dialog: MatDialog) { }
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
        
     const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      data: {
        pokemon: this.pokemon
        
      },
      
    })

    dialogRef.afterClosed().subscribe((res: any) => {
      console.log(res);
      
    })
        })
    } 
  }




}
