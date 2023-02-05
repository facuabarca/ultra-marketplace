import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component';
import { ErrorDirective } from './directives/error-input.directive';
import { SharedFacadeService } from './shared-facade.service';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, AlertComponent, ErrorDirective],
  exports: [HeaderComponent, AlertComponent, ErrorDirective],
  providers: [SharedFacadeService],
})
export class SharedModule {}
