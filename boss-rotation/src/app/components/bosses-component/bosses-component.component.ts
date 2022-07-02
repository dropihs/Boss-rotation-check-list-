import {Component ,OnInit} from '@angular/core';
//import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-bosses-component',
  templateUrl: './bosses-component.component.html',
  styleUrls: ['./bosses-component.component.css']
})
export class BossesComponentComponent implements OnInit {


  todo = ['Oberon',
  'Gold Token',
  'Urmahlullu',
  'Drume',
  'Tentugly',
  'Ratmiral',
  'Mini Feaster',
  'Final Feaster',
  'Dream Final',
  'Dream Mini',
  'Scarlet'];

  done = [''];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
