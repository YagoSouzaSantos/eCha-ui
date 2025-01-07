import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';
import { BackgroundCardComponent } from "../../../shared/components/customizable-background/customizable-background.component";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, RouterOutlet, BackgroundCardComponent],
  templateUrl: './login-container.component.html',
})
export class LoginContainerComponent{

}
