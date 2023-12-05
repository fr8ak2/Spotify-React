import { Item } from '@components/Item/Item';
import { ItemGrid } from '@components/ItemGrid/ItemGrid';
import { Category } from '@lib/types';
import { FC } from 'react';

interface CategoriesListProps {
    categories?: Category[];
}

export const CategoriesList: FC<CategoriesListProps> = ({ categories }) => {
    return (
        <ItemGrid>
            {categories?.map(category => (
                <Item
					id={category.id}
					images={category.icons}
					alt={category.name}
                    heading={category.name}
					key={category.id}
                    type="genre"
                />
            ))}
        </ItemGrid>
    );
};
