import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-smal-card',
  standalone: true,
  imports: [],
  templateUrl: './smal-card.component.html',
  styleUrl: './smal-card.component.css'
})
export class SmalCardComponent {
  @Input()
  imgSmalCard:string = " "
  @Input()
  linkSmalCard:string = " "
  @Input()
  titleSmalCard:string = " "
  @Input()
  description:string = " "
}
