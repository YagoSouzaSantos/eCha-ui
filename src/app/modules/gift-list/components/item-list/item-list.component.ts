import { AuthenticationService } from './../../../../core/services/authentication.service';
import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
import { ItemService } from '../../../../core/services/item.service';
import { UserService } from '../../../../core/services/user.service';
import { GiftList } from '../../../../core/interfaces/gift-list';
import { User } from '../../../../core/interfaces/user';

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
  @Input({ required: true }) r_listId!: string;
  @Input() giftList!: GiftList;
  @Output() itemAdded = new EventEmitter<Item>();
  @Output() itemUpdated = new EventEmitter<Item>();

  readonly dialog = inject(MatDialog);
  #snackbarService = inject(SnackbarService);
  #userService = inject(UserService);

  filteredItems: Item[] = [];
  filterValue: string = '';
  user!: User;

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
        themeColor: this.r_themeColor,
        listId: this.r_listId,
      },
    });

    dialogRef.afterClosed().subscribe((newItem: Item | null) => {
      if (newItem) {
        this.itemAdded.emit(newItem);
      }
    });
  }

  handleEdit(item: Item) {
    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      data: {
        themeColor: this.r_themeColor,
        item,
      },
    });

    dialogRef.afterClosed().subscribe((updatedItem: Item | null) => {
      if (updatedItem) {
        this.itemUpdated.emit(updatedItem);
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
      data: {
        themeColor: this.r_themeColor,
        item
      }
    });

    dialogRef.afterClosed().subscribe((result: PaymentData | undefined) => {
      if (result) {

        if (result.pixDetails)
          this.openPaymentPixDialog(result);

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

  openPaymentPixDialog(payment: PaymentData) {
    this.#userService.getUserById(this.giftList.userId).subscribe({
      next: (user) => {
        console.log('user: ', user);
        this.user = user;

        if (!this.user.pixKey) {
          this.#snackbarService.showAlert('Chave Pix não encontrada.');
          return;
        }

        const dialogRef = this.dialog.open(PaymentPixDialogComponent, {
          data: {
            themeColor: this.r_themeColor,
            value: payment.amount
          }
        });

        dialogRef.afterClosed().subscribe(() => {
          this.openAddMessageDialog();
        });
      },
      error: (err) => {
        console.error('Erro ao buscar usuário:', err);
        this.#snackbarService.showError('Erro ao buscar usuário.');
      }
    });
  }
}
