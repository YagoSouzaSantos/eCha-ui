import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Item } from '../../../../../core/interfaces/item';
import { SnackbarService } from '../../../../../shared/services/snackbar.service';
import { ADD_ITEM_IMPORTS } from './add-item-imports';
import { Category } from '../../../../../core/interfaces/category';
import { CategoryService } from '../../../../../core/services/category.service';
import { ItemService } from '../../../../../core/services/item.service';

export interface DialogData {
  themeColor: string;
  item: Item;
}

@Component({
  selector: 'app-add-item-dialog',
  standalone: true,
  imports: [ADD_ITEM_IMPORTS],
  templateUrl: './add-item-dialog.component.html',
  styleUrl: './add-item-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddItemDialogComponent {
  readonly dialogRef = inject(MatDialogRef<AddItemDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  #categoryService = inject(CategoryService);
  #itemService = inject(ItemService);
  #snackbarService = inject(SnackbarService);

  categories: Category[] = [];

  newItem: Item = {
    id: 0,
    listId: '',
    name: '',
    totalValue: 0,
    valueItemCollected: 0,
    remainingValue: 700,
    categoryId: 0,
    image: null,
  };

  ngOnInit(): void {
    if (this.data.item) {
      this.newItem = { ...this.data.item };
    }

    this.#categoryService.getAllCategories().subscribe({
      next: (data) => this.categories = data,
      error: (err) => {
        console.error('Erro ao buscar categorias:', err);
      },
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = () => {
          this.newItem.image = reader.result as string;
        };
        reader.readAsDataURL(file);
      } else {
        this.#snackbarService.showAlert('O arquivo selecionado não é uma imagem.');
        this.newItem.image = null;
      }
    }
  }

  onValueChange(value: number): void {
    this.newItem.totalValue = value;
  }

  save() {
    if (this.newItem.id) {
      // Se o ID já existir, atualiza o item
      this.#itemService.updateItem(this.newItem).subscribe({
        next: (updatedItem) => {
          this.dialogRef.close(updatedItem);
          this.#snackbarService.showAlert('Item atualizado com sucesso!');
        },
        error: (err) => {
          console.error('Erro ao atualizar o item:', err);
          this.#snackbarService.showAlert('Erro ao atualizar o item.');
        }
      });
    } else {
      // Se o ID não existir, cria um novo item
      this.#itemService.addItem(this.newItem).subscribe({
        next: (addedItem) => {
          this.dialogRef.close(addedItem);
          this.#snackbarService.showAlert('Item adicionado com sucesso!');
        },
        error: (err) => {
          console.error('Erro ao adicionar o item:', err);
          this.#snackbarService.showAlert('Erro ao adicionar o item.');
        }
      });
    }
  }

  cancel() {
    this.dialogRef.close();
  }
}
