import { fireEvent, render } from '@testing-library/react';
import SessionForm from ".";

describe('Session form', () => {
    it('On click Auth login link form should change to AuthForm and Sign up link form should change to RegisterForm', () => {

        const onSubmit = jest.fn();

        const { queryByTestId } = render(<SessionForm onSubmit={onSubmit} />);

        const changeLink = queryByTestId('ChangeFormLink');

        expect(changeLink).not.toBeNull();
        expect(changeLink!.textContent).toBe("Sign in");

        fireEvent.click(changeLink!);

        expect(changeLink!.textContent).toBe("Auth");
    });
});