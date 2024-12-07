import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { SmalCardComponent } from "../../components/smal-card/smal-card.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";

@Component({
  selector: 'app-filmes-series',
  standalone: true,
  imports: [MenuTitleComponent, SmalCardComponent, BigCardComponent],
  templateUrl: './filmes-series.component.html',
  styleUrl: './filmes-series.component.css'
})
export class FilmesSeriesComponent {

}
