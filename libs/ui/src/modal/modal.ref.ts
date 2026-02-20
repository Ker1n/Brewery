import {OverlayRef} from '@angular/cdk/overlay';
import {Observable, Subject} from 'rxjs';


export class ModalRef<TResult> {
  private readonly closed$ = new Subject<TResult>();

  constructor(private overlayRef: OverlayRef) {}

  public close(result?: TResult) {
    this.overlayRef?.dispose();
    this.closed$.next(result ?? null as TResult);
    this.closed$.complete();
  }

  public afterClosed(): Observable<TResult> {
    return this.closed$.asObservable();
  }
}
