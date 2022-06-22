import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnChanges, OnInit, OnDestroy {

  userList: any[] = [];

  constructor(private userSvc: UserService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("user-admin onChanges");
  }

  ngOnInit(): void {
    console.log("user-admin onInit");

    const getUsers = async() => {
      try {
        const users = await this.userSvc.getAll();
        this.userList = users;
      } catch (error) {
        console.log("Error", error);
      }
    }
    getUsers();
  }

  removeFirstUserMutating() {
    this.userList.splice(0, 1);
  }

  removeFirstUserWithoutMutating() {
    const userListCopy = [...this.userList];    
    userListCopy.splice(0, 1);
    this.userList = userListCopy;
  }

  ngOnDestroy(): void {
    console.log("user-admin will destroy");
  }
}
