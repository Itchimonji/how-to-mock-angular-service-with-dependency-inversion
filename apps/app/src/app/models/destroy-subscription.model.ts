import { Subject } from 'rxjs';

export class DestroySubscription {
  protected onDestroy$: Subject<void>;

  constructor() {
    this.onDestroy$ = new Subject();
  }

  onDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
