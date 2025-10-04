type Mods = Record<string, boolean | string>;

/**
 * Returns a class string based on given class, modifiers and additional classes
 * Modifiers are expected to be an object where keys are modifier names and values
 * are boolean values indicating whether the modifier is active or not.
 * If the value of a modifier is a string, it will be used as a class name.
 * Additional classes will be added to the end of the string.
 * @param {string} cls base class name
 * @param {Mods} mods modifiers object
 * @param {string[]} additional additional classes array
 * @returns {string} a class string
 */
export const classNames = (
  cls: string = "",
  mods: Mods = {},
  additional: string[] = [],
): string => [
  cls,
  ...additional.filter(Boolean),
  Object.entries(mods)
    .filter(([, value]) => Boolean(value))
    .map(([className]) => className),
]
  .join(" ")
  .replace(",", " ")
  .trim();
