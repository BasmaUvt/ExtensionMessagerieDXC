import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component'; // Importez FormsModule
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';



// ... autres imports de composants

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MessageListComponent,
    MessageFormComponent,
    LoginFormComponent,
    ChatComponent,
    LoginComponent,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    
    // ... autres déclarations de composants
  ],
  imports: [
    BrowserModule,
    FormsModule, // Ajoutez FormsModule à la liste des imports
    RouterModule,
    AppRoutingModule,
    // ... autres imports de modules
  ],
  providers: [
    DatePipe,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
