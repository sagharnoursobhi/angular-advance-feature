import { Component, OnInit } from "@angular/core";


interface Data {
  [key: string]: string
}

interface Item {
  type: "capital" | "country",
  name: string,
  status: "normal" | "chosen" | "wrong" | "solved"
}

@Component({
  selector: "country",
  template: `
    <div class="country-container mt-5 mb-5">
      <ng-container *ngIf="items.length; else noitem" >
        <button
          *ngFor="let item of items"
          [ngStyle]="getStyle(item)"
          (click)="clickedHandler(item)"
        >{{ item.name }}</button>
      </ng-container>
      <ng-template #noitem>Congratulations</ng-template>
    </div>
    <div class="btn-container mb-4">
      <button class="btn btn-primary" (click)="reset()">Reset</button>
    </div>
  `,
  styles: [`
    .country-container {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
    .btn-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `]
})
export class SecCountryComponent implements OnInit {

  data: Data = {
    "Germany": "Berlin",
    "Iran": "Tehran",
    "Swiss": "Zurik",
    "Sweden": "Stock"
  }

  items: Array<Item> = [];

  ngOnInit() {
    Object.values(this.data).forEach(cap => {
        this.items.push({
          type: "capital",
          name: cap,
          status: "normal"
        })
    })

    Object.keys(this.data).forEach(count => {
      this.items.push({
        type: "country",
        name: count,
        status: "normal"
      })
    })

    this.reset();
  }

  clickedHandler(choice:Item) {

    if(choice.status === "chosen") {
      return;
    }

    const activeItem = this.findActive();
    if(!activeItem) {
      this.resetAllItems();
      choice.status = "chosen"
      this.updateItem(choice);
    } else {
      if(activeItem.type === "country") {
        if (this.data[activeItem.name] === choice.name) {
          choice.status = "chosen";
          this.updateItem(choice);
          this.deleteItems();
        } else {
          choice.status = "wrong";
          activeItem.status = "wrong";
          this.updateItem(choice);
          this.updateItem(activeItem);
        }
      } else {
        let countryOfActiveItem = "";

        Object.keys(this.data).forEach(item => {
          if(this.data[item] === activeItem.name) {
            countryOfActiveItem = item;
          }
        })
        console.log(countryOfActiveItem)
        if (countryOfActiveItem === choice.name) {
          choice.status = "chosen";
          this.updateItem(choice);
          this.deleteItems();
        } else {
          choice.status = "wrong";
          activeItem.status = "wrong";
          this.updateItem(choice);
          this.updateItem(activeItem);
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

  private deleteItems() {
    this.items = this.items.filter(item => item.status !== "chosen") || null;
  }

  private updateItem(choice: Item) {
    this.items = this.items.map(item => {
      if (item.name === choice.name) {
        item.status === choice.status
      }
      return item;
    })
  }

  private findActive() : Item | null{
    return this.items.find(item => item.status === "chosen") || null;
  }

  public getStyle(btnItem: Item): {[key: string]: string} {
    return {
      backgroundColor: btnItem.status === "normal" ? "#ffffff"
      : btnItem.status === "chosen" ? "#0000ff" : '#ff0000',
    }
  }

  reset() {
    Object.values(this.data).forEach(cap => {
      this.items.push({
        type: "capital",
        name: cap,
        status: "normal"
      })
    })

    Object.keys(this.data).forEach(count => {
      this.items.push({
        type: "country",
        name: count,
        status: "normal"
      })
    })
  }

}
