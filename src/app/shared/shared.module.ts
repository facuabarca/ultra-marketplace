import { NgModule } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component';
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FooterComponent, HeaderComponent, AlertComponent],
  exports: [FooterComponent, HeaderComponent, AlertComponent],
  // providers: [AppFacadeService],
})
export class SharedModule {}
