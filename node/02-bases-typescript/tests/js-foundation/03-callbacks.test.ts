import { getUserById } from '../../src/js-foundation/04-arrow';


describe('js-foundation/03-callbacks.ts', () => {
    test('getUserById should return an error if user does not exist', (done)=> {

        const id = 10;
        getUserById(id, (err, user) => {
            expect(err).toBe(`USUARIO ${id} NO ENCONTRADO`);
            expect(err).toBeUndefined();

            done();
        });
    });

    test('getUserById should return John Doe', (done) => {
        const id = 1;

        getUserById(id, (err, user) => {
            expect(err).toBeUndefined();
            expect(user).toEqual({
                id: 1,
                name: 'John Doe',
              });
        });

        done();
    });
});