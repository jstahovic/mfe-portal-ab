import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-mfe-a',
  templateUrl: './mfe-a.component.html',
  styleUrls: ['./mfe-a.component.scss'],
})
export class MfeAComponent implements OnInit {
  @Input() message: string
  constructor() {}
  ngOnInit() {}
}
