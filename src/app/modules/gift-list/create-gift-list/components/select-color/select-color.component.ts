import { Component } from '@angular/core';
import { BackgroundService } from '../../services/background.service';

@Component({
  selector: 'app-select-color',
  standalone: true,
  imports: [],
  templateUrl: './select-color.component.html',
  styleUrl: './select-color.component.scss'
})
export class SelectColorComponent {
  constructor(private signalService: BackgroundService) {}

  changeMessage() {
    // Altera o valor do signal ao clicar no botão
    this.signalService.setMessage('Novo valor da mensagem');
  }

}

