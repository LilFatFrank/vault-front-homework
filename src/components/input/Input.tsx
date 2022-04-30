import React from 'react';
import styled from 'styled-components';

type Props = {
    placeholder: string;
    value: string;
    onChange: (v: string) => void;
};

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

const StyledInput = styled.input`
    padding: 8px;
    border: 1px solid hsl(0, 0%, 10%);
    border-radius: 4px;
`;

export default Input;
