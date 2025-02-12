import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../../../../core/interfaces/item';
import { DIALOG } from '../../imports';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [DIALOG],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemCardComponent {
  @Input({ required: true }) r_item!: Item;
  @Input({ required: true }) r_editable: boolean = false;
  @Input({ required: true }) r_themeColor!: string;

  @Output() eventEditClick = new EventEmitter<Item>();
  @Output() eventDeleteClick = new EventEmitter<Item>();
  @Output() eventPaymentClick = new EventEmitter<Item>();

  onClickEdit(item: Item) {
    this.eventEditClick.emit(item);
  }

  onClickDelete(item: Item) {
    this.eventDeleteClick.emit(item);
  }

  openPaymentDialog(item: Item) {
    if (!this.r_editable) {
      this.eventPaymentClick.emit(item);
    }
  }

  isBase64Image(image: string): boolean {
    return image.startsWith('data:image/');
  }
}
