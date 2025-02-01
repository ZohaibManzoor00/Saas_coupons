const compactNumberFormatter = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

export const formatCompactNumber = (num: number) => {
    return compactNumberFormatter.format(num)
};
