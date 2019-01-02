import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-mfe-b',
  templateUrl: './mfe-b.component.html',
  styleUrls: ['./mfe-b.component.scss'],
})
export class MfeBComponent implements OnInit {
  @Input() message: string

  constructor() {}

  ngOnInit() {}
}
