import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

interface BugButtonProps {
    className?: string,

}
export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);

    const throwNewEror = () => setError(true);

    useEffect(() => {
        throw new Error();
    }, [error]);
    return (
        <Button
            onClick={throwNewEror}
        >
            Throw error
        </Button>
    );
};
