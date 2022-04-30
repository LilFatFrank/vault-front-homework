/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import styled from 'styled-components';

type Props = {
    placeholder: string;
    value: string;
    onChange: (v: string) => void;
};

const StyledInput = styled.input`
    padding: 8px;
    border: 1px solid hsl(0, 0%, 10%);
    border-radius: 4px;
`;

function Input({ value, onChange, placeholder }: Props) {
    return (
        <StyledInput
            type="text"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange(e.target.value)
            }
            placeholder={placeholder}
        />
    );
}

export default Input;
