import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    size?: 's' | 'm';
    color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
    href?: 'string';
}