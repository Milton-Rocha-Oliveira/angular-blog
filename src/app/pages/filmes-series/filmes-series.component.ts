import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";

@Component({
  selector: 'app-filmes-series',
  standalone: true,
  imports: [MenuTitleComponent],
  templateUrl: './filmes-series.component.html',
  styleUrl: './filmes-series.component.css'
})
export class FilmesSeriesComponent {

}
