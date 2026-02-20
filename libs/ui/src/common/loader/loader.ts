import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bw-loader',
  templateUrl: './loader.html',
  styleUrl: './loader.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {

}
