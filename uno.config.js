import presetAttributify from '@unocss/preset-attributify'
import { defineConfig, presetIcons, presetUno } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import transformerDirectives from '@unocss/transformer-directives'
import { extractorSvelte } from '@unocss/core'

export default defineConfig({
    // mode: 'svelte-scoped',
    extractors: [extractorSvelte],
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            prefix: '',
        }),
        presetWebFonts({
            provider: 'google',
            fonts: {
                sans: [
                    {
                        name: 'Radio Canada',
                        weights: ['300', '400', '500', '700'],
                    },
                    {
                        name: 'Noto Sans KR',
                        weights: ['100', '300', '400', '500', '700', '900'],
                    },
                ],
            },
        }),
    ],
    preflights: [
        {
            getCSS: ({ theme }) => `
                  * {
                    font-family: 'Radio Canada', 'Noto Sans KR', sans-serif;;
                    padding: 0;
                    margin: 0;
                  }
            `,
        },
    ],
    transformers: [transformerDirectives()],
})
