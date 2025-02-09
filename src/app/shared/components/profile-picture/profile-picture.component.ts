import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageSelectionDialogComponent } from './image-selection-dialog/image-selection-dialog.component';
import { ProfilePictureDialog } from '../../interfaces/profile-picture-dialog';

@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [],
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent {
  @Input() image!: string | null;
  @Input({ required: true }) r_iconName!: string;
  @Input() size: number = 100;
  @Input({ required: true }) r_editable!: boolean;
  @Input() themeColor!: string;

  @Output() imageDataChange = new EventEmitter<ProfilePictureDialog>();

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(ImageSelectionDialogComponent, {
      data: {
        themeColor: this.themeColor,
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
