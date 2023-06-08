import { Component } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: any
  constructor(private restService: RestService) {}

  ngOnInit() {
    this.restService.getUsers().subscribe((data: any) => {
      this.users = data
    })
  }
}
