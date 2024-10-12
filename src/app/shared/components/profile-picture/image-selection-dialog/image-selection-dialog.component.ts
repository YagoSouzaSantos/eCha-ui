import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

export interface DialogData {
  animal: string;
  name: string;

  urlImage: string;
}


@Component({
  selector: 'app-image-selection-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './image-selection-dialog.component.html',
  styleUrl: './image-selection-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageSelectionDialogComponent { 

  readonly dialogRef = inject(MatDialogRef<ImageSelectionDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly animal = model(this.data.animal);

  readonly urlImage = model(this.data.animal);

  onNoClick(): void {
    this.dialogRef.close();
  }
}
