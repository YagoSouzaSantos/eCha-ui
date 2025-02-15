import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTooltip } from '@angular/material/tooltip';
import { ProfilePictureDialog } from '../../interfaces/profile-picture-dialog';
import { ImageSelectionDialogComponent } from './image-selection-dialog/image-selection-dialog.component';

@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [MatTooltip],
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent {
  @Input({ required: true }) r_iconName!: string;
  @Input({ required: true }) r_editable!: boolean;
  @Input() r_themeColor!: string;
  @Input() image!: string | null;
  @Input() size: number = 100;

  @Output() imageDataChange = new EventEmitter<ProfilePictureDialog>();

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(ImageSelectionDialogComponent, {
      data: {
        themeColor: this.r_themeColor,
        urlImage: ''
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const imageData: ProfilePictureDialog = {
          image: result.base64Image || result.urlImage
        };
        this.imageDataChange.emit(imageData);
        this.image = imageData.image;
      }
    });
  }
}
