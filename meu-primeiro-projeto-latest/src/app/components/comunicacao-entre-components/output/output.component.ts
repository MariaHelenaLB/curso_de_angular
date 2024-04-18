import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {
  @Output() public outputName = new EventEmitter(); //toa vez que utilizar o outputName precisa do Event

  public sendOutputName(){
    return this.outputName.emit("Maria Helena");
  }
}
