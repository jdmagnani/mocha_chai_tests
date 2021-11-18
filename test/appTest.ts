import { assert } from 'chai';
import { App } from '../app';

let app: App;


describe('App tests', () => {

    beforeEach(() => {
        app = new App();
    })

    describe('Tests for sayHello: ', () => {
        
        it('App should return hello', () => {
            let result = app.sayHello();
            assert.equal(result, 'hello');
        });
    
        it('sayHello should retun type string', () => {
            let result = app.sayHello();
            assert.typeOf(result, 'string');
        });
    
    });

    describe('Tests for addNumbers: ', () => {

        it('Sum of two numbers', () => {

            let value1: number = 10;
            let value2: number = 10;
            let result = app.addNumbers(value1, value2);
            assert.equal(result, (value1 + value2));
        });
    
        it('addNumbers should be above 5', () => {
            let result:number = app.addNumbers(5, 5);
            assert.isAbove(result, 5);
        });
    
        it('addNumbers shuold return a number', () => {
            let result = app.addNumbers(2, 3);
            assert.typeOf(result, 'number');
        });
    }); 
});