import {Component, ChangeDetectionStrategy, ViewChild} from '@angular/core';
import {CdkPortalOutlet, PortalModule} from '@angular/cdk/portal';

@Component({
  selector: 'app-modal-container',
  standalone: true,
  imports: [PortalModule],
  templateUrl: 'modal-container.html',
  styleUrls: ['./modal-container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalContainerComponent {
  @ViewChild(CdkPortalOutlet, { static: true }) outlet!: CdkPortalOutlet;
  close: () => void = () => {};
}
