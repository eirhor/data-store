import { expect } from 'chai';
import DataStore from '../index.js';

describe('given an instance of DataStore', () => {
    let ds;
    let number;
    before(() => {
        ds = new DataStore();
        number = Math.random();
    });
    describe('when I supply the data', () => {
        before(() => {
            ds.add({
                testData: number,
            });
        })
        it('should return the same data', () => {
            expect(ds.get().testData).to.be.equal(number);
        })
    })
});

describe('given multiple instances of DataStore', () => {
    let ds1;
    let number;
        before(() => {
        ds1 = new DataStore();
        number = Math.random();
    });
    describe('when I supply the data', () => {
        let ds2;
        before(() => {
            ds1.add({
                testData: number,
            });

            ds2 = new DataStore();
        });
        it('the data should be the same', () => {
            expect(ds1.get().testData).to.be.equal(ds2.get().testData);
        })
    })
})