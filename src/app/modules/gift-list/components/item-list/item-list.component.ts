import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Item } from '../../../../core/interfaces/item';
import { SmoothBackGroundDirective } from '../../../../core/diretives/smoothBackGround.directive';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ItemCardComponent } from "./item-card/item-card.component";
import { SnackbarService } from '../../../../shared/services/snackbar.service';
import { FilterComponent } from '../../../../shared/components/filter/filter.component';
import { CategoryChipComponent } from "../../../../shared/components/category-chip/category-chip.component";

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [MatButtonModule, SmoothBackGroundDirective, ItemCardComponent, FilterComponent, CategoryChipComponent],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  #snackbarService = inject(SnackbarService);

  @Input({ required: true }) r_themeColor!: string;
  @Input({ required: true }) r_items: Item[] = [];

  readonly dialog = inject(MatDialog);

  showAddItemDialog() {
    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      data: {
        themeColor: this.r_themeColor
      }
    });

    dialogRef.afterClosed().subscribe((newItem: Item) => {
      if (newItem) {
        this.r_items.push(newItem);
      }
    });
  }

  handleEdit(item: Item) {
    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      data: {
        themeColor: this.r_themeColor,
        item
      }
    });

    dialogRef.afterClosed().subscribe((updatedItem: Item) => {
      if (updatedItem) {
        const index = this.r_items.findIndex(i => i.id === updatedItem.id);
        if (index > -1) {
          this.r_items[index] = updatedItem;
        }
      }
    });
  }

  handleDelete(item: Item) {
    const index = this.r_items.findIndex(i => i.id === item.id);

    if (index !== -1) {
      this.r_items.splice(index, 1);
      this.#snackbarService.showSuccess(`Item ${item.name} removido com sucesso.`);
    } else {
      this.#snackbarService.showError('Não foi possível remover o item.');
    }
  }
}
