import { forwardRef, useRef } from 'react';

export default forwardRef(function SelectInput({ className = '', children, ...props }, ref) {
    const input = ref ? ref : useRef();

    return (
        <select
            {...props}
            className={
                'border-gray-300 text-gray-600 rounded-md shadow-sm ' +
                className
            }
            ref={input}
        >
            {children}
        </select>
    );
});
