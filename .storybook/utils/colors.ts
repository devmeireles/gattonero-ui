const tailwindColors = [
  'slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 
  'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 
  'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'
];

const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];

function generateTailwindColorClasses(prefix) {
  const colorClasses = [];

  tailwindColors.forEach(color => {
    shades.forEach(shade => {
      colorClasses.push(`${prefix}-${color}-${shade}`);
    });
  });

  return colorClasses;
}

export { generateTailwindColorClasses };
