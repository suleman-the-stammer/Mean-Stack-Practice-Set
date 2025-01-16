import { JsonPipe } from '@angular/common';
import { Component,EventEmitter,Input,OnInit,Output} from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [JsonPipe,AppComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
@Input () data:any ;

@Output() send= new EventEmitter<{obj:any}>();



obj:any={
  name:'suleamn'
}

ngOnInit() {
  this.send.emit({ obj: this.obj });
}

}
