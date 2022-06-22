import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnChanges, OnInit, DoCheck, OnDestroy {

  userList: any[] = [];

  constructor(private userSvc: UserService) { 
    console.log("----------------------");
    console.log("    user-admin Const    ");
    console.log("----------------------");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges");
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

  ngDoCheck(): void {
    console.log("doCheck");
  }

  ngOnDestroy(): void {
    console.log("onDestroy");
  }

  dummyMethod():void {}

  removeFirstMutating() {
    this.userList.splice(0, 1);
  }

  removeFirstWithoutMutating() {
    const userListCopy = [...this.userList];    
    userListCopy.splice(0, 1);
    this.userList = userListCopy;
  }
}
