import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import Spinner from './Spinner';

interface ButtonProps {
	variant?: 'primary' | 'secondary' | 'outlined' | 'tertiary';
	processing?: boolean;
	size?: 'xs' | 'sm' | 'md' | 'lg';
	disabled?: boolean;
	children?: ReactNode;
	onClick?: () => void;
	className?: string;
}

export function Button({
	variant = 'primary',
	size = 'md',
	disabled = false,
	processing,
	children,
	onClick,
	className,
}: ButtonProps) {
	const classes = {
		basic:
			"font-primary relative z-10 text-primaryB text-center flex justify-center items-center disabled:before:hidden disabled:bg-disabled relative before:content-[''] before:block border before:-z-10 before:absolute before:inset-0 rounded-lg before:rounded-lg font-medium hover:bg-primaryA/10 cursor-pointer",
		variant: {
			primary:
				'before:bg-gradient-to-r before:from-primaryC before:to-accent hover:before:from-[#8a0838] hover:before:to-[#512abd] border-none',
			secondary:
				'before:bg-gradient-to-r before:from-[#404040] before:to-[#bbbbbb] hover:before:from-[#2e2d2d] hover:before:to-[#a3a2a2] border-none',
			outlined:
				'border-borderInverseOpaque processing:bg-primaryB/10 hover:bg-primaryB/10',
			tertiary: 'hover:bg-primaryB/10 disabled:bg-transparent border-none',
		},
		size: {
			xs: 'min-w-[12vh] w-auto p-1.5 h-9.5',
			sm: 'min-w-[256px] w-auto px-3 h-9',
			md: 'min-w-[256px] w-auto px-3.5 h-12',
			lg: 'min-w-[343px] w-auto px-5 h-14',
		},
		disabled: 'cursor-not-allowed opacity-50',
	};

	return (
		<button
			className={twMerge(
				classes.basic,
				classes.variant[variant],
				classes.size[size],
				disabled ? classes.disabled : '',
				className,
				'',
			)}
			onClick={onClick}
			disabled={disabled}
		>
			{processing ? <Spinner /> : children}
		</button>
	);
}
