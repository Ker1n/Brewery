import {inject, Injectable, Injector, Signal} from '@angular/core';
import {BreakpointObserver, BreakpointState} from '@angular/cdk/layout';
import {toSignal} from '@angular/core/rxjs-interop';
import {distinctUntilChanged, filter, map, merge, take} from 'rxjs';
import {ComponentType, Overlay, OverlayConfig} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {ModalRef} from './modal.ref';
import {MODAL_DATA} from './modal.token';
import {ModalContainerComponent} from './modal-container';


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private readonly overlay = inject(Overlay);
  private readonly injector = inject(Injector);
  private readonly breakpointObserver = inject(BreakpointObserver);

  private readonly isMobile: Signal<boolean> = toSignal(
    this.breakpointObserver.observe('(max-width: 768px)').pipe(
      map(({matches}: BreakpointState) => matches),
      distinctUntilChanged()
    ),
    {initialValue: true}
  );

  open<TComponent, TData = unknown, TResult = unknown>( content: ComponentType<TComponent>, data?: TData): ModalRef<TResult> {
    const overlayRef = this.overlay.create(this.buildOverlayConfig(this.isMobile()));
    const ref = new ModalRef<TResult>(overlayRef);

    merge(
      overlayRef.backdropClick(),
      overlayRef.keydownEvents().pipe(filter(ev => ev.key === 'Escape'))
    )
      .pipe(take(1))
      .subscribe(() => ref.close());

    const modalInjector = Injector.create({
      parent: this.injector,
      providers: [
        { provide: ModalRef, useValue: ref },
        { provide: MODAL_DATA, useValue: data }
      ],
    });

    const containerPortal = new ComponentPortal(ModalContainerComponent, null, modalInjector);
    const containerRef = overlayRef.attach(containerPortal);

    if (!containerRef) {
      overlayRef.dispose();
    }

    containerRef.instance.close = () => ref.close();

    const contentPortal = new ComponentPortal(content, null, modalInjector);
    containerRef.instance.outlet.attach(contentPortal);

    return ref;
  }

  private buildOverlayConfig(isMobile: boolean): OverlayConfig {
    const positionStrategy = isMobile
      ? this.overlay.position().global().left('0').right('0').bottom('0')
      : this.overlay.position().global().centerHorizontally().centerVertically();

    return new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'app-modal-backdrop',
      panelClass: isMobile ? 'app-modal-panel-sheet' : 'app-modal-panel-dialog',
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy,
    });
  }
}


