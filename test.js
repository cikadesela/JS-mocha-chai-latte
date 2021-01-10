//example test case
const chai = require('chai')
  assert = chai.assert
  should = chai.should()
  expect = chai.expect

describe ('String',function(){

  //hook for run test case in certain state/Conditional
  before(function(){
    //runs once before the first test in this block
    console.log('Before hook')
  });

  after(function(){
    //runs once after the last test in this block
    console.log('After hook')
  });

  beforeEach(function(){
    //runs before each test in this block
    console.log('beforeEach hook')
  });

  afterEach(function(){
    //runs after each test in this block
    console.log('afterEach hook')
  });

  var name='Cika'

  it('Should be type of string', function(){
    name.should.be.a('string')
    expect(name).to.be.a('string')
    assert.typeOf(name,'string')
  })

  it('Should contain Cika',function(){
    name.should.equal('Cika')
    name.should.not.equal('Des')
    expect(name).to.equal('Cika')
    assert.equal(name,'Cika')
  })

  //skipping a test case
  it.skip('Should contain not contain numeric',function(){
    name.should.not.a('integer')
    expect(name).to.be.a('string')
    assert.typeOf(name,'Cika')
  })

  //skipping all test case except one
  //it.only('testcase_description',function(){......})
})
