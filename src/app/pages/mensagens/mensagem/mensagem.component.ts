import { Component, Input } from '@angular/core'; 

@Component({
  selector: 'app-mensagem',
  standalone: true,
  imports: [],
  templateUrl: './mensagem.component.html',
  styleUrl: './mensagem.component.css'
})
export class MensagenComponent {
  @Input()
  img:string = ""
  @Input()
  title:string = ""
  @Input()
  description:string = ""
  @Input()
  videoId:string = ""
  @Input()
  tema:string = " "
}
