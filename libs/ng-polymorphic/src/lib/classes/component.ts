import { Injector, Type } from '@angular/core';
import { POLYMORPHIC_CONTEXT } from '../tokens/context';

/**
 * Wrapper class for a component that will be used as content for {@link PolymorphicOutletDirective}
 *
 * @param component — an Angular component to be dynamically created
 * @param injector — optional {@link Injector} for lazy loaded module case
 */
export class PolymorphicComponent<T extends object, C extends object> {
  constructor(
    readonly component: Type<T>,
    private readonly injector: Injector | null = null
  ) {}

  createInjector(injector: Injector, context: C): Injector {
    return Injector.create({
      parent: this.injector || injector,
      providers: [
        {
          provide: POLYMORPHIC_CONTEXT,
          useValue: context,
        },
      ],
    });
  }
}
