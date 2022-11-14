import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GameComponent } from './game/game.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { SortArrayPipe } from './pipes/arraySort.pipe';

@NgModule({
  declarations: [GameComponent, DropdownDirective, SortArrayPipe],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [
    CommonModule,
    GameComponent,
    DropdownDirective,
    SortArrayPipe,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {}
