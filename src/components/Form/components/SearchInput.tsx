import { Button } from '@shared/Button/Button';
import { Icon } from '@shared/Icon/Icon';
import { clsx } from 'clsx';
import { FC } from 'react';

import styles from './SearchInput.module.scss';

interface SearchInputProps {
    className?: string;
    model?: string;
    onChange?: () => void;
    onClick?: () => void;
}

export const SearchInput: FC<SearchInputProps> = ({ className, model, onChange, onClick }) => {
    return (
        <div className={clsx(styles.searchInput, className)}>
            <Icon id="search" />

            <input
                type="text"
                className={clsx(styles.SearchInputField)}
                placeholder="What you want to listen?"
                value={model}
                onChange={onChange}
                spellCheck={false}
            />

            {model && (
                <Button className="" onClick={onClick} type="button">
                    <Icon id="close" />
                </Button>
            )}
        </div>
    );
};
