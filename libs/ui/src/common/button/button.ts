import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'bw-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  public disabled = input(false);
  public type = input<'button' | 'submit' | 'reset'>('button');
}
