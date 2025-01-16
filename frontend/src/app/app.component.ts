import { Component, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from './user.service';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,UserComponent,RouterOutlet,JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  user: any = {
    name:'hamza',
    rollno:'123'.
  }

  constructor(private userService: UserService) { }
  receivedData: any = null;

  handleData(event: { obj: any }) {
    this.receivedData = event.obj;
  }
  onSubmit() {
    this.userService.onCrateUser(this.user).subscribe((res: any) => {
      if (res) {
        console.log(res);
      }
    });
  }


}
