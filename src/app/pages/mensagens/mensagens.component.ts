import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";
import { MensagenComponent } from './mensagem/mensagem.component';

@Component({
  selector: 'app-mensagens',
  standalone: true,
  imports: [MenuTitleComponent , MensagenComponent , BigCardComponent],
  templateUrl: './mensagens.component.html',
  styleUrl: './mensagens.component.css'
})
export class MensagensComponent {

}
