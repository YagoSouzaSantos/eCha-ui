import { Component, inject, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Item } from '../../../../core/interfaces/item';
import { SnackbarService } from '../../../../shared/services/snackbar.service';
import { ITEM_LIST, ITEM_LIST_SHARED } from '../imports';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';
import { AddMessageDialogComponent } from './add-message-dialog/add-message-dialog.component';
import { PaymentData } from '../../../../core/interfaces/payment-data';
import { PaymentPixDialogComponent } from './payment-pix-dialog/payment-pix-dialog.component';
import { Category } from '../../../../core/interfaces/category';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [ITEM_LIST, ITEM_LIST_SHARED],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent implements OnInit, OnChanges {
  @Input({ required: true }) r_editable: boolean = false;
  @Input({ required: true }) r_themeColor!: string;
  @Input({ required: true }) r_items!: Item[];

  readonly dialog = inject(MatDialog);
  #snackbarService = inject(SnackbarService);

  filteredItems: Item[] = [];
  filterValue: string = '';

  ngOnInit(): void {
    this.filteredItems = [...this.r_items];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['r_items']) {
      this.filteredItems = [...this.r_items];
    }
  }

  onFilter(value: string): void {
    this.filterValue = value;

    if (!value.trim()) {
      this.filteredItems = [...this.r_items];
    } else {
      this.filteredItems = this.r_items.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
    }
  }

  onChipFilter(category: Category): void {
    this.filterValue = category.name;

    if (category.id === null || category.id === undefined || category.id === 0) {
      this.filteredItems = [...this.r_items];
    } else {
      this.filteredItems = this.r_items.filter(item =>
        item.categoryId === category.id
      );
    }
  }

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

  handlePaymentDialog(item: Item) {
    const dialogRef = this.dialog.open(PaymentDialogComponent, {
      disableClose: true,
      data: {
        themeColor: this.r_themeColor,
        item
      }
    });

    dialogRef.afterClosed().subscribe((result: PaymentData | undefined) => {
      if (result) {

        if (result.pixDetails)
          this.openPaymentPixDialog();

        else if (result.cardDetails) {
          this.openAddMessageDialog();
        }
      } else
        this.#snackbarService.showAlert("Pagamento cancelado.");

    });
  }

  openAddMessageDialog() {
    const dialogRef = this.dialog.open(AddMessageDialogComponent, {
      disableClose: true,
      data: {
        themeColor: this.r_themeColor
      }
    });
    dialogRef.afterClosed().subscribe(() => { });
  }

  openPaymentPixDialog() {
    const dialogRef = this.dialog.open(PaymentPixDialogComponent, {
      disableClose: true,
      data: {
        themeColor: this.r_themeColor
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.openAddMessageDialog();
    });
   }
}
