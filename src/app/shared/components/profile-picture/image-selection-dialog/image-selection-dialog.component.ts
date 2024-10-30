import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SmoothBackGroundDirective } from '../../../../core/diretives/smoothBackGround.directive';
import { TextColorDirective } from '../../../../core/diretives/textColor.directive';

export interface DialogData {
  themeColor: string;
  urlImage: string;
}

@Component({
  selector: 'app-image-selection-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule, MatIconModule, MatInputModule, FormsModule, MatButtonModule, MatDialogActions, MatDialogClose, SmoothBackGroundDirective, TextColorDirective
  ],
  templateUrl: './image-selection-dialog.component.html',
  styleUrl: './image-selection-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageSelectionDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ImageSelectionDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  readonly urlImage = signal<string>(this.data.urlImage);
  readonly base64Image = signal<string | null>(null);
  readonly filePath = signal<string | null>(null);

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) {
      return;
    }

    const file = input.files[0];
    this.filePath.set(file.name);

    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.base64Image.set(e.target.result as string);
    };

    reader.readAsDataURL(file);
  }

  onSelectImage(): void {
    this.dialogRef.close({
      urlImage: this.urlImage(),
      base64Image: this.base64Image(),
      filePath: this.filePath(),
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
