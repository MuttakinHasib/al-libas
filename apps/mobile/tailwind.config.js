const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter-light': 'Inter_300Light',
        'inter-regular': 'Inter_400Regular',
        'inter-medium': 'Inter_500Medium',
        'inter-semibold': 'Inter_600SemiBold',
        'inter-bold': 'Inter_700Bold',
        'inter-black': 'Inter_900Black',
      },
    },
  },
  plugins: [],
};
