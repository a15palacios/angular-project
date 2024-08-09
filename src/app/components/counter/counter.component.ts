import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent implements OnInit, OnChanges, OnDestroy {
  @Input() startAt: number = 0;

  count: number = 0;

  ngOnInit(){
    console.log('init')
    this.count = this.startAt;
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('changes',changes)
  }

  ngOnDestroy(){

  }

  increment(){
    this.count ++
    this.startAt = 4
  }
}
