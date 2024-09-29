import { Component, effect, OnInit } from '@angular/core';
import { VerticalCardComponent } from '../../../shared/material/vertical-card/vertical-card.component';
import { BackgroundCardComponent } from "../../../shared/components/background-card/background-card.component";
import { BackgroundService } from './services/background.service';
import { SelectColorComponent } from "./components/select-color/select-color.component";
import { ProfilePictureComponent } from '../../../shared/material/profile-picture/profile-picture.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-gift-list',
  standalone: true,
  imports: [VerticalCardComponent, BackgroundCardComponent, SelectColorComponent, ProfilePictureComponent, MatFormFieldModule, MatInputModule],
  templateUrl: './create-gift-list.component.html',
  styleUrls: ['./create-gift-list.component.scss']
})
export class CreateGiftListComponent {
  message: string = '';
  img = 'https://s3-alpha-sig.figma.com/img/f575/8403/fce24b1aecbceb6f321309074ece69fe?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bbyLe53nFzvS1aA10dcWGEEaTBIhUDbjCBsMmnMfzJWZGw4FUPcj~jf73KBsc8KgDnpD0H01LiYitExKUzsazpH8j0zhaO1e7JIXBVAISbH4VTWAbUbHKATnXrR9qEqywk8oa7pp6KuZALQlboloxRcVzcu5XGo22hRwtTgMPXcEXlryybcG4-EtH2GyxY1n9kLToeSRsrY6~qfCGNPhGcy54st6V1XPPiiJ-EiR2OuXbDVr346Jj~PsbfMFiM7a0K74Gyc1Iob-mGrM5jVf-7rn5Lp37jbultqQVCohghldLPPACuWeEzYAeLXdJA3BBHzB96CuRVx9grTHfVM5sg__';

  constructor(private signalService: BackgroundService) {
    effect(() => {
      this.message = this.signalService.getMessageSignal()();
    });
  }

}
