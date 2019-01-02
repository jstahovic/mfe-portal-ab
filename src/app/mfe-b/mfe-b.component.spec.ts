import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { MfeBComponent } from './mfe-b.component'

describe('MfeBComponent', () => {
  let component: MfeBComponent
  let fixture: ComponentFixture<MfeBComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MfeBComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(MfeBComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
