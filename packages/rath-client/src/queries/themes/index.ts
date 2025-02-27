import { VegaThemeConfig } from './config';

import { default as VIS_GOOGLE_THEME } from './theme-googlecharts';
import { default as VIS_GGPLOT2_THEME } from './theme-ggplot2';
import { default as VIS_VOX_THEME } from './theme-vox';
import { default as VIS_POWERBI_THEME } from './theme-powerbi';
import { default as VIS_538_THEME } from './theme-fivethreeeight'
import { default as VIS_EXCEL_THEME } from './theme-excel';
import { default as VIS_LATIMES_THEME } from './theme-latimes'

export enum THEME_KEYS {
    googlecharts = 'googlecharts',
    ggplot2 = 'ggplot',
    default = 'default',
    vox = 'vox',
    powerbi = 'powerbi',
    fivethreeeight = '538',
    excel = 'excel',
    latimes = 'latimes'
}

export const prebuiltThemes: Readonly<Record<string, VegaThemeConfig>> = {
    [THEME_KEYS.googlecharts]: VIS_GOOGLE_THEME,
    [THEME_KEYS.powerbi]: VIS_POWERBI_THEME,
    [THEME_KEYS.ggplot2]: VIS_GGPLOT2_THEME,
    [THEME_KEYS.vox]: VIS_VOX_THEME,
    [THEME_KEYS.excel]: VIS_EXCEL_THEME,
    [THEME_KEYS.fivethreeeight]: VIS_538_THEME,
    [THEME_KEYS.latimes]: VIS_LATIMES_THEME,
};
