/**
 * Global index counter to preserve source order.
 * As we create the style sheet during ngOnInit lifecycle,
 * children are handled after the parents, so the order of style elements would
 * be parent->child. It is a problem though when a parent passes a className
 * which needs to override any childs styles. StyleSheet of the child has a higher
 * specificity, because of the source order.
 * So our solution is to render sheets them in the reverse order child->sheet, so
 * that parent has a higher specificity.
 *
 * We start at [Number.MIN_SAFE_INTEGER] to always insert sheets from ng-jss first before any
 * sheet which might be inserted manually by the user.
 */
let index = Number.MIN_SAFE_INTEGER || -1e9;

export const getSheetIndex = () => index++;

export default getSheetIndex;
