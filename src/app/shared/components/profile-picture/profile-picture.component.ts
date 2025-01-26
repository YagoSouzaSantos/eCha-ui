import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICONS } from '../../icons/phosphoricons';
import { ImageSelectionDialogComponent } from './image-selection-dialog/image-selection-dialog.component';

export interface CustomImageData {
  urlImage: string;
  base64Image: string;
}

@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [],
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent {
  @Input() imageUrl!: string | null;
  @Input() size: number = 100;
  @Input({ required: true }) r_editable!: boolean;
  @Input() themeColor!: string;

  @Output() imageDataChange = new EventEmitter<CustomImageData>();

  icons = ICONS;
  base64Image!: string;

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(ImageSelectionDialogComponent, {
      data: {
        themeColor: this.themeColor,
        urlImage: this.imageUrl,
        base64Image: this.base64Image,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const imageData: CustomImageData = {
          urlImage: result.urlImage,
          base64Image: result.base64Image,
        };
        this.imageDataChange.emit(imageData);

        this.imageUrl = imageData.urlImage;
        this.base64Image = imageData.base64Image;
      }
    });
  }
}
