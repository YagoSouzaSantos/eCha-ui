import { ChangeDetectionStrategy, Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { Category } from '../../../core/interfaces/category';
import { CategoryService } from '../../../core/services/category.service';

@Component({
  selector: 'app-category-chip',
  standalone: true,
  imports: [MatChipsModule],
  templateUrl: './category-chip.component.html',
  styleUrls: ['./category-chip.component.scss'], // Corrigido para "styleUrls"
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryChipComponent {
  @Output() filterChange = new EventEmitter<Category>();
  #categoryService = inject(CategoryService);

  categories = signal<Category[]>([]);

  ngOnInit(): void {
    this.#categoryService.getAllCategories().subscribe({
      next: (data) => this.categories.set(data),
      error: (err) => {
        console.error('Erro ao buscar categorias:', err);
      },
    });
  }

  onSubmit(category: Category): void {
    this.filterChange.emit(category);
  }
}
