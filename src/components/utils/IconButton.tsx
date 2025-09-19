import type { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IconButtonProps {
	variant?: 'primary' | 'secondary1' | 'secondary2';
	children?: ReactNode;
	onClick?: () => void;
	className?: string;
}

export function IconButton({
	variant = 'primary',
	children,
	onClick,
	className,
}: IconButtonProps) {
	const classes = {
		basic:
			"h-[36px] w-[36px] relative z-10 text-primaryB text-center flex justify-center items-center disabled:before:hidden disabled:bg-disabled relative before:content-[''] before:block border before:-z-10 before:absolute before:inset-0 rounded-lg before:rounded-lg font-medium hover:bg-primaryA/10",
		variant: {
			primary:
				'before:bg-gradient-to-r before:from-primaryC before:to-accent hover:before:from-[#8a0838] hover:before:to-[#512abd] border-none',
			secondary2: 'border-borderInverseOpaque hover:bg-primaryB/10',
			secondary1: 'hover:bg-primaryB/20 border-none',
		},
	};

	return (
		<button
			className={twMerge(
				classes.basic,
				classes.variant[variant],
				className,
				'',
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
