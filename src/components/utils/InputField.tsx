import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

export const IconStatus = {
  COMPLETE: 0,
  INCOMPLETE: 1,
  LOADING: 2,
  CLOSE: 3,
} as const;
export type IconStatus = typeof IconStatus[keyof typeof IconStatus];

export const InputSize = {
  SM: "SM",
  MD: "MD",
  LG: "LG",
} as const;
export type InputSize = typeof InputSize[keyof typeof InputSize];

export const InputStatus = {
  DEFAULT: "DEFAULT",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
} as const;
export type InputStatus = typeof InputStatus[keyof typeof InputStatus];

export const InputType = {
  NUMBER: "NUMBER",
  EMAIL: "EMAIL",
  PASSWORD: "PASSWORD",
  TEXT: "TEXT",
} as const;
export type InputType = typeof InputType[keyof typeof InputType];

const inputTypeMap = {
  [InputType.NUMBER]: 'number',
  [InputType.EMAIL]: 'email',
  [InputType.PASSWORD]: 'password',
  [InputType.TEXT]: 'text',
} as const;

interface InputFieldProps {
  label?: string;
  hint?: string;
  iconStatus?: IconStatus;
  size?: InputSize;
  status?: InputStatus;
  counter?: { max: number };
  onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  type?: InputType;
}

export const InputField = ({
  label,
  hint,
  iconStatus,
  size = InputSize.SM,
  status = InputStatus.DEFAULT,
  counter,
  disabled = false,
  className,
  onChange,
  placeholder = 'placeholder',
  type = InputType.TEXT,
}: InputFieldProps) => {
  const borderColors = {
    [InputStatus.DEFAULT]: 'border-borderOpaque',
    [InputStatus.SUCCESS]: 'border-positive border-2',
    [InputStatus.ERROR]: 'border-negative border-2',
  };

  const hintColors = {
    [InputStatus.DEFAULT]: 'text-contentInverseTertiary',
    [InputStatus.SUCCESS]: 'text-positive',
    [InputStatus.ERROR]: 'text-negative',
  };

  const sizeStyles = {
    [InputSize.SM]: 'text-[14px]',
    [InputSize.MD]: 'text-[16px]',
    [InputSize.LG]: 'text-[18px]',
  };

  const [cross, setCross] = useState(false);
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const counterCheck = () => {
    setCross(value.length === 0);
  };

  const counterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange && onChange(e);
  };

  useEffect(() => {
    counterCheck();
    if (counter && value.length > counter.max) {
      setValue(value.slice(0, counter.max));
      alert('Limit exceed');
    }
    // eslint-disable-next-line
  }, [value]);

  const isPassword = type === InputType.PASSWORD;
  const resolvedInputType = isPassword && showPassword ? 'text' : inputTypeMap[type];

  return (
    <div className="flex flex-col gap-1 w-[375px]">
      {label && (
        <div className={`flex justify-between items-center ${size} text-white/90`}>
          <label className={sizeStyles[size]}>{label}</label>
          {counter && (
            <span className={`${size} text-white/50`}>
              {value.length}/{counter.max}
            </span>
          )}
        </div>
      )}

      <div
        className={twMerge(
          'flex items-center border rounded-lg px-3 text-white',
          borderColors[status],
          sizeStyles[size],
          status === InputStatus.DEFAULT && !disabled
            ? focused
              ? 'border-borderInverseSelected border-[2px]'
              : borderColors[status]
            : '',
          status === InputStatus.DEFAULT &&
            value.length > 0 &&
            !focused &&
            iconStatus === IconStatus.CLOSE
            ? 'bg-contentSecondary'
            : '',
          disabled &&
          'bg-contentSecondary cursor-not-allowed border-borderInverseTransparent text-white/50',
          className,
        )}
      >
        <input
          type={resolvedInputType}
          onChange={counterHandler}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          className="bg-transparent outline-none w-full p-2 disabled:cursor-not-allowed"
        />

        {/* Password toggle icon */}
        {isPassword && (
          <div onClick={() => setShowPassword(!showPassword)} className="cursor-pointer ml-2">
            {showPassword
              ? <FaEye />
              : value.length ? <FaEyeSlash /> : <></>
            }
          </div>
        )}

        {/* Other status-based icons */}
        {!isPassword && (
          <div
            onClick={() => {
              if (iconStatus === IconStatus.CLOSE) {
                setValue('');
              }
            }}
            className="ml-2 hover:cursor-pointer"
          >
            {(!cross &&
              status === InputStatus.DEFAULT &&
              !([IconStatus.COMPLETE, IconStatus.INCOMPLETE, IconStatus.LOADING] as IconStatus[]).includes(iconStatus!)
            ) ||
              (status === InputStatus.ERROR && !cross) ? (
              <img src="/assets/Icons/InputIcons/close.svg" alt="" />
            ) : iconStatus === IconStatus.COMPLETE ? (
              <img src="/assets/Icons/InputIcons/success.svg" alt="" />
            ) : iconStatus === IconStatus.INCOMPLETE ? (
              <img src="/assets/Icons/InputIcons/error.svg" alt="" />
            ) : iconStatus === IconStatus.LOADING ? (
              <div className="flex items-center justify-center">
                <div className="relative w-5 h-5">
                  <div className="text-backgroundInverseSecondary absolute w-full h-full rounded-full border-3 border-t-[#662dff] animate-spin"></div>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        {status === InputStatus.SUCCESS ? (
          <span>
            <img src="/assets/Icons/InputIcons/success.svg" alt="" />
          </span>
        ) : status === InputStatus.ERROR ? (
          <span>
            <img src="/assets/Icons/InputIcons/error.svg" alt="" />
          </span>
        ) : (
          <span></span>
        )}
        {hint && (
          <span
            className={twMerge(
              'text-[14px]',
              disabled ? 'text-contentInverseTertiary' : hintColors[status],
            )}
          >
            {hint}
          </span>
        )}
      </div>
    </div>
  );
};
