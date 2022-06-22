import { ChangeDetectionStrategy, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent implements OnChanges, OnInit, DoCheck, OnDestroy {

  @Input() userList: any[] = [];

  constructor() { 
    console.log("----------------------");
    console.log("    user-card Const    ");
    console.log("----------------------");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onChanges");
  }
  
  ngOnInit(): void {
    console.log("onInit");
  }

  ngDoCheck(): void {
    console.log("doCheck");
  }

  ngOnDestroy(): void {
    console.log("onDestroy");
  }

}
