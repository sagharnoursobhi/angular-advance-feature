import {Component, Input, OnInit} from '@angular/core';

type Data = {
  [key: string]: string;
};
type item = {
  type: 'capital' | 'country',
  name: string,
  status: 'normal' | 'chosen' | 'wrong' | "solved"
}

@Component({
  selector: 'app-country-capital',
  template: ` <div class="container mt-5">
    <ng-container *ngIf="items.length; else noitem">
      <button *ngFor="let item of items"
              [ngStyle]="getStyle(item)"
              (click)="itemClicked(item)">{{item.name}}</button>
    </ng-container>
    <ng-template #noitem>
      Congratulations.
    </ng-template>
  </div> `,
  styles: [`
    .container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      row-gap: 16px;
    }
  `]
})
// Do not change the way the component is named and exported.
export class CountryCapitalComponent implements OnInit{

  //@Input() data: Data = {};
  /* @Input() set data(countries: any) {
    Object.keys(countries).map((country) => {
      this.items.push({
        type: 'country',
        name: country,
        status: 'normal'
      })
    });

    Object.values(countries).forEach((cap) => {
      this.items.push({
        type: 'capital',
        name: cap,
        status: 'normal'
      })
    })
  } */

   data: Data = {
    "Germany": "Berlin",
    "Iran": "Tehran",
    "Sweden": "Stock",
    "Swiss": "Zurik"
   };
  items: Array<item> = [];

  ngOnInit() {

    this.items = Object.keys(this.data).map((country) => {
      return {
        type: 'country',
        name: country,
        status: 'normal'
      }
    });

    Object.values(this.data).forEach((cap) => {
      this.items.push({
        type: 'capital',
        name: cap,
        status: 'normal'
      })
    })

    console.log(this.items);


  }

  public itemClicked(choice: item): void {
    if (choice.status === 'chosen') {
      return;
    }
    const activeItem = this.findActive();
    console.log("activeItem: ");
    console.log(activeItem);
    console.log("choice: ");
    console.log(choice);
    if (!activeItem) {//first choice
      this.resetAllItems();
      choice.status = 'chosen';
      this.updateItems(choice);
      console.log(this.items);
    } else {//second choice
      if (activeItem.type === 'country') {
        if (this.data[activeItem.name] === choice.name) {//first we clicked country then clicked capital
          choice.status = "chosen";
          this.updateItems(choice);
          this.deleteActives();
        } else {//wrong response
          choice.status = "wrong";
          activeItem.status = "wrong"
          this.updateItems(activeItem);
          this.updateItems(choice);
        }
      } else {//second choice and type is capital
        let country = '';
        Object.keys(this.data).forEach((item) => {
          if (this.data[item] === activeItem.name) {
            country = item;
          }
        });

        console.log("data[country]: " + this.data[country])
        console.log("choice.name: " +  choice.name)
        if (country === choice.name) {
          choice.status = "chosen";
          this.updateItems(choice);
          this.deleteActives();
        } else {
          choice.status = "wrong";
          activeItem.status = "wrong"
          this.updateItems(activeItem);
          this.updateItems(choice);
        }
      }
    }
  }

  private resetAllItems(): void
  {
    this.items = this.items.map((item) => {
      item.status = 'normal';
      return item;
    })
  }

  private deleteActives(): void
  {
    this.items = this.items.filter((item) => {
      if (item.status !== 'chosen') {
        return item;
      }
      return null;
    })
  }

  private updateItems(choice: item): void
  {
    this.items = this.items.map((item) => {
      if (item.name === choice.name) {
        item.status = choice.status
      }
      return item;
    })
  }

  private findActive(): item | null
  {
    return this.items.find( item =>
        item.status === 'chosen'
    ) || null;
  }

  public getStyle(btnItem: item): {[key: string]: string}
  {
    return {
      backgroundColor: btnItem.status === 'normal' ? '#ffffff' : btnItem.status === 'chosen' ? '#0000ff' : '#ff0000',
    }
  }
}
