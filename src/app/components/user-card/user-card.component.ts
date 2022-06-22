import { ChangeDetectionStrategy, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent implements OnChanges, OnInit, OnDestroy {

  @Input() userList: any[] = [];
  showMessage: boolean = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("user-card onChanges");
  }

  ngOnInit(): void {
    console.log("user-card onInit")
  }

  ngOnDestroy(): void {
    console.log("user-card will destroy");
  }

}
