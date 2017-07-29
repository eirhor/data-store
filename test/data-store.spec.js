import { expect } from 'chai';
import DataStore from '../index.js';

describe('given an instance of DataStore', () => {
    let ds;
    let number;
    before(() => {
        ds = new DataStore();
        number = Math.random();
    });
    describe('when I supply the name', () => {
        before(() => {
            ds.add({
                testData: number,
            });
        })
        it('should return the same number', () => {
            expect(ds.get().testData).to.be.equal(number);
        })
    })
});