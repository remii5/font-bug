import localFont from 'next/font/local';

export const helveticaNeue = localFont({
    src : [
        {
            path: '../../../public/fonts/helveticaneue-light.otf',
            weight: '300',
            style: 'light',
        },
        {
            path: '../../../public/fonts/helveticaneue-medium.otf',
            weight: '500',
            style: 'medium',
        },
        {
            path: '../../../public/fonts/helveticaneue-roman.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../../public/fonts/helveticaneue-thin.otf',
            weight: '200',
            style: 'thin',
        },
        {
            path: '../../../public/fonts/helveticaneue-bold.otf',
            weight: '700',
            style: 'bold',
        },
    ],
    variable: '--font-helvetica-neue',
    display: 'swap',
});