import { Component, inject, Input, model, signal } from '@angular/core';
import { ICONS } from '../../icons/phosphoricons';
import { MatDialog } from '@angular/material/dialog';
import { ImageSelectionDialogComponent } from './image-selection-dialog/image-selection-dialog.component';


@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [],
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.scss'
})
export class ProfilePictureComponent {
  icons = ICONS;

  @Input() imageUrl!: string;
  @Input() size: number = 100;
  @Input({ required: true }) r_editable!: boolean;



  readonly animal = signal('');
  readonly name = model('');
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(ImageSelectionDialogComponent, {
      data: {name: this.name(), animal: this.animal()},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result !== undefined) {
        this.animal.set(result);
      }
    });
  }



}
