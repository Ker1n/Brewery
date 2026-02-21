import {
  ChangeDetectionStrategy,
  Component,
  computed,
  forwardRef,
  input,
  signal,
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';


@Component({
  selector: 'bw-input',
  standalone: true,
  templateUrl: './input.html',
  styleUrls: ['./input.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  public label = input<string>('');
  public placeholder = input<string>('');
  public type = input<'text' | 'email' | 'password' | 'number' | 'search'>('text');
  public name = input<string>('');
  public id = input<string>('');
  public disabledInput = input(false);

  public value = signal('');
  public disabled = signal(false);
  public focused = signal(false);

  public isDisabled = computed(() => this.disabled() || this.disabledInput());
  public floatLabel = computed(() => this.focused() || !!this.value());

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  public writeValue(value: string | null): void {
    this.value.set(value ?? '');
  }

  public registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  public onInput(event: Event): void {
    const nextValue = (event.target as HTMLInputElement).value;
    this.value.set(nextValue);
    this.onChange(nextValue);
  }

  public onFocus(): void {
    this.focused.set(true);
  }

  public onBlur(): void {
    this.focused.set(false);
    this.onTouched();
  }
}
